function sumOdd (n) {

    let counter = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 100; j++) {
            if (j % 2 !== 0 && counter < n) {
                console.log(j);
                counter++;
                sum += j;
            }
        }
    }
    console.log(`Sum: ${sum}`);
}
sumOdd([3])
