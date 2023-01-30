function printNth (array) {

    let sum = [];
    let lastElement = Number(array[array.length - 1]);
    for (let i = 0; i < array.length-1; i +=lastElement) {
        sum.push(array[i]);
    }

    console.log(sum.join(" "))

}
printNth(['5', '20', '31', '4', '20', '2'])
