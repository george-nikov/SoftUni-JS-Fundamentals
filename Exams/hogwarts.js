function hogwarts(arr) {

    let spell = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let tokens = current.split(" ");
        let command = tokens[0];
        switch (command) {
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell);
                break;

            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell);
                break;

            case 'Illusion':
                let index = Number(tokens[1]);
                let letter = tokens[2];
                if (index >= 0 && index < spell.length) {
                    let subst = spell.charAt(index);
                    spell = spell.replace(subst, letter);
                    console.log("Done!");
                }
                else {
                    console.log("The spell was too weak.");
                }
                break;

            case 'Divination':
                let firstSub = tokens[1];
                let secondSub = tokens[2];
                if (spell.includes(firstSub)) {
                    while (spell.includes(firstSub)) {
                    spell = spell.replace(firstSub, secondSub);   
                }
                console.log(spell);
                }
                break;

            case 'Alteration':
                let substring = tokens[1];
                if (spell.includes(substring)) {
                    spell = spell.replace(substring,'');
                    console.log(spell);
                }
                break;

            case 'Abracadabra':
                break;

            default:
                console.log("The spell did not work!");
                break;
        }
    }
}
hogwarts(["A7ci0",
"Illusion 1 c",
"Illusion 5 o",
"Abjuration",
"Abracadabra"])

