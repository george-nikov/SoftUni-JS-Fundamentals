function pirates(arr) {

    let index = 0;
    let citiesMap = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current === "Sail") {
            break;
        }
        let tokens = current.split("||");
        let city = tokens[0];
        let people = Number(tokens[1]);
        let gold = Number(tokens[2]);
        index++;
        if (citiesMap.hasOwnProperty(city)) {
            citiesMap[city].people += people;
            citiesMap[city].gold += gold;

        }
        else {
            citiesMap[city] = { people, gold };
        }
    }


    for (let j = index + 1; j < arr.length; j++) {
        let current2 = arr[j];
        let tokens2 = current2.split("=>");
        let command = tokens2[0];
        let city = tokens2[1];


        switch (command) {
            case "Plunder":
                let gold1 = Number(tokens2[3]);
                let people1 = Number(tokens2[2]);
                citiesMap[city].people -= people1;
                citiesMap[city].gold -= gold1;
                console.log(`${city} plundered! ${gold1} gold stolen, ${people1} citizens killed.`)
                if (citiesMap[city].people <= 0 || citiesMap[city].gold <= 0) {
                    delete citiesMap[city];
                    console.log(`${city} has been wiped off the map!`);
                }
                break;

            case "Prosper":
                let gold2 = Number(tokens2[2]);
                if (gold2 < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                    break;
                }
                else {
                    citiesMap[city].gold += gold2;
                    console.log(`${gold2} gold added to the city treasury. ${city} now has ${citiesMap[city].gold} gold.`);
                }
                break;

            case "End":
                let sorted = Object.entries(citiesMap);

                if (sorted.length > 0) {
                    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
                    for (const key of sorted) {
                        console.log(`${key[0]} -> Population: ${key[1].people} citizens, Gold: ${key[1].gold} kg`);
                    }
                }
                else {
                    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
                }
                break;
        }
    }

}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
