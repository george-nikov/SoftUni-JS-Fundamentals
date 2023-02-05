function oddAndEvenSum (a) {

    let num = convertString(a)
    let current = '';
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < num.length; i++) {
        current = Number(num[i]);
        if (current % 2 === 0) {
            evenSum += current;
        }
        else {
            oddSum += current;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

function convertString (a) {
    return a.toString()
}

oddAndEvenSum(1000435)
