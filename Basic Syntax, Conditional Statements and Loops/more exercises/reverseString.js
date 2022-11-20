function reverse (input) {

    let string = input[0];

    const arrayStrings = string.split("");
    let reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");

    console.log(joinArray);
    
}
