function rotateArray (arr) {

    let current;
    let rotation = arr[arr.length-1];
    arr.pop();

    for (let i = 0; i < rotation; i++) {
        current = arr[arr.length-1];
        arr.pop(current);
        arr.unshift(current);
    }
    
console.log(arr.join(' '));

}
rotateArray(['1', '2', '3', '4', '2'])
