function burgerBus(arr) {

    let totalCities = Number(arr[0]);
    let earned = 0;
    let counterCity = 0;
    let profit = 0;
    let total = 0;
    let flag = false;
    let flag2 = false;

    for (let i = 1; i < arr.length; i += 3) {
        city = arr[i];
        counterCity++;
        for (let j = i+1; j <= i+1; j++) {
            earned = Number(arr[j]);
            spent = Number(arr[j+1]);
        }
        
        if (counterCity % 5 === 0) {
            flag = true;
        }
        
        if (counterCity % 3 === 0) {
           flag2 = true;
        }

        if (flag === true && flag2 === true) {
            earned = earned - earned * 0.10;

        }
        else if (flag2 === true && flag === false) {
            spent = spent + (spent * 0.50);
        }
        else if (flag === true && flag2 === false) {
            earned = earned - earned * 0.10;
        }
    

        profit = earned - spent;
        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
        total += profit;
        profit = 0;

        flag = false;
        flag2 = false;
    }
    console.log(`Burger Bus total profit: ${total.toFixed(2)} leva.`);

}
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])
