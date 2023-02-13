function negativePositive (arr) {

    let final = [];
    let current;
    
    for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        if (current < 0) {
            final.unshift(current);
        }
        else if (current >=0) {
            final.push(current)
        }
    }
    console.log(final.join('\n'));
}
negativePositive(['7', '-2', '8', '9'])
