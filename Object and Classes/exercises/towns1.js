function towns1 (arr) {

class Towns {
    constructor (name, latitude, longitude) {
        this.town = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
let array = [];
for (let i = 0; i < arr.length; i++) {
    array = arr[i].split(" | ");
    let newOne = new Towns(array[0],array[1],array[2]);
    let town = newOne.town;
    let longitude = Number(newOne.longitude);
    let latitude = Number(newOne.latitude);
    console.log(`{ town: '${town}', latitude: '${latitude.toFixed(2)}', longitude: '${longitude.toFixed(2)}' }`);
}
}
