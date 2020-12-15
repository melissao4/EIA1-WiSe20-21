let drumpad: HTMLAudioElement [] = [];
drumpad [0] = new Audio("Daten/kick.mp3"),
drumpad [1] = new Audio("Daten/hihat.mp3"),
drumpad [2] = new Audio("Daten/snare.mp3"),
drumpad [3] = new Audio("Daten/A.mp3"),
drumpad [4] = new Audio("Daten/C.mp3"),
drumpad [5] = new Audio("Daten/F.mp3"),
drumpad [6] = new Audio("Daten/G.mp3"),
drumpad [7] = new Audio("Daten/laugh-1.mp3"),
drumpad [8] = new Audio("Daten/laugh-2.mp3");
   
    //Funktion
function playSample(x: number): void {
    drumpad[x].play();
    }
   
    //Event
document.querySelector("#dp1").addEventListener("click", function (): void {
    playSample(0);
    recordBeat(0);
    });
document.querySelector("#dp2").addEventListener("click", function (): void {
    playSample(1);
    recordBeat(1);
    });
document.querySelector("#dp3").addEventListener("click", function (): void {
    playSample(2);
    recordBeat(2);
    });
document.querySelector("#dp4").addEventListener("click", function (): void {
    playSample(3);
    recordBeat(3);
    });
document.querySelector("#dp5").addEventListener("click", function (): void {
    playSample(4);
    recordBeat(4);
    });
document.querySelector("#dp6").addEventListener("click", function (): void {
    playSample(5);
    recordBeat(5);
    });
document.querySelector("#dp7").addEventListener("click", function (): void {
    playSample(6);
    recordBeat(6);
    });
document.querySelector("#dp8").addEventListener("click", function (): void {
    playSample(7);
    recordBeat(7);
    });
document.querySelector("#dp9").addEventListener("click", function (): void {
    playSample(8);
    recordBeat(8);
    });
   

// Variablen

const playbutton: HTMLElement = document.querySelector("#play");
const pausebutton: HTMLElement = document.querySelector("#stop");



 // Toggle
function toggleClass(firstbtn: HTMLElement, secondbtn: HTMLElement): void {
    firstbtn.classList.add("hidden");
    secondbtn.classList.remove("hidden");
    }

playbutton.addEventListener("click", function (): void {
    toggleClass(playbutton, pausebutton);
    loop(true);
    });

pausebutton.addEventListener("click", function (): void {
    toggleClass(pausebutton, playbutton);
    loop(false);
    });

// Micro Button Funktion
const microbutton: HTMLElement = document.querySelector("#micro");

let dynbeat: number[] = [0, 1, 2];
let recording: boolean;
let i: number;

function recordBeat(i: number): void {
    console.log("Aufnahme");
    if (recording == true) {
        dynbeat.push(i);
        }
    }

 // Micro Button Event
microbutton.addEventListener("click", function (): void {
    if (microbutton.classList.contains("active")) {
        microbutton.classList.remove("active");
        console.log("inaktiv");
        recording = false;
    }
    else {
        microbutton.classList.add("active");
        recording = true;
        console.log("aktiv");
        }
    });

// Play und Pause Funktion
let interval: number;
let x: number = 0;

function loop(pause: boolean): void {
        if (pause == true) {
            interval = setInterval(function (): void {
                playSample(dynbeat[x]);
                x++;
                console.log(x);
                if (x >= dynbeat.length) {
                    x = 0;
                }
            },                     500);
        } else {
            clearInterval(interval);
        }
    }

// Trash Button
const trashbutton: HTMLElement = document.querySelector("#trash");

trashbutton.addEventListener("click", function (): void {
        dynbeat = [];
        console.log("deleted");
    });
