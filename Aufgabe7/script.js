var dp = [
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
function playbeat(x) {
    dp[x].play();
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
// Aufgabe 7.2
document.querySelector("#playbutton").addEventListener("click", function () {
    beat();
});
function beat() {
    setInterval(function () {
        setTimeout(function () {
            playSample(0);
        }, 100);
        setTimeout(function () {
            playSample(1);
        }, 100);
        setTimeout(function () {
            playSample(2);
        }, 100);
    }, 500);
}
;
//# sourceMappingURL=script.js.map