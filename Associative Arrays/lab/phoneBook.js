function phoneBook (arr) {

    let assocArr = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let tokens = current.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        assocArr[name] = number;
    }

    for (let key in assocArr) {
        console.log(`${key} -> ${assocArr[key]}`);
    }
}
phoneBook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344'])
