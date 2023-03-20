function addressBook (arr) {

    let assocArr = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let tokens = current.split(':');
        let name = tokens[0];
        let address = tokens[1];
        assocArr[name] = address;
    }

    let entries = Object.entries(assocArr).sort((a,b) => a[0].localeCompare(b[0]));
    
    for (const [name, address] of entries){
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])
