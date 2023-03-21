function storage (arr) {

let map = new Map ();

for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let tokens = current.split(' ');
    let name = tokens[0];
    let quantity = Number(tokens[1]);
    
        if (map.has(name)) {
        let currentQuantity = map.get(name);
        map.set(name, currentQuantity + quantity);
        }
        else {
        map.set(name, quantity);
        }
}

for (let [key, value] of map) {
    console.log(`${key} -> ${value}`);
}

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])
