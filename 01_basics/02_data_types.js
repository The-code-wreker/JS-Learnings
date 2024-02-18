"use strict"; // treat all JS code as newer version (not actually needed already applied in new engines )

// alert (3+3) // we are using node js, not browser

console.log (3+3); // code readability should be high
console.log ("Hitesh")

// ecma official but mdn is a good alternative

let name = "manish" //string
let age = 18
let isLoggedIn = false
let state;

//////////primitive data types
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => khali hai
// undefined => 
// symbol => used in majorly react to find uniqueness


////////// object

console.log(typeof "hitesh") // string
console.log(typeof age) // number
console.log(typeof null)  // object no specific data type
console.log(typeof undefined)  // undefined

// total 8 data types 
/*
// 7 primitive - call by value
1.string
2.number
3.Bigint
4.boolean
5.undefined
6.null
7.symbol
*/
const score = 100;
const scorevalue = 10.3
const issLoggedIn = false

const outsideTempp = null;

let userEmail;

let id = Symbol("123")
let anotherId = Symbol('123')

console.log(id === anotherId)// false as symbol gives a different value 

const bigNumber = 5614518643168135351681n; // in the end 'n' represents that the number is big int


/*
// non-primitive(reference)
1.object
2.array
3.function 

*/
const heros = ["shaktiman", "nagaraj", "doga"];
let myobj = {
    name: "hitesh",
    age: 22,

}
const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof score);//number
console.log(typeof scorevalue);//number
console.log(typeof issLoggedIn);//boolean
console.log(typeof outsideTemp);//object, null also gives type object
console.log(typeof userEmail);//undefined
console.log(typeof id);//symbol
console.log(typeof anotherId);//symbol
console.log(typeof bigNumber);//bigint
console.log(typeof heros);//object
console.log(typeof myobj);//object
console.log(typeof myFunction);//function (also function object )

// js is a dynamically typed language as the data type is defined on the basis of the value and not needed to be predefined


/*

@alphacodehub
5 months ago
Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
*/

//*******************How_Memory_Is_Used******************

// stack (primitive ) and heap (non-primitive)

let myYoutubeName = "ManishOfficial"
let newYoutube = myYoutubeName // here we get a copy of the orginal value and does not affect the original value when there are changes in this value 
newYoutube = "Manish2001"
console.log(myYoutubeName);//ManishOfficial
console.log(newYoutube);//Manish2001

let user1 = {
    name: "user11",
    email: "user11@gmail.com",
}

let user2 = user1; // here the value is referenced to the original value and if the changes are done in user2 then the date in the user1 will also gets changed 

user2.email = "user2@gmail.com";

console.log(user1.email)//user2@gmail.com
console.log(user2.email)//user2@gmail.com

