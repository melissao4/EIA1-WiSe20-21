const africa08: number = 1028;
const africa18: number = 1235.5;
//////////////////////////////////
const samerica08: number = 1132.6;
const samerica18: number = 1261.5;
//////////////////////////////////
const europe08: number = 4965.7
const europe18: number = 4209.3
//////////////////////////////////
const namerica08: number = 6600.4;
const namerica18: number = 6035.6;
//////////////////////////////////
const asia08: number = 12954.7;
const asia18: number = 16274.1;
//////////////////////////////////
const australia08: number = 1993;
const australia18: number = 2100.5;
//////////////////////////////////
const GesamtEmi18: number = europe18 + namerica18 + samerica18 + africa18 + asia18 + australia18;


/// Funktionen

function myFunction(titleRegion: string, CO2:number, CO208:number) {

    document.querySelector("#titleRegion").innerHTML =  titleRegion;
    document.querySelector(".part1").innerHTML = (CO2 +"kg CO2");
    document.querySelector("p").innerHTML =  "Emission absolute of" + titleRegion + "in 2018";
    document.querySelector(".part2").innerHTML = Math.round((CO2/GesamtEmi18)*100) + "%";
    document.querySelector(".part3").innerHTML = Math.round(((CO2/CO208)-1)*100) + "%";
    document.querySelector(".part4").innerHTML = Math.round(CO2-CO208) + "kg CO2";

    document.querySelector (".chart").setAttribute('style', 'height:' + ((CO2/GesamtEmi18)*100) + "%");

}

/// Event 
    window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener("click", function () {
    myFunction(" South America ", samerica18, samerica08)
    });
    });
    
    window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener("click", function () {
    myFunction(" Africa ", africa18, africa08)
    });
    });
    
    
    window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener("click", function () {
    myFunction(" Asia ", asia18, asia08)
    });
    });
    
    
    window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener("click", function () {
    myFunction(" Australia ", australia18, australia08)
    });
    });
        

    window.addEventListener('load', function() {
    document.querySelector(".europe").addEventListener("click", function() {
    myFunction(" Europe ", europe18, europe08);
    });
    });

    window.addEventListener('load', function() {
    document.querySelector(".northamerica").addEventListener("click", function() {
    myFunction(" North America ", namerica18, namerica08);
    });
    });



