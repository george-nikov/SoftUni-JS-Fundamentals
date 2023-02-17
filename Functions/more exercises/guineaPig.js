function guineaPig(arr) {

    let totalFood = Number(arr[0]) * 1000;
    let totalHay = Number(arr[1]) * 1000;
    let totalCover = Number(arr[2]) * 1000;
    let totalWeight = Number(arr[3]) * 1000;

    let foodEaten = 0;
    let hayEaten = 0;
    let coverEaten = 0;
    let excessCover = 0;

    let foodLeft = 0;
    let excessHay = 0;
    for (let i = 1; i <= 30; i++) {
        foodEaten += 300;
        foodLeft = totalFood - foodEaten;
        if (i % 2 === 0) {
            hayEaten += foodLeft * 0.05;
        }
        if (i % 3 === 0) {
            coverEaten += Number(totalWeight / 3)
        }

        excessHay = totalHay - hayEaten;
        excessCover = totalCover - coverEaten;
        if (foodLeft < 0 || excessCover < 0 || excessHay < 0) {
            break;
        }
    }
    if (foodLeft > 0 && excessCover > 0 && excessHay > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodLeft / 1000).toFixed(2)}, Hay: ${(excessHay / 1000).toFixed(2)}, Cover: ${(excessCover / 1000).toFixed(2)}.`);
    }
    else {
        console.log("Merry must go to the pet store!");
    }

}
guineaPig([10, 5, 5.2,1])
