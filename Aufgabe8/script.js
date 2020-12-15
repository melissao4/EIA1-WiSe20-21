var drumpad = [];
drumpad[0] = new Audio("Daten/kick.mp3"),
    drumpad[1] = new Audio("Daten/hihat.mp3"),
    drumpad[2] = new Audio("Daten/snare.mp3"),
    drumpad[3] = new Audio("Daten/A.mp3"),
    drumpad[4] = new Audio("Daten/C.mp3"),
    drumpad[5] = new Audio("Daten/F.mp3"),
    drumpad[6] = new Audio("Daten/G.mp3"),
    drumpad[7] = new Audio("Daten/laugh-1.mp3"),
    drumpad[8] = new Audio("Daten/laugh-2.mp3");
//Funktion
function playSample(x) {
    drumpad[x].play();
}
//Event
document.querySelector("#dp1").addEventListener("click", function () {
    playSample(0);
    recordBeat(0);
});
document.querySelector("#dp2").addEventListener("click", function () {
    playSample(1);
    recordBeat(1);
});
document.querySelector("#dp3").addEventListener("click", function () {
    playSample(2);
    recordBeat(2);
});
document.querySelector("#dp4").addEventListener("click", function () {
    playSample(3);
    recordBeat(3);
});
document.querySelector("#dp5").addEventListener("click", function () {
    playSample(4);
    recordBeat(4);
});
document.querySelector("#dp6").addEventListener("click", function () {
    playSample(5);
    recordBeat(5);
});
document.querySelector("#dp7").addEventListener("click", function () {
    playSample(6);
    recordBeat(6);
});
document.querySelector("#dp8").addEventListener("click", function () {
    playSample(7);
    recordBeat(7);
});
document.querySelector("#dp9").addEventListener("click", function () {
    playSample(8);
    recordBeat(8);
});
// Variablen
var playbutton = document.querySelector("#play");
var pausebutton = document.querySelector("#stop");
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
var microbutton = document.querySelector("#micro");
var dynbeat = [0, 1, 2];
var recording = false;
var i;
function recordBeat(i) {
    if (recording == true) {
        dynbeat.push(i);
    }
}
// Micro Button Event
microbutton.addEventListener("click", function () {
    if (microbutton.classList.contains("inactive")) {
        microbutton.classList.remove("inactive");
        microbutton.classList.remove("active");
        recording = false;
    }
    else {
        (microbutton.classList.contains("active"));
        microbutton.classList.remove("active");
        microbutton.classList.remove("inactive");
        recording = true;
    }
});
// Play und Pause Funktion
var interval;
var x = 0;
function loop(pause) {
    if (pause == true) {
        interval = setInterval(function () {
            playSample(dynbeat[x]);
            x++;
            console.log(x);
            if (x >= dynbeat.length) {
                x = 0;
            }
        }, 500);
    }
    else {
        clearInterval(interval);
    }
}
// Trash Button
var trashbutton = document.querySelector("#trash");
trashbutton.addEventListener("click", function () {
    dynbeat = [];
    console.log("deleted");
});
//# sourceMappingURL=script.js.map