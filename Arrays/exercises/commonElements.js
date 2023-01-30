function commonElements (arr1, arr2) {

    let current1 = '';
    let current2 = '';
    for (let i = 0; i < arr1.length; i++) {
        current1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            current2 = arr2[j];
            if (current1 === current2) {
                console.log(current1);
            }
        }
    }
    
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])
