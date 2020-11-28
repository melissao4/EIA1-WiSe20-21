var africa08 = 1028;
var africa18 = 1235.5;
//////////////////////////////////
var samerica08 = 1132.6;
var samerica18 = 1261.5;
//////////////////////////////////
var europe08 = 4965.7;
var europe18 = 4209.3;
//////////////////////////////////
var namerica08 = 6600.4;
var namerica18 = 6035.6;
//////////////////////////////////
var asia08 = 12954.7;
var asia18 = 16274.1;
//////////////////////////////////
var australia08 = 1993;
var australia18 = 2100.5;
//////////////////////////////////
var GesamtEmi18 = europe18 + namerica18 + samerica18 + africa18 + asia18 + australia18;
/// Funktionen
function myFunction(titleRegion, CO2, CO208) {
    document.querySelector("#titleRegion").innerHTML = titleRegion;
    document.querySelector(".part1").innerHTML = (CO2 + "kg CO2");
    document.querySelector("p").innerHTML = "Emission absolute of" + titleRegion + "in 2018";
    document.querySelector(".part2").innerHTML = Math.round((CO2 / GesamtEmi18) * 100) + "%";
    document.querySelector(".part3").innerHTML = Math.round(((CO2 / CO208) - 1) * 100) + "%";
    document.querySelector(".part4").innerHTML = Math.round(CO2 - CO208) + "kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height:' + ((CO2 / GesamtEmi18) * 100) + "%");
}
/// Event 
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener("click", function () {
        myFunction(" South America ", samerica18, samerica08);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener("click", function () {
        myFunction(" Africa ", africa18, africa08);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener("click", function () {
        myFunction(" Asia ", asia18, asia08);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener("click", function () {
        myFunction(" Australia ", australia18, australia08);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener("click", function () {
        myFunction(" Europe ", europe18, europe08);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener("click", function () {
        myFunction(" North America ", namerica18, namerica08);
    });
});
//# sourceMappingURL=script.js.map