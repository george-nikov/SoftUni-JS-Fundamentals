function heroesOfCode (arr) {

    let numHeroes = Number(arr[0]);
    let heroMap = {};
    let index = 0;

    for (let i = 1; i < numHeroes+1; i++) {
        let current = arr[i];
        let tokens = current.split(" ");
        let heroName = tokens[0];
        let health = Number(tokens[1]);
        let mana = Number(tokens[2]);
        heroMap[heroName] = {health, mana};
        index++;
    }

    for (let j = index+1; j < arr.length; j++) {
        let current = arr[j];
        let tokens = current.split(" - ");
        let command = tokens[0];
        let heroName = tokens[1];
        if (command === "End") {
            break;
        }
        switch (command) {
            case "CastSpell":
            let MPneeded = Number(tokens[2]);
            let spellName = tokens[3];
            if (heroMap[heroName].mana >= MPneeded) {
                heroMap[heroName].mana -= MPneeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroMap[heroName].mana} MP!`);
            }
            else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
                break;


            case "TakeDamage":
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                heroMap[heroName].health -= damage;
                if (heroMap[heroName].health > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroMap[heroName].health} HP left!`);
                }
                else {
                    delete heroMap[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;


            case "Recharge":
                let ammount = Number(tokens[2]);
                if ((heroMap[heroName].mana + ammount) > 200) {
                    ammount = 200 - heroMap[heroName].mana;
                    heroMap[heroName].mana += ammount;
                }
                else {
                heroMap[heroName].mana += ammount;
                }
                console.log(`${heroName} recharged for ${ammount} MP!`);
                break;

            case "Heal":
                let ammountHP = Number(tokens[2]);
                if ((heroMap[heroName].health + ammountHP) > 100) {
                    ammountHP = 100 - heroMap[heroName].health;
                    heroMap[heroName].health += ammountHP;
                }
                else {
                    heroMap[heroName].health += ammountHP;
                }
                console.log(`${heroName} healed for ${ammountHP} HP!`);
                break;
        }
    }
    let sorted = Object.entries(heroMap);

    for (let key of sorted) {
        console.log(`${key[0]}`);
        console.log(`  HP: ${key[1].health}`);
        console.log(`  MP: ${key[1].mana}`);
    }

}
heroesOfCode(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
    ])
