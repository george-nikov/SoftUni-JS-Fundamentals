function adAstra(arr) {

    let regex = /([#|])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<calories>[0-9]{1,5})\1/gm;
    let totalCalories = 0;
    let buff = '';

    for (let text of arr) {
        let matches = text.matchAll(regex);
        for (let match of matches) {
            let item = match.groups["item"];
            let date = match.groups["date"];
            let calories = Number(match.groups["calories"]);
            totalCalories += calories;
            buff += `Item: ${item}, Best before: ${date}, Nutrition: ${calories}\n`;
        }
    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(buff);
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
