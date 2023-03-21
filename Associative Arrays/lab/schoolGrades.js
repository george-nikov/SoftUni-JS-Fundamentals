function schoolGrades (arr) {

    let map = new Map ();

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let tokens = current.split(' ');
        let name = tokens[0];
        let gradesArr = [];

        for (let j = 1; j < tokens.length; j++) {
            grades = Number(tokens[j]);
            gradesArr.push(grades);
        }
        let sum = 0;
        for (let k = 0; k < gradesArr.length; k++) {
            sum += gradesArr[k]/gradesArr.length.toFixed(2);
        }
        
        if (map.has(name)) {
            let currentGrades = map.get(name);
            map.set(name, (currentGrades + sum)/2);
            
            }
            else {
            map.set(name, sum);
            }      
        }

        
        for (let [key, value] of map) {
            console.log(`${key}: ${value.toFixed(2)}`);
        }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])
