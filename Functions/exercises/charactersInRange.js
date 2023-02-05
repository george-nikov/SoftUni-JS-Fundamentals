function charsInRange (charA,charB) {
    
    let numFromCharA = convertToChar(charA);
    let numFromCharB = convertToChar(charB);

    let startIndex = smallestOf2Numbers(numFromCharA, numFromCharB);
    let endIndex = biggestOf2Numbers(numFromCharA, numFromCharB);
    
    let sum = '';

    for (let i = startIndex+1; i < endIndex; i++) {
        sum += String.fromCharCode(i) + ' ';
    }
    console.log(sum);
}

function convertToChar (a) {
    return a.charCodeAt(0)
}

function smallestOf2Numbers (a,b) {
    return Math.min(a,b)
}
function biggestOf2Numbers (a,b) {
    return Math.max(a,b)
}
charsInRange('a','d')
