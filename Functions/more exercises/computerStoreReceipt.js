function computerStore(arr) {

    let currentPrice;
    let typeOfClient = arr[arr.length - 1];
    let sum = 0;
    let tax = 0;
    let total = 0;
    let isInvalid = false;

    for (let i = 0; i < arr.length - 1; i++) {
        currentPrice = Number(arr[i]);
        if (currentPrice <= 0) {
            console.log("Invalid price!");
            continue;
        }
        tax += currentPrice * 0.20;
        sum += currentPrice;
    }

    total = sum + tax;

    if (typeOfClient === "special") {
        total = total - (total * 0.10);
    }
    if (total <= 0) {
        console.log("Invalid order!");
        isInvalid = true;
    }

        if (isInvalid === false) {

    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${sum.toFixed(2)}$
    Taxes: ${tax.toFixed(2)}$
    -----------
    Total price: ${total.toFixed(2)}$`)
    }

}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    
    
    
