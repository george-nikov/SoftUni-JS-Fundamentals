function cone (radius, height) {

let volume = Number(1/3*Math.PI* (radius*radius)*height);
let area = Number(Math.PI * radius*(radius+Math.sqrt(radius*radius+height*height)));
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${area.toFixed(4)}`);

}
cone([3,5])
