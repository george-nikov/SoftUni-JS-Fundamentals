function gladiatorExpenses (lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
   
    let helmetCounter = 0;
    let swordCounter = 0;
    let armorCounter = 0;
    let shieldCounter = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetCounter++;
        }
        if (i % 3 === 0) {
            swordCounter++;
        }
        if (i % 6 === 0) {
            shieldCounter++;
        }
        if (i % 12 === 0) {
            armorCounter++;
        }
    }
    let sum = (helmetCounter * helmetPrice)+ (swordCounter * swordPrice) + (shieldPrice * shieldCounter)+ (armorPrice * armorCounter);
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(7,2,3,4,5)
