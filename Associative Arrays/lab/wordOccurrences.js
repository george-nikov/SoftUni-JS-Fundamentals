function wordOccurrences (arr) {

    let map = new Map ();
    let counter = 0;
    let count = 1;


    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (map.has(current)) {
            let currentCount = map.get(current);
            map.set(current,currentCount+1);
        }
        else {
            map.set(current,count);
        }
    }

    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);

   for (let keys of sorted) {
            console.log(`${keys[0]} -> ${keys[1]} times`);
        }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
