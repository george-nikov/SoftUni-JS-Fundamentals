function amazing (num) {

num = num.toString();
let num = 0;
for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
}
let result = sum.toString().includes('9');
console.log(result ?
    `${num} Amazing? True` :
    `${num} Amazing? False` );
}
amazing([1233])
