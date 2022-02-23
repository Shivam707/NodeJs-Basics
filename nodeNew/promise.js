var moment = require("moment");

timestring1 = "2021-12-30T14:36:05.000Z"
var startdate = moment(timestring1);
console.log(startdate)
// var returned_endate = moment(startdate).add(timeInMinutes, 'minutes').format("YYYY-MM-DD HH:mm:ss");
// console.log(returned_endate);

var date = moment().add(startdate,'minutes').format("YYYY-MM-DD HH:mm:ss");
console.log(date)