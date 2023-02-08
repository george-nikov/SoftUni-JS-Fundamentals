function perfectNumber (num) {

    let numArr = [];
    let arrSum = 0;
    for (let i = 1; i < num; i++) {
        current = i;
        if (num % current === 0) {
            numArr.push(current)
        }
    }
    for (let j = 0; j < numArr.length; j++) {
        arrSum += numArr[j]
    }


    function isPerfect (num,arrSum) {
        return arrSum === num;
    }

    if (isPerfect(num, arrSum)) {
        console.log("We have a perfect number!");
    }
    else if (!isPerfect(num, arrSum)) {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6)
