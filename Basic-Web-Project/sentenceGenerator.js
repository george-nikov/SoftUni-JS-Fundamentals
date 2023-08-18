const { get } = require('http');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let names = ['Peter','Michaell','Jane','Steve'];
let places = ["Sofia", "Plovdiv", "Varna", "Burgas"];
let verbs = ["eats", "holds", "sees", "plays with", "brings"];
let nouns = ["stones", "cake", "apple", "laptop", "bikes"];
let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
let details = ["near the river", "at home", "in the park"];

function getRandomWord (array){
    let word = array[Math.floor(Math.random() * array.length)];
    return word;
}
let randomName = getRandomWord(names);
let randomPlace = getRandomWord(places);
let randomVerb = getRandomWord(verbs);
let randomNouns = getRandomWord(nouns);
let randomAdverbs = getRandomWord(adverbs);
let randomDetails = getRandomWord(details);

let who = `${randomName} from ${randomPlace}`;
let action = `${randomAdverbs} ${randomVerb} ${randomNouns}`;
let sentence = `${who} ${action} ${randomDetails}`;

console.log('Hello, this is your first random-generated sentence:');
console.log(sentence);

let recursiveAsyncReadLine = function () {
    readline.question('Click [Enter] to generate a new one.'), string =>{recursiveAsyncReadLine

    }
}
