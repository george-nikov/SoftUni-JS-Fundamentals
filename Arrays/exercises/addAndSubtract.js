function addAndSubtract (arr) {

    let current = '';
    let sum = [];
    let total = 0;
    let after = 0;
    let current2 = '';

    for (let i = 0; i <= arr.length-1; i++) {
        current = arr[i];
        total += current;
        if (current % 2 == 0) {
            current += i;
            sum.push(current);
        }
        else if (current % 2 !== 0) {
            current -= i;
            sum.push(current);
        }
    }
    for (let j = 0; j <= sum.length-1; j++) {
        current2 = sum[j];
        after += current2;
    }

    console.log(sum);
    console.log(total);
    console.log(after);

}
addAndSubtract([5, 15, 23, 56, 35])
