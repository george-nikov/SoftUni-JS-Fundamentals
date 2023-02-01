function magicSum (arr, num) {

    let arr1 = [];
    let current1;
    let current2;
    for (let i = 0; i < arr.length; i++) {
        current1 = arr[i];
        for (let j = i+1; j < arr.length; j++) {
        current2 = arr[j];
        if (current1 + current2 == num) {
            arr1.push(current1.toString() + " " + current2.toString());
        }
        }
    }
    console.log(arr1.join('\n'));
}
magicSum([1, 7, 6, 2, 19, 23],8)
