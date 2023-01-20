function sum (a) {

let num = a;
let sum = 0;
let current = '';
num = num.toString();

    for (let i = 0; i <= num.length-1; i++) {
    current = Number(num[i]);
    sum += current
    }
console.log(sum);

}
sum(223456)
