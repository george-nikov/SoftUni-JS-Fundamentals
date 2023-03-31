function passwordReset (arr) {

    let takeOdd = '';
    let del = '';
    let str = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let tokens = current.split(' ');
        let command = tokens[0];
      
        if (command === "Done") {
            break;
        }
        switch (command) {
            case "TakeOdd":
                for (let j = 1; j < str.length; j+=2) {
                    let char = str[j];
                    takeOdd += char;
                }
                str = takeOdd
                console.log(str);
                break;

            case "Cut":
                let index = Number(tokens[1]);
                let length = Number(tokens[2]);             
                 for (let k = index; k < index+length; k++) {
                    del += str[k];   
                }
                str = str.replace(del, '');
                console.log(str);
                break;

            case "Substitute":
                let substring = tokens[1];
                let substitute = tokens[2];
                if (str.includes(substring)){
                    
                    str = str.split(substring).join(substitute);
                    
                    console.log(str);
                }
                else {
                    console.log('Nothing to replace!');
                }
                break;
        }
    }
    console.log(`Your password is: ${str}`);

}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
