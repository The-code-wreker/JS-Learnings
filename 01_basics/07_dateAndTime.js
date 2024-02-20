// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());// converts it to a string
console.log(myDate.toDateString());// removes time and displays only date
console.log(myDate.toLocaleString());// converts date into mm/dd/yyyy and 12 hour time format
console.log(myDate.toISOString());//Converts a date to a string following the ISO 8601 Extended Format.


console.log(myDate.toJSON());//Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().
console.log(myDate.toLocaleDateString());// gives only date in mm/dd/yyyy format

console.log(typeof myDate);// object

// new keyword is used to create an instance of an object

let myCreateDate = new Date(2024,0,21) // months start from 0 in js
let myCreateDatee = new Date(2024,0,21,5,35,22) // months start from 0 in js and after date the time starts
//let myCreateDateee = new Date("2024-02-29") // dates can be also in a specifie format here months start with 01
let myCreateDateee = new Date("01-14-2024") // format mostly followed in india mm-dd-yyyy
console.log(myCreateDate.toDateString());
console.log(myCreateDatee.toLocaleString());
console.log(myCreateDateee.toLocaleString());
console.log(myCreateDateee.toDateString());

let myTimeStamp = Date.now()// gives millisecond from the midnight at the beginning of January 1, 1970
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

let dTime = Math.floor((myTimeStamp-myCreateDate)/1000)// to get the difference in seconds
console.log(dTime);

let newDate = new Date() // gmt 0
console.log(newDate.getMonth() + 1)// as month start from 0
console.log(newDate.getDate())
console.log(newDate.getDay())

// `${newDate.getDay()} and the time ${}` - to print complex string formats using string interpolation

console.log(newDate.toLocaleString('default',{
    weekday: "short"}))

