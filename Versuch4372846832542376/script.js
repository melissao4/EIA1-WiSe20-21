var difficulty;
var playerScore = 0;
var compScore = 0;
var hasFlippedCard = false;
var lockBoard = false;
var firstCard;
var secondCard;
//HTML Elemente, die später gebraucht werden
var levelPopup;
var tableArea;
window.addEventListener("load", function () {
    //HTML Elemente selektieren
    levelPopup = document.querySelector(".levelMenuContent");
    //Funktionen, die zu Beginn ausgeführt werden müssen
    levelSelector();
});
//Am Anfang Level auswählen in Popup
function levelSelector() {
    var selectedLevel = document.getElementsByClassName("selectLevel");
    var _loop_1 = function (i_1) {
        selectedLevel[i_1].addEventListener("click", function () {
            currentLevel = selectedLevel[i_1].innerHTML;
            togglePopup();
            prepareTable();
            cardSelector();
        });
    };
    for (var i_1 = 0; i_1 < selectedLevel.length; i_1++) {
        _loop_1(i_1);
    }
}
function prepareTable() {
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
function layOutCards(pairNumber) {
    shuffle(allCards);
    for (var index = 0; index < pairNumber; index++) {
        playingCards.push(allCards[index].pair[0]);
        playingCards.push(allCards[index].pair[1]);
    }
    shuffle(playingCards);
    displayCards();
}
function cardSelector() {
    var playableCards = document.getElementsByClassName("cardElement");
    for (var f = 0; f < playableCards.length; f++) {
        playableCards[f].addEventListener("click", function () {
            flipCard();
        });
    }
}
function flipCard() {
    if (lockBoard)
        return;
    if (this === firstCard)
        return;
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
    setTimeout(function () {
        console.log(firstCard);
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1500);
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
function togglePopup() {
    levelPopup.classList.toggle("hidden");
}
function shuffle(cards) {
    //Generic Types (T), um Funktion für Arrays von Typ Card und Pair anwenden zu können
    var currentIndex = cards.length, temporaryValue, randomIndex;
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
function displayCards() {
    switch (currentLevel) {
        case "Easy": {
            for (var index = 0; index < playingCards.length; index++) {
                var cardElement = document.createElement("div");
                var imgElement = document.createElement("img");
                var colorElement = document.createElement("div");
                var backFace = document.createElement("div");
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
            for (var index = 0; index < playingCards.length; index++) {
                var cardElement = document.createElement("div");
                var imgElement = document.createElement("img");
                var colorElement = document.createElement("div");
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
            for (var index = 0; index < playingCards.length; index++) {
                var cardElement = document.createElement("div");
                var colorElement = document.createElement("div");
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
    var _a, _b;
    _a = [false, false], hasFlippedCard = _a[0], lockBoard = _a[1]; //nur Kurzschreibweise
    _b = [null, null], firstCard = _b[0], secondCard = _b[1];
}
//# sourceMappingURL=script.js.map