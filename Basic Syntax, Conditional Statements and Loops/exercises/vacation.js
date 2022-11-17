function vacation (num, type, day) {

    let price = 0;

    switch (day) {
        case "Friday":
            switch (type) {
                case "Students":
                    price = 8.45
                    break;
                case "Business":
                    price = 10.90;
                    break;
                case "Regular":
                    price = 15;
                    break;
            }

            break;
        case "Saturday":
            switch (type) {
                case "Students":
                    price = 9.80
                    break;
                case "Business":
                    price = 15.60;
                    break;
                case "Regular":
                    price = 20;
                    break;
            }
            break;
        case "Sunday":
            switch (type) {
                case "Students":
                    price = 10.46
                    break;
                case "Business":
                    price = 16;
                    break;
                case "Regular":
                    price = 22.50;
                    break;
            }
            break;
    }

    let total = price * num; 

    if (type == "Students" && num >= 30) {
        total = total - total * 0.15;
    }
    else if (type == "Business" && num >= 100) {
        total = price * (num-10);
    }
    else if (type == "Regular" && num >= 10 && num <= 20) {
        total = total - total * 0.05;
    }
    
    console.log(`Total price: ${total.toFixed(2)}`);

}
vacation([30,'Students','Sunday'])
