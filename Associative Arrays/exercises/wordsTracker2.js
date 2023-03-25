function words (data) {

    let result = {};
    let words = data.shift().split(" ");
    for (let word of words) {
        result[word] = 0;
    }

    for (let word of data) {
        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        }
    }
    let sortArr = Object.entries(result).sort((a,b) => b[1] - a[1])

    for (let key of sortArr) {
        console.log(`${key[0]} - ${key[1]}`)
    }
}
words([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
