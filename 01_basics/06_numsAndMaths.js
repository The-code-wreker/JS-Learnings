const score = 400;
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length); // here string prototypes can be used
console.log(typeof balance);

console.log(balance.toFixed(2)); // to display the precision values upto 2 decimal places

const otherNumber = 1123.8344

console.log(otherNumber.toPrecision(3));// retuns a string and works as round for arguments passed digit like here 123 or 124 will come in otherNumber as we only have 3 as argument in toPrecision and so it round of two 3 places and if before decimal there are more than 3 then it will answer in exponential form like we give value 1123.8344 then the answer will be 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString());// gives us representation of comas
console.log(hundreds.toLocaleString('en-IN'));// gives indian representation of comas

// also we can use Number.maxvalue or 
//Number.MAX_SAFE_VALUE
//Number.MIN_VALUE
//Number.MAX_VALUE


// ************************Maths*************************

console.log(Math);

console.log(Math.abs(-4));// changes negative value to positive value
console.log(Math.round(4.3));// roundsoff
console.log(Math.ceil(4.2));// celing value if even 4.1 then gives output 5
console.log(Math.floor(4.9)); // gives lowest value that is four 
console.log(Math.min(4,3,5,9));// gives min value 
console.log(Math.max(4,3,5,9));// gives max value

console.log(Math.random());//gives random value b/w 0 & 1

console.log((Math.random()*10)+1);// this ensures a non- zero value b/w 0 and 10 as we added +1
console.log((Math.floor(Math.random()*10)+1)); // this gives a non-zero value and a floor value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // generic code to genrate a random number between 10 to 20 
