var drumpad = [
    new Audio("Daten/kick.mp3"),
    new Audio("Daten/hihat.mp3"),
    new Audio("Daten/snare.mp3"),
    new Audio("Daten/A.mp3"),
    new Audio("Daten/C.mp3"),
    new Audio("Daten/F.mp3"),
    new Audio("Daten/G.mp3"),
    new Audio("Daten/laugh-1.mp3"),
    new Audio("Daten/laugh-2.mp3"),
];
//Funktion 
function playSample(x) {
    drumpad[x].play();
}
;
//Event
document.querySelector("#dp1").addEventListener("click", function () {
    playSample(0);
});
document.querySelector("#dp2").addEventListener("click", function () {
    playSample(1);
});
document.querySelector("#dp3").addEventListener("click", function () {
    playSample(2);
});
document.querySelector("#dp4").addEventListener("click", function () {
    playSample(3);
});
document.querySelector("#dp5").addEventListener("click", function () {
    playSample(4);
});
document.querySelector("#dp6").addEventListener("click", function () {
    playSample(5);
});
document.querySelector("#dp7").addEventListener("click", function () {
    playSample(6);
});
document.querySelector("#dp8").addEventListener("click", function () {
    playSample(7);
});
document.querySelector("#dp9").addEventListener("click", function () {
    playSample(8);
});
// Variablen
var playbutton = document.querySelector("#play");
var pausebutton = document.querySelector("#stop");
var microbutton = document.querySelector("#micro");
var trashbutton = document.querySelector("#trash");
// Toggle
function toggleClass(firstbtn, secondbtn) {
    firstbtn.classList.add("hidden");
    secondbtn.classList.remove("hidden");
}
playbutton.addEventListener("click", function () {
    toggleClass(playbutton, pausebutton);
    loop(true);
});
pausebutton.addEventListener("click", function () {
    toggleClass(pausebutton, playbutton);
    loop(false);
});
// Micro Button Funktion
var dynbeat = [0, 1, 2];
var recording;
var dynbeatindex;
function recordBeat(dynbeatindex) {
    console.log("Recording");
    if (recording == true) {
        dynbeat.push(dynbeatindex);
    }
}
// Micro Button Event
microbutton.addEventListener("click", function () {
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
var interval;
var index = 0;
function loop(pause) {
    if (pause == true) {
        interval = setInterval(function () {
            playSample(dynbeat[index]);
            index++;
            console.log(index);
            if (index >= dynbeat.length) {
                index = 0;
            }
        }, 400);
    }
    else {
        clearInterval(interval);
    }
}
// Trash Button
trashbutton.addEventListener("click", function () {
    dynbeat = [];
    console.log("deleted");
});
//# sourceMappingURL=script.js.map