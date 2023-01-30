function mergeArrays (arr1, arr2) {

    let sum = '';
    let current1 = '';  
    let current2 = '';
    let total = [];
   
    for (let i = 0; i < arr1.length; i++) {
        current1 = arr1[i];
        current2 = arr2[i];

        if (i % 2 == 0) {
            sum = Number(current1) + Number(current2);
        }
        else if (i % 2 !== 0) {
            sum = current1 + current2;
        }
        total.push(sum);
    }
    
    console.log(total.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])
