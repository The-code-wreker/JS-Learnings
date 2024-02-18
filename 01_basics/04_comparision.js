console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2 == 1)
console.log(2!= 1)

console.log("2" > 1) // type coercion 2 is automatically conveted to a number
console.log("02" > 1)// type coercion 2 is automatically conveted to a number

console.log(null > 0)// false - as type coercion of null is 0 in comparision cases
console.log(null == 0)// false - as type coercion in equality is different as here null is trated as undefined
console.log(null >= 0)// true - as type coercion/conversion here of null is 0 due to ">" this and here null is treated as 0

console.log(undefined > 0)// false - here undefined is treated as Nan
console.log(undefined >= 0)// false- here undefined is treated as Nan
console.log(undefined == 0)// false - here undefined is not considered 0 
console.log(undefined === 0)// false - as both the data type and value should match 

console.log(undefined == null); // Output: true
console.log(undefined == undefined); // Output: true

// ====(strict check) both data type and value should match

console.log("2" === 2) // false as diff. data type




