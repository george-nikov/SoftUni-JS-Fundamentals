function censoredWords (text, word) {

    let censored = text.replace(word, repeat(word));
    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word));

    }
    function repeat (word) {
        let result = '';
        for (let i = 0; i < word.length; i++) {
            let star = "*"
            result += star;
        }
        return result;
    }
    console.log(censored);
}
censoredWords('A small sentence with some words', 'small')
