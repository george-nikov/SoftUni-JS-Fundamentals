function addAndRemove (arr) {

    let arr1 = [];
    let current;
    let state;
    for (let i = 0; i <= arr.length; i++) {
        state = arr[i];
        for (let j = i+1; j <= arr.length; j++) {
            current = j;
            if (state === 'add') {
                arr1.push(current);
                break;
            }
            else if (state === 'remove') {
            arr1.pop(current)
            break;
            }
        }
        
    }
    if (arr1.length == 0) {
        console.log('Empty');
    }
    else{
        console.log(arr1.join(' '));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
