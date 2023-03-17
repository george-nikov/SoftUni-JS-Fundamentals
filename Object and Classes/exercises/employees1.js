function employees1 (arr) {

    class Employees {
        constructor(name, number){
        this.name = name;
        this.number = number;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        let person = new Employees(current, current.length);
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}
employees1([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
