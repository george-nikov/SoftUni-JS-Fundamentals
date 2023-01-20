function requiredReading (pages,pagesHour,days) {

let time = pages/pagesHour;
let hours = time/days;

console.log(hours > 0 ? hours:hours);

}
requiredReading(212,20,2)
