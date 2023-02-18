function manOWar (arr) {

    let str = arr.join(" ")

    let pirateHealth = arr[0].split(">").map(arr => Number(arr));
    let warshipHealth = arr[1].split(">").map(arr => Number(arr));
    let maxHealth = Number(arr[2]);
    let index = 0;
    let damage = 0;
    let index1 = 0;
    let index2 = 0;
    let isWin = false;

    for (let i = 3; i < arr.length; i++) {
        command = arr[i].split(' ')

        if (command[0] === "Fire") {
            index = Number(command[1]);
            damage = Number(command[2]);
            if (index > warshipHealth.length) {
                continue;
            }
            warshipHealth[index] -= damage;

            if (warshipHealth[index] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                isWin = true;
            }
        }

        else if (command[0] === "Defend") {
            index1 = Number(command[1]);
            index2 = Number(command[2]);
            damage = Number(command[3]);
            if (index2 > pirateHealth.length) {
                continue;
            }
            for (let j = index1; j<=index2; j++) {
                pirateHealth[j] -= damage;

                if (pirateHealth[j] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    isWin = true;
                    break;
                }
            }            
        }
        else if (command[0] === "Repair") {
            index = Number(command[1]);
            damage = Number(command[2]);
            if ((pirateHealth[index] + damage) > maxHealth) {
                continue;
            }
            else {
                pirateHealth[index] += damage;
            }
        }

        else if (command[0] === "Status") {
            let stat;
            let counter = 0;
            for (let k = 0; k <= pirateHealth.length; k++) {
                stat = pirateHealth[k];
                if (stat < (maxHealth * 0.20)) {
                    counter++;
                }
            }
            console.log(`${counter} sections need repair.`);
        }
        else if (command[0] === "Retire"){
            break;
        }
    }
if (isWin === false) {
    let pirateShipSum = 0;
    let warshipSum = 0;
    for (let l = 0; l < pirateHealth.length; l++) {
        pirateShipSum += Number(pirateHealth[l]);
    }
    for (let h = 0; h < warshipHealth.length; h++) {
        warshipSum += Number(warshipHealth[h]);
    }

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}

}
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]
)
