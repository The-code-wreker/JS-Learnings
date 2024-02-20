const name = "hitesh"
const repoCount = 50

// console.log (name + repoCount + "Value");// not recommended in todays era


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this is better way of declaring the strings as backticks allow to insert the variable in between the quotes - this method is also called string interpolation

const gameName = new String("hitesh-hc-com")

console.log(gameName[0]);
console.log(gameName.__proto__);// actually not empty

//examples of prototypes in strings
// - also all string methods can be seen by the brwoser inspect

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt (2));// 2 is index that is 3rd postion

const newString = gameName.substring(0,4)// it prints from 0 index to 3 index that is 1st positon to 4th position 
// also here we can't give negative values as arguments, 0 and 4 are arguments
console.log(newString);

const anotherString = gameName.slice(-8,3);//-8 from where it starts and ends at 3 positon index that is at index 2  
// here(slice) we can use negative values as arguments, here -8 and 4 are arguments
console.log(anotherString);

const newStringOne = "    hitesh   \n "
console.log(newStringOne);
console.log(newStringOne.trim()); // also there are trimStar() and trimEnd() and it works on line spaces and line terminators.

const url = "https://hitesh.com/hitesh%20choudary" // in webpage searching spaces are converted to %20

console.log(url.replace('%20', '-'))// 1st argument to be replaced and 2nd argument with what to be replaced
console.log(url.includes('hitesh'))// true, helps in searching if the string has the particular value or not
console.log(url.includes('sundar'))// false, helps in searching if the string has the particular value or not

console.log(gameName.split('-'))// splits string into a array based on the splitor argument passed and limit argument (optional)
//split(separator)
//split(separator, limit) eg.
// string :const sentence = "This is a sample sentence.";
// split :const limitedArray = sentence.split(' ', 3); 
//output : ["This", "is", "a"]



