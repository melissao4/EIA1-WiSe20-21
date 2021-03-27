namespace randompoem {

    let character: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verb: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let object: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let phrase: string = "";

    for (let i: number = 6; i <= object.length; i--) {
        if (i == 0) {
            break;
        } 
        
        getPhrase(character, verb, object, phrase);
    }

    function getPhrase(_character: string[], _verb: string[], _object: string[], _phrase: string ): string {
        
        let randomcharacter: number = Math.floor(Math.random() * _character.length);
        _phrase += _character.splice(randomcharacter, 1) + " ";

        let randomverb: number = Math.floor(Math.random() * _character.length);
        _phrase += _verb.splice(randomverb, 1) + " ";

        let randomobject: number = Math.floor(Math.random() * _character.length);
        _phrase += _object.splice(randomobject, 1) + " ";

        console.log(_phrase);
        return _phrase;        
    }
}


