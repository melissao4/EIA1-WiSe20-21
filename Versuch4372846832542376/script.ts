

let difficulty: string;
let playerScore: number = 0;
let compScore: number = 0;
let hasFlippedCard: boolean = false;
let lockBoard: boolean = false;
let firstCard;
let secondCard;

//HTML Elemente, die später gebraucht werden
let levelPopup: HTMLElement;
let tableArea: HTMLDivElement;

window.addEventListener("load", function (): void {
  //HTML Elemente selektieren
  levelPopup = document.querySelector(".levelMenuContent");

  //Funktionen, die zu Beginn ausgeführt werden müssen
  levelSelector();
});

//Am Anfang Level auswählen in Popup
function levelSelector(): void {
  let selectedLevel: HTMLCollection = document.getElementsByClassName(
    "selectLevel"
  );
  for (let i: number = 0; i < selectedLevel.length; i++) {
    selectedLevel[i].addEventListener("click", function (): void {
      currentLevel = selectedLevel[i].innerHTML;
      togglePopup();
      prepareTable();
      cardSelector();
    });
  }
}

function prepareTable(): void {
  tableArea = document.createElement("div");
  switch (currentLevel) {
    case "Easy": {
      tableArea.id = "easyTable";
      document.querySelector(".table").appendChild(tableArea);
      layOutCards(4);
      break;
    }
    case "Medium": {
      tableArea.id = "mediumTable";
      document.querySelector(".table").appendChild(tableArea);
      layOutCards(8);
      break;
    }
    case "Hard": {
      tableArea.id = "hardTable";
      document.querySelector(".table").appendChild(tableArea);
      layOutCards(16);
      break;
    }
  }
}

function layOutCards(pairNumber: number) {
  shuffle<Pair>(allCards);
  for (let index = 0; index < pairNumber; index++) {
    playingCards.push(allCards[index].pair[0]);
    playingCards.push(allCards[index].pair[1]);
  }
  shuffle<Card>(playingCards);
  displayCards();
}

function cardSelector(): void { 
  let playableCards: HTMLCollection = document.getElementsByClassName(
    "cardElement"
  );
  for (let f: number = 0; f < playableCards.length; f++) {
    playableCards[f].addEventListener("click", function (): void {
      flipCard();
    });
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  secondCard = this;

  checkForMatch();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    console.log(firstCard);
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  },         1500);
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    unflipCards();
  }
  //Was, wenn es ein match ist?
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

//Hilfsfunktionen ("Utilities")
function togglePopup(): void {
  levelPopup.classList.toggle("hidden");
}

function shuffle<T>(cards: T[]): T[] {
  //Generic Types (T), um Funktion für Arrays von Typ Card und Pair anwenden zu können
  let currentIndex = cards.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
  return cards;
}

//Karten darstellen
function displayCards(): void {
  switch (currentLevel) {
    case "Easy": {
      for (let index = 0; index < playingCards.length; index++) {
        let cardElement: HTMLElement = document.createElement("div");
        let imgElement: HTMLImageElement = document.createElement("img");
        let colorElement: HTMLElement = document.createElement("div");
        let backFace: HTMLElement = document.createElement("div");

        imgElement.className = "imgV1";

        cardElement.classList.add("cardElement");
        backFace.classList.add("back-face");

        colorElement.classList.add("colorElement");
        colorElement.style.backgroundColor = playingCards[index].color;

        tableArea.appendChild(cardElement);
        cardElement.appendChild(imgElement);
        cardElement.appendChild(colorElement);
        cardElement.appendChild(backFace);
      }
      break;
    }
    case "Medium": {
      for (let index = 0; index < playingCards.length; index++) {
        let cardElement: HTMLElement = document.createElement("div");
        let imgElement: HTMLImageElement = document.createElement("img");
        let colorElement: HTMLElement = document.createElement("div");

        imgElement.className = "imgV2";

        cardElement.classList.add("cardElement");
        cardElement.innerHTML = playingCards[index].text;

        colorElement.classList.add("colorElement");
        colorElement.style.backgroundColor = playingCards[index].color;

        tableArea.appendChild(cardElement);
        cardElement.appendChild(imgElement);
        cardElement.appendChild(colorElement);
      }
      break;
    }
    case "Hard": {
      for (let index = 0; index < playingCards.length; index++) {
        let cardElement: HTMLElement = document.createElement("div");
        let colorElement: HTMLElement = document.createElement("div");

        cardElement.classList.add("cardElement");
        cardElement.innerHTML = playingCards[index].text;

        colorElement.classList.add("colorElement");
        colorElement.style.backgroundColor = playingCards[index].color;

        tableArea.appendChild(cardElement);
        cardElement.appendChild(colorElement);
      }
      break;
    }
  }
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false]; //nur Kurzschreibweise
  [firstCard, secondCard] = [null, null];
}