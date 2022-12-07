function calculator(number, operator, another) {

    let sum =0;

    switch (operator) {
        case '+':
            sum = number + another;
            break;
        case '-':
            sum = number - another;
            break;
        case '/':
            sum = number / another;
            break;
        case '*':
            sum = number * another;
            break;

    }
    console.log(sum.toFixed(2));

}
calculator([5, '+', 10])
