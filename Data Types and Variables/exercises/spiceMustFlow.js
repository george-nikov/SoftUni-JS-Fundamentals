function spiceMustFlow (yield) {

    let extracted = yield;
    let yield1 = yield;
    let counter = 0;
    let sum = 0;
    let final = 0;

while (yield1 >= 100) { 
    extracted -= 26;
    yield1 -= 10;
    counter++;
    sum += extracted;
    extracted = yield1;
}
final = sum - 26;

console.log(counter);
console.log(final);
}
spiceMustFlow(111)
