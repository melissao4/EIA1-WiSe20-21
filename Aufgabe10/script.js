var allarrays = [
    {
        todosText: "Lorem",
        todosChecked: true
    },
    {
        todosText: "Ipsum",
        todosChecked: false
    },
    {
        todosText: "Dolor",
        todosChecked: false
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var checkedCounterDOMElement;
var notCheckedCounterDOMElement;
window.addEventListener("load", function () {
    // tslint:disable-next-line: no-any
    var artyom = new Artyom();
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        // tslint:disable-next-line: no-any
        action: function (i, wildcard) {
            allarrays.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
            console.log("Neue Aufgabe: " + wildcard);
        }
    });
    document.querySelector("#VoiceRecord").addEventListener("click", function () {
        artyom.say("Die Sprachaufnahme beginnt");
        startContinuousArtyom();
    });
});
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    checkedCounterDOMElement = document.querySelector("#checkedCounter");
    notCheckedCounterDOMElement = document.querySelector("#notCheckedCounter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + allarrays[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + allarrays[index].todosText +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < allarrays.length; index++) {
        _loop_1(index);
    }
    updateCounter();
    secondCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = allarrays.length + " insgesamt";
}
function secondCounter() {
    var checkedCounter = 0;
    var notCheckedCounter = 0;
    for (var index = 0; index < allarrays.length; index++) {
        if (allarrays[index].todosChecked == true) {
            checkedCounter++;
        }
        else {
            notCheckedCounter++;
        }
    }
    checkedCounterDOMElement.innerHTML = checkedCounter + " noch nicht erledigt";
    notCheckedCounterDOMElement.innerHTML = notCheckedCounter + " erledigt";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        allarrays.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    allarrays[index].todosChecked = !allarrays[index].todosChecked;
    drawListToDOM();
}
function deleteTodo(index) {
    allarrays.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map