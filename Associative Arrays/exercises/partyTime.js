function partyTime(arr) {

    let quests = {};
    let index = 0;
    let counter = 0;
    let counter2 = 0;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current === "PARTY") {
            break;
        }
        else {
            quests[current] = current;
            counter++;
        }
        index = i+2;
    }

    for (let j = index; j < arr.length; j++) {
        let coming = arr[j];
        if (quests.hasOwnProperty(coming)){
            delete quests[coming];
            counter2++;
        }
    }   
    let num = counter - counter2;
    console.log(num);
   for (let keys in quests) {
    console.log(keys);
   }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])
