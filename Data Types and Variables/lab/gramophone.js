function gramophone (bandName, albumName, songName){

    let time = (bandName.length * albumName.length) * songName.length

    let rotations = Math.ceil(time/2.5);
    console.log(`The plate was rotated ${rotations} times`);
}
gramophone(['Black Sabbath', 'Paranoid', 'War Pigs'])
