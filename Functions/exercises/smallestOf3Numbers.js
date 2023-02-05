function smallestNumber (a,b,c) {

let smallest = a;
if (a > b) {
smallest = b
}
if (b > c && a > c) {
smallest = c;
}

return smallest;
}
smallestNumber(2,5,3)
