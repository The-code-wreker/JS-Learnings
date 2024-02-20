//array

const myArray = [0,1,2,3,4,5,]
const myHeros = ["shaktiman", "naagraj"]

const myArr = new Array ( 1,2,3,4,5) // another way of declaring an array

console.log(myArr[0]);

// Array method

myArr.push(6)// adds a elemnt in the array in the last
myArr.push(7)
console.log(myArr);

myArr.pop();// removes the last element 
console.log(myArr);

myArr.unshift(0);// adds value to the starting of the array 
//but unshift is a memory consuming method as to add one element in the starting you have to shift all the elements by one index 
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));// -1 for all non-existing cases
console.log(myArr.indexOf(2));//gives index of the number where it is present

const newArrrr = myArr.join()

console.log(myArr);
console.log(newArrrr);
console.log(typeof newArrrr)

//slice splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr)
console.log(myn2);

// in slice the orginal array not gets changed
//while in splice original array gets changed and also includes the last index number where as slice does not includes it