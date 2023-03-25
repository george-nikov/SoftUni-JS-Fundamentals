function piccolo (arr) {

    let map = new Map ();

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(", ");
        let direction = tokens[0];
        let carNumber  = tokens[1];
        if (direction == "IN") {
            map.set(carNumber)
        }
        else if (direction == "OUT") {
            map.delete(carNumber)
        }
    }
    if (map.size === 0) {
        console.log("Parking Lot is Empty");
    }

    let sort = Array.from(map).sort((a,b) => a[0].localeCompare(b[0]));
    for (let key of sort){
        console.log(`${key[0]}`)
    }

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
