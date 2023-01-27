function reverseArray (n, inputArr) {
    
let sum = [];

for (let i = 0; i < n; i++) {
sum.push(inputArr[i]);
}

let reverse = sum.reverse();
let final = reverse.join(" ");

console.log(final);
}
reverseArray(3, [10, 20, 30, 40, 50])
