function addAndSubtract(a, b, c) {

    sum1 = a + b;

    function subtract(sum1) {
        let total = sum1 - c;
        console.log(total);
    }
    return subtract;

}
addAndSubtract([23, 6, 10])
