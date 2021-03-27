var randompoem;
(function (randompoem) {
    var character = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var verb = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    var phrase = "";
    for (var i = 6; i <= object.length; i--) {
        if (i == 0) {
            break;
        }
        getPhrase(character, verb, object, phrase);
    }
    function getPhrase(_character, _verb, _object, _phrase) {
        var randomcharacter = Math.floor(Math.random() * _character.length);
        _phrase += _character.splice(randomcharacter, 1) + " ";
        var randomverb = Math.floor(Math.random() * _character.length);
        _phrase += _verb.splice(randomverb, 1) + " ";
        var randomobject = Math.floor(Math.random() * _character.length);
        _phrase += _object.splice(randomobject, 1) + " ";
        console.log(_phrase);
        return _phrase;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=script.js.map