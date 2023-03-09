function employees (arr) {

    for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        let count = current.length;
        console.log(`Name: ${current} -- Personal Number: ${count}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
