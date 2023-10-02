
// Dynamic language

console.log('Test');
console.log('Test2');
console.log('Test3')

/* 
JavaScript has 8 Datatypes
  1. String
  2. Number
  3. Bigint
  4. Boolean
  5. Undefined
  6. Null
  7. Symbol
  8. Object
*/


//  1. String
const myFirstText = "My first text";
let myOriginTown = 'My origin town is Radauti';


//  2. Number
const number1 = 100;
const number2 = 5.6;
const number3 = -5;
const number4 = 444444444444444444444444444;
const number5 = 0;
const number6 = .5;


//  3. BigInt
const hugeNumber = BigInt(9007199254740991);


// 4. Boolean
let adevarat = true;
let neadevarat = false;

// 5. Undefined
let noneValue = undefined;

// 6. Null
let noGoodValue = null;

// 7. Symbol 
const simbolNou = Symbol('');


// 8. Object 

// Object 
const personObject = {
  firstName: 'Andrei',
  lastName: 'Duhanes',
  age: 32
};

// Array
const zileleSaptamanii = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 556, true];


// Function
function zileleSaptamaniiFunctie() {
  console.log('Luni');
  console.log('Marti');
  console.log('Miercuri');
  console.log('Joi');
  console.log('Vineri');
}

zileleSaptamaniiFunctie();

const daysArray = [1,2,3];


// asignarea by reference ,sau by value



function fn(arr) {
  // const newArr = [...arr]
  newArr.pop();
  return newArr;
}







