function treasureHunt (arr) {

    let initialLoot = arr.shift().split("|")
    let current;
    let command;
    let elements = [];

    for (let i = 0; i <= arr.length; i++) {
        current = arr[i].split(" ")
        command = current[0];

        for (let j = 1; j < current.length; j++) {
            value = current[j];

            if (command === "Loot") {
                if (initialLoot.includes(value) === false) {
                initialLoot.unshift(value);
                }
            }
            else if (command === "Drop") {
                if (value > initialLoot.length-1 || value < 0) {
                    continue;
                }
                else {
                initialLoot.push(initialLoot[value]);
                let el = initialLoot.splice(value, 1)
                }
            }
            else if (command === "Steal") {

                if (value <= initialLoot.length) {
                elements = initialLoot.splice(-value);
                console.log(elements.join(", "));
                }
                else {
                elements = initialLoot.splice(-initialLoot.length)
                console.log(elements.join(", "));
                }
            }

        }
        if (command === "Yohoho!") {
            break;
        }

    }
    if (initialLoot.length > 0) {

    let current1;
    let sum = 0;
    for (let k = 0; k < initialLoot.length; k++) {
        current1 = initialLoot[k];
        sum += current1.length;
    }
    let average = sum/initialLoot.length;

    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)
    }
    else {
        console.log("Failed treasure hunt.");
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
