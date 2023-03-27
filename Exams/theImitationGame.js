function theImitationGame (arr) {

    let text = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current === "Decode") {
            break;
        }
        let tokens = current.split("|");
        let command = tokens[0];
        
        switch (command) {
            case "Move":
                let n = tokens[1];
                for (let j = 0; j < n; j++) {
                let firstLetter = text.substring(0,1);
                let otherLetters = text.substring(1);
                text = otherLetters + firstLetter;
                }
                break;

            case "Insert":
                let index = tokens[1];
                let value = tokens[2];
                text = text.substring(0, index) + value + text.substring(index);
                break;
            case "ChangeAll":
                let substring = tokens[1];
                let replacement = tokens[2];
                while (text.includes(substring)) {
                text = text.replace(substring,replacement);
                }
                break;
        }   
    }

    console.log(`The decrypted message is: ${text}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'])
