function cone (radius, height) {

let volume = Number(1/3*Math.PI* (radius*radius)*height);
let area = Number(Math.PI*(radius*radius)+Math.PI*radius*Math.SQRT2*radius*radius+height*height);
console.log(volume);
console.log(area);

}
cone([3,5])
