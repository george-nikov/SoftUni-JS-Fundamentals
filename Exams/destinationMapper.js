function destinationMapper (str) {

    let regex = /([=\/])(?<name>[A-Z]{1}[A-Za-z]{2,})\1/gm;
    
    let match = regex.exec(str);
    let sum = 0;
    let arrayPlace = []

    while (match) {

        let town = match.groups.name;
        sum += town.length
        arrayPlace.push(town)

        match = regex.exec(str);
    }
    console.log(`Destinations: ${arrayPlace.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
