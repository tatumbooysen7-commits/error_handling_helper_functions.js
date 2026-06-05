/// TODO: Create a function that demonstrates multiple error types
function demonstrateErrors(value) {
try {
if (typeof value !== "number") {throw new TypeError("Input must be a number");}

// Range Error
if (value < 0) {throw new RangeError ("Number cannot be negative")}

if (value === 0) {throw new Error("Number cannot be zero");}

return `valid number: ${value}`;
}
catch(error) {return `${error.name}: ${error.message}`;}
}
console.log(demonstrateErrors(10));
console.log(demonstrateErrors(-2));
console.log(demonstrateErrors(0));
console.log(demonstrateErrors("Likona"));

// TODO: Create a collection of helper functions for string manipulation
//Converting the text to upper case
function toUpperCaseString(str) {return str.toUpperCase();}

//Converting the text to lowerCase
function toLowerCaseString(str) {return str.toLowerCase();}

//Reversing the string
function reverseString(str) {return str.split("").reverse().join("");}

//Counting the characters
function countCharacters(str) {return str.length;}

// Testing the function
console.log(toUpperCaseString("Front-end development"));
console.log(toLowerCaseString("FRONT-END DEVELOPMENT"));
console.log(reverseString("Front-end development"));
console.log(countCharacters("Front-end deveopment"));

// TODO: Create helper functions for array operations
// Sum of arrays elements
function sumArray(arr) {return arr.reduce((total, num) => total + num, 0);}

// find the largest number
function findLargest(arr) {return Math.min(...arr);}

//find the smallest
function findSmallest(arr) {return Math.max(...arr);}

// Remove duplicates
function removeDuplicates(arr) {return [...new Set(arr)];}

//Testing the function
console.log(sumArray([4, 10, 21, 25, 30]));
console.log(findLargest([2, 5, 10.5, 15]));
console.log(findSmallest([2, 5, 10.5, 15]));
console.log(removeDuplicates([2, 10 ,10, 21, 21, 25, 30, 30,]));
