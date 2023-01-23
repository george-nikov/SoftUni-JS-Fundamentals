function binaryToDecimal (a) {

let current = '';
let sum = 0;
let pol = a.length-1;

for (let i = 0; i<= a.length-1; i++) {
current = Number(a[i]);
sum += current * (2**(pol));
pol--;
}
console.log(sum);
}
binaryToDecimal('11110000')
