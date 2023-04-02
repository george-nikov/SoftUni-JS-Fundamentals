function encryptingPassword(arr) {

    let n = Number(arr.shift());
    let regex = /([\W\S\d]+)[>](?<middle>[0-9]{3}[|][a-z]{3}[|][A-Z]{3}[|][^<>]{3})[<]\1/gm

    for (const line of arr) {
        let code = '';
        match = regex.exec(line);
        if (match) {
            for (const el of match.groups.middle) {
                code += el;
            }
            code = code.split("|").join("");

            console.log(`Password: ${code}`);

        }
        else {
            console.log("Try another password!");
        }
    }

}
encryptingPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])
