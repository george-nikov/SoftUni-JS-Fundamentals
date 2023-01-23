function isPrime(n) {

    if (n <= 1) {
        console.log('false');
    } 
    else {
        let prime = true;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                console.log('false');
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log('true');
        }
    }
}
