function biggestNumber (a,b,c) {

    let biggest = a;
    if (b > a) {
    biggest = b
    }
    if (b < c && a < c) {
    biggest = c;
    }
    console.log(biggest);
    }
    biggestNumber([2,5,3])
