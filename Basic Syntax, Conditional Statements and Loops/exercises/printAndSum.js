function print (n, m) {

    let sum = 0;
    let num = '';

    for (let i = n; i <= m; i++) {
        num += i + " ";
        sum += i;
    }
    console.log(num);
    console.log(`Sum: ${sum}`);
}
print([5, 10])
