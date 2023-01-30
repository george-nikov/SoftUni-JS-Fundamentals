function maxNumber(arr) {

    let outputString = "";

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let j = i;

        if (current > arr[++j] && i < arr.length && current > arr[arr.length - 1]) {
        outputString += current + " ";
        }
        if (i == arr.length - 1) {

            outputString += arr[i];
        }
    }
    console.log(outputString);
}
maxNumber([1, 4, 3, 2])
