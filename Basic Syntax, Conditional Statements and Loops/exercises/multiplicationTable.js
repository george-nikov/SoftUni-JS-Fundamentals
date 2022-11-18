function table (n) {

    let sum = 0;
    for (let i = 1; i <=10; i++) {
        sum = n * i;
        console.log(`${n} X ${i} = ${sum}`);
    }
}
table([5])
