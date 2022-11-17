function division (n) {

    let counter2 = false;
    let counter3 = false;
    let counter6 = false;
    let counter7 = false;
    let counter10 = false;

    if (n % 2 == 0) {
        counter2 = true;
    }
    if (n % 3 == 0) {
       counter3 = true;
    }
    if (n % 6 == 0) {
        counter6 = true;
    }
    if (n % 7 == 0) {
        counter7 = true;
    }
    if (n % 10 == 0) {
        counter10 = true;
    }

    if (counter10 == true) {
        console.log('The number is divisible by 10');
    }
    else if (counter7 == true) {
        console.log('The number is divisible by 7');
    }
    else if (counter6 == true) {
        console.log('The number is divisible by 6');
    }
    else if (counter3 == true) {
        console.log('The number is divisible by 3');
    }
    else if (counter2 == true) {
        console.log('The number is divisible by 2');
    }
    else {
        console.log('Not divisible');
    }
}
division([30])
