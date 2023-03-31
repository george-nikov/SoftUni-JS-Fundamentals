function needForSpeed (arr) {

    let n = arr.shift();
    let carMap = [];
    for (let i = 0; i < n; i++) {
        let current = arr[i];
        let tokens = current.split("|")
        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);
        carMap[car] = {mileage, fuel}
    }
    for (let j = n; j < arr.length; j++) {
        let current = arr[j];
        let tokens = current.split(' : ');
        let command = tokens[0];
        let car = tokens[1];
        switch (command) {
            case 'Drive':
                let distance = Number(tokens[2]);
                let fuel = Number(tokens[3]);
                if (carMap[car].fuel <= fuel) {
                    console.log(`Not enough fuel to make that ride`);
                }
                else{
                    carMap[car].mileage += distance;
                    carMap[car].fuel -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }
                if (carMap[car].mileage >= 100000) {
                    delete carMap[car];
                    console.log(`Time to sell the ${car}!`);
                }
                break;

            case 'Refuel':
                let fuel1 = Number(tokens[2]);
                if (fuel1 + carMap[car].fuel >= 75) {
                    fuel1 = 75 - carMap[car].fuel;
                    carMap[car].fuel = 75;
                }
                else {
                    carMap[car].fuel += fuel1;
                }
                console.log(`${car} refueled with ${fuel1} liters`);
                break;

            case 'Revert':
                let kilometers = Number(tokens[2]);
                carMap[car].mileage -= kilometers;
                
                if (carMap[car].mileage < 10000) {
                    carMap[car].mileage = 10000;
                }
                else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
            case 'Stop':
                let sorted = Object.entries(carMap);
                for (let key of sorted) {
                    console.log(`${key[0]} -> Mileage: ${key[1].mileage} kms, Fuel in the tank: ${key[1].fuel} lt.`);
                }
                break;
        }
    }

}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])
