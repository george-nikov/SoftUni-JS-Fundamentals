function secretChat (arr) {

    let message = arr[0];

    for (let i = 1; i < arr.length; i++) {
        
        let current = arr[i];
        let tokens = current.split(":|:");
        let command = tokens[0];
        let firstPart = [];
        let secondPart = [];
        let split = message.split('')
        switch (command) {
            case "InsertSpace":
                let index = Number(tokens[1]);
                
                for (let j = 0; j < index; j++) {
                    let el = split[j];
                    firstPart.push(el);
                }
                for (let k = index; k < split.length; k++) {
                    let elem = split[k];
                    secondPart.push(elem);
                }

                let first = firstPart.join("");
                let second = secondPart.join("");
                message = first + " " + second;
                console.log(message);
                break;

            case "Reverse":
                let substring1 = tokens[1];
                if (message.includes(substring1)){
                    message = message.replace(substring1, '');
                    let reversed = reversedStr(substring1);
                    message += reversed;
                    console.log(message);
                }
                else {
                    console.log('error');
                }
                break;
                
            case "ChangeAll":
                let substring2 = tokens[1];
                let replacement = tokens[2];
                while (message.includes(substring2)) {
                    message = message.replace(substring2, replacement);
                }
                console.log(message);
                break;
                
            case "Reveal":
                console.log(`You have a new text message: ${message}`);
                break;
        }        
    }

function reversedStr (substring1) {
    return substring1.split('').reverse().join('');
}

}
