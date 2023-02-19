function spaceTravel (arr) {

    let first = arr.shift();
    let route = first.split("||");
    let startingFuel = Number(arr[0]);
    let staringAmmo = Number(arr[1]);
    let current = '';

    for (let i = 0; i < route.length; i++) {
        current = route[i].split(" ")
        command = current[0];
        ammount = Number(current[1]);

        switch (command) {
            case "Travel":
                if (startingFuel >= ammount) {
                    console.log(`The spaceship travelled ${ammount} light-years.`);
                    startingFuel -= ammount;
                }
                else {
                    console.log("Mission failed.");
                    return;
                }
                break;

            case "Enemy":
                if (staringAmmo >= ammount) {
                    staringAmmo -= ammount;
                    console.log(`An enemy with ${ammount} armour is defeated.`);
                }
                else {
                    if (startingFuel >= ammount * 2) {
                        startingFuel -= ammount * 2;
                        console.log(`An enemy with ${ammount} armour is outmaneuvered.`);
                    }
                    else {
                        console.log("Mission failed.");
                        return;
                    }
                }
                break;
            case "Repair":
                startingFuel += ammount;
                staringAmmo += ammount*2;
                console.log(`Ammunitions added: ${ammount*2}.`);
                console.log(`Fuel added: ${ammount}.`);
                break;

            case "Titan":
                console.log("You have reached Titan, all passengers are safe.");
                return;
                break;
        }
    }
}
spaceTravel([ 
'Travel 10||Enemy 30||Repair 15||Titan', 
'50', // starting fuel
'80' ]) // starting ammunition
