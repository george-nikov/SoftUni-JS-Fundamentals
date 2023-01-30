function arrayRotation (arr, n) {

    let current1 = '';
    let sum = [];
    for (let i = 0; i < n; i++) {
        current1 = arr[0];
        for (let j = 1; j < arr.length; j++) {
        sum.push(arr[j]);
        }
        sum.push(current1);
        arr = sum;
        sum = [];
    
}
console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)
