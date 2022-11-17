function triangle (n) {

    let sum = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            sum += i+ " ";
        
        }
        sum += "\n";
    }
    console.log(sum);
}
triangle([3])
