function wildZoo (arr) {

    let zooMap = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current === "EndDay") {
            break;
        }
        let tokens = current.split(": ");
        let tokens2 = tokens[1].split("-");
        let command = tokens[0];
        let animalName = tokens2[0];
        switch (command) {
            case "Add":
            let neededFood = Number(tokens2[1]);
            let area = tokens2[2];

            if (zooMap.hasOwnProperty(animalName)) {
                zooMap[animalName].neededFood += neededFood;
            }
            else {
                zooMap[animalName] = {neededFood, area};
            }
                break;

            case "Feed":
            let food = Number(tokens2[1]);
            if (zooMap.hasOwnProperty(animalName)) {
                zooMap[animalName].neededFood -= food;
            }
            else {
                break;
            }
            if (zooMap[animalName].neededFood <= 0) {
                delete zooMap[animalName];
                console.log(`${animalName} was successfully fed`);
            }   

                break;
        }
    }
            let counter = 0;
            let sorted = Object.entries(zooMap);
            let areas = [];

            if (sorted.length > 0){

            console.log("Animals:");
             for (const key of sorted) {
                console.log(`${key[0]} -> ${key[1].neededFood}g`);
                areas.push(key[1].area);
            }
           

            let areasObj = {};
 
        areas.forEach((area) => {
        if (!areasObj.hasOwnProperty(area)) {
            areasObj[area] = 1;
        } else {
            areasObj[area] += 1;
        }
    });
 
    let sortedAreas = Object.entries(areasObj)
    console.log('Areas with hungry animals:');

    if (sortedAreas.length > 0) {
 
        sortedAreas.forEach((area) => {
            console.log(`${area[0]}: ${area[1]}`);
        })
    }
    }
                    
}
wildZoo(["Add: Adam-4500-ByTheCreek",
"Add: Maya-7600-WaterfallArea",
"Add: Maya-1230-WaterfallArea",
"Feed: Jamie-2000",
"EndDay"])
