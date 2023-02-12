function divison (numOne, numTwo) {

    return (factorial(numOne) / factorial(numTwo)).toFixed(2);
  
function factorial (num) {
    let current = 1;
    for (let i = 1; i <= num; i++) {
        current *= i;
    }
    return current;
}
}
division(6,2)
