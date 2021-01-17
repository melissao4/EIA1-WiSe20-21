interface MyInterface {
    todosText: string;
    todosChecked: boolean; 
    }

let allarrays: MyInterface[] = [
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



var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var checkedCounterDOMElement: HTMLElement;
var notCheckedCounterDOMElement: HTMLElement;


 //Sprachsteuerung

declare const Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

    function startContinuousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    }

    startContinuousArtyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void { 
            allarrays.unshift({
                todosText: wildcard,
                todosChecked: false
            });

            drawListToDOM();
            console.log("Neue Aufgabe: " + wildcard);
        }
    });

    document.querySelector("#VoiceRecord").addEventListener("click", function (): void {
        artyom.say("Die Sprachaufnahme beginnt");
        startContinuousArtyom();
    });
    });

window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    checkedCounterDOMElement = document.querySelector("#checkedCounter");
    notCheckedCounterDOMElement = document.querySelector("#notCheckedCounter");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
   });

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < allarrays.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");


        todo.innerHTML =  "<span class='check " + allarrays[index].todosChecked + "'><i class='fas fa-check'></i></span>" 
                            + allarrays[index].todosText + 
                            "<span class='trash fas fa-trash-alt'></span>";

        
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });

        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
    secondCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = allarrays.length + " in total";

}

function secondCounter(): void {
    var checkedCounter: number = 0;
    var notCheckedCounter: number = 0;

    for (var index: number = 0; index < allarrays.length; index++) {

        if (allarrays[index].todosChecked == true) {
        checkedCounter++; 
        }
        else {
            notCheckedCounter++;
        }
    }
    checkedCounterDOMElement.innerHTML = checkedCounter + " checked in total";
    notCheckedCounterDOMElement.innerHTML = notCheckedCounter + " not checked in total";   
}


function addTodo(): void {

    if (inputDOMElement.value != "") {

        allarrays.unshift({ 
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    allarrays[index].todosChecked = !allarrays[index].todosChecked;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    allarrays.splice(index, 1);
    drawListToDOM();
}
