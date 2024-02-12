let score = "33abc"

// const {score} = req.body // just a way expalined by hitesh bhaiya for getting a value at random or of any data type

console.log (typeof score);
console.log (typeof (score));

let valueInNumber = Number(score)
console.log (typeof (valueInNumber));
console.log (valueInNumber); // js will convert a numberAlphabet mixed into a number type but actually it is a Nan

// when score is null the converted value is 0
// when score is undefined it gives Nan
// when boolean value it gives true -1 and false -0
// "33" => 33
// "33abc" => Nan

let isLoggedIn = 1
// for ""(empty string) in isLoggedIn it gives false
// for "hites" in isLoggedIn it gives true
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log (booleanIsLoggedIn)

let someNumber =33

let stringNumber = String(someNumber) // Data type should start with a capital name
console.log (stringNumber)
console.log (typeof (stringNumber))
