var cardsArray = [{
  name: "shell",
  img: "./img/1c4f352b5e8e879c1fcf2c0cde4a5bb4.jpg"
}, {
  name: "star",
  img: "./img/8a8c693759a1a91ff555053a5e9ec21d.jpg"
}, {
  name: "bobomb",
  img: "./img/9f95fa101ca2531fa7b20aa3bfd53c1a.jpg"
}, {
  name: "mario",
  img: "./img/51cd3aea2b0852fd4f5e98ac51eb074b.jpg"
}, {
  name: "luigi",
  img: "./img/817d4cf07288fa4be28c79e3943a9bea.jpg"
}, {
  name: "peach",
  img: "./img/971cee37396be79d7a69870e643de7e0.jpg"
}, {
  name: "1up",
  img: "./img/6054078ff7514931146634a7885af7e8.jpg"
}, {
  name: "mushroom",
  img: "./img/a748654b99a7d6f5266fe3e8fad23534.jpg"
}, {
  name: "thwomp",
  img: "./img/fc3aeffd46e2671564ed3db788740e9d.jpg"
}, {
  name: "bulletbill",
  img: "./img/ec3531290f9ba95dff5003a65de04181.jpg"
}, {
  name: "coin",
  img: "./img/e283e8783de727afe0b5a41a04b2b98b.jpg"
}, {
  name: "goomba",
  img: "./img/d797e35795e446848bab9c5cf12de7cf.jpg"
}];

const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

});
