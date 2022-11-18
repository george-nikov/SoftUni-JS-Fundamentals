function login(input) {

    let user = input[0];
    let counter = 0;

    const arrayStrings = user.split("");
    let reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    
    for (let index = 1; index <= input.length; index++) {
        current = input[index];

        if (counter == 3 && joinArray !== current) {
            console.log(`User ${user} blocked!`);
            break;
        }

        if (joinArray == current) {
            console.log(`User ${user} logged in.`);
            break;
        }
        else {
            console.log(`Incorrect password. Try again.`);
            counter++;
        }

    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])
