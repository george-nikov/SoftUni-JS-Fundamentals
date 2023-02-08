function loadingBar(percent) {

    let bar = String ("%").repeat(percent/10);
    let dots = String (".").repeat(10-(percent/10));
    if (percent === 100) {
        console.log(`${percent}% Complete!`)
    }
    else {
        console.log(`${percent}% [${bar}${dots}]`)
        console.log("Still loading...");
    }

}
loadingBar(50)
