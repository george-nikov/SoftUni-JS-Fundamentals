function firstLast (arr) {

    let last = Number(arr.pop());
    let first = Number(arr.shift());
    let sum = Number(last + first);

    console.log(sum);

}
firstLast(['20', '30', '40'])
