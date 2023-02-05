function addAndSubtract(a, b, c) {

    function sumFunction (a,b){
        return a + b;
    }

    function subtractFunction (a,b) {
        return a - b;
    }

    let sum = sumFunction(a,b)
    let subtract = subtractFunction(sum,c)
    return subtract;

}
console.log(addAndSubtract(23, 6, 10))
