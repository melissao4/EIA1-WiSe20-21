// Array für jedes Kartenpaar erstellen
var cardsArray = [{
        name: "1",
        img: "./img/1c4f352b5e8e879c1fcf2c0cde4a5bb4.jpg"
    }, {
        name: "1",
        img: "./img/8a8c693759a1a91ff555053a5e9ec21d.jpg"
    }, {
        name: "2",
        img: "./img/9f95fa101ca2531fa7b20aa3bfd53c1a.jpg"
    }, {
        name: "2",
        img: "./img/51cd3aea2b0852fd4f5e98ac51eb074b.jpg"
    }, {
        name: "3",
        img: "./img/817d4cf07288fa4be28c79e3943a9bea.jpg"
    }, {
        name: "3",
        img: "./img/971cee37396be79d7a69870e643de7e0.jpg"
    }, {
        name: "4",
        img: "./img/6054078ff7514931146634a7885af7e8.jpg"
    }, {
        name: "4",
        img: "./img/a748654b99a7d6f5266fe3e8fad23534.jpg"
    }, {
        name: "5",
        img: "./img/fc3aeffd46e2671564ed3db788740e9d.jpg",
    }, {
        name: "5",
        img: "./img/ec3531290f9ba95dff5003a65de04181.jpg",
        text: "hallo"
    }, {
        name: "6",
        img: "./img/e283e8783de727afe0b5a41a04b2b98b.jpg"
    }, {
        name: "6",
        img: "./img/d797e35795e446848bab9c5cf12de7cf.jpg"
    }, {
        name: "7",
        img: "./img/1c4f352b5e8e879c1fcf2c0cde4a5bb4.jpg"
    }, {
        name: "7",
        img: "./img/8a8c693759a1a91ff555053a5e9ec21d.jpg"
    }, {
        name: "8",
        img: "./img/9f95fa101ca2531fa7b20aa3bfd53c1a.jpg"
    }, {
        name: "8",
        img: "./img/51cd3aea2b0852fd4f5e98ac51eb074b.jpg"
    }, {
        name: "9",
        img: "./img/817d4cf07288fa4be28c79e3943a9bea.jpg"
    }, {
        name: "9",
        img: "./img/971cee37396be79d7a69870e643de7e0.jpg"
    }, {
        name: "10",
        img: "./img/6054078ff7514931146634a7885af7e8.jpg"
    }, {
        name: "20",
        img: "./img/a748654b99a7d6f5266fe3e8fad23534.jpg"
    }, {
        name: "11",
        img: "./img/fc3aeffd46e2671564ed3db788740e9d.jpg"
    }, {
        name: "11",
        img: "./img/ec3531290f9ba95dff5003a65de04181.jpg",
        text: "hallo"
    }, {
        name: "12",
        img: "./img/e283e8783de727afe0b5a41a04b2b98b.jpg"
    }, {
        name: "12",
        img: "./img/d797e35795e446848bab9c5cf12de7cf.jpg"
    }, {
        name: "13",
        img: "./img/817d4cf07288fa4be28c79e3943a9bea.jpg"
    }, {
        name: "13",
        img: "./img/971cee37396be79d7a69870e643de7e0.jpg"
    }, {
        name: "14",
        img: "./img/6054078ff7514931146634a7885af7e8.jpg"
    }, {
        name: "14",
        img: "./img/a748654b99a7d6f5266fe3e8fad23534.jpg"
    }, {
        name: "15",
        img: "./img/fc3aeffd46e2671564ed3db788740e9d.jpg"
    }, {
        name: "15",
        img: "./img/ec3531290f9ba95dff5003a65de04181.jpg",
        text: "hallo"
    }, {
        name: "16",
        img: "./img/e283e8783de727afe0b5a41a04b2b98b.jpg"
    }, {
        name: "16",
        img: "./img/d797e35795e446848bab9c5cf12de7cf.jpg"
    }];
;
// Jede Karte wird verdoppelt damit ein Kartenpaar entsteht // löschen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var gameGrid = cardsArray.sort(function () {
});
gameGrid.sort(function () { return 0.5 - Math.random(); });
var currentLevel;
var firstGuess = "";
var secondGuess = "";
var count = 0;
var previousTarget = null;
var delay = 1200;
var game = document.getElementById("game");
var grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);
//***********************Level auswählen*********************************
window.addEventListener("load", function () {
    //HTML Elemente selektieren
    levelPopup = document.querySelector(".menu");
    //Funktionen, die zu Beginn ausgeführt werden müssen
    selectDifficulty();
});
function selectDifficulty() {
    var selecteddifficulty = document.getElementsByClassName("difficulty");
    var _loop_1 = function (i_1) {
        selecteddifficulty[i_1].addEventListener("click", function () {
            currentLevel = selecteddifficulty[i_1].innerHTML;
            togglePopup();
            prepareTable();
            cardSelector();
        });
    };
    for (var i_1 = 0; i_1 < selecteddifficulty.length; i_1++) {
        _loop_1(i_1);
    }
}
//Vorder- und Rückseiten modifizieren
gameGrid.forEach(function (item) {
    var name = item.name;
    var img = item.img;
    var card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = name;
    var front = document.createElement("div");
    front.classList.add("front");
    var back = document.createElement("div");
    back.classList.add("back");
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});
// Wenn gleiches Paar gefunden wurde
var match = function match() {
    var selected = document.querySelectorAll(".selected");
    selected.forEach(function (card) {
        card.classList.add("match");
    });
};
// Wenn kein gleiches Paar gewählt wurde
function resetGuesses() {
    firstGuess = "";
    secondGuess = "";
    count = 0;
    previousTarget = null;
    var selected = document.querySelectorAll(".selected");
    selected.forEach(function (card) {
        card.classList.remove("selected");
    });
}
;
grid.addEventListener("click", function () {
    var clicked = event.target;
    if (clicked.nodeName === "SECTION" || clicked === previousTarget || clicked.parentNode.classList.contains("selected")
        || clicked.parentNode.classList.contains("match")) {
        return;
    }
    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add("selected");
        }
        else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add("selected");
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
// Timer
var timer = new Timer();
timer.start({ precision: 'secondTenths' });
timer.addEventListener('secondTenthsUpdated', function (e) {
    $('#secondTenthsExample .values').html(timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths']));
});
//# sourceMappingURL=script.js.map