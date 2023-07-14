
// Function declaration
function logMessage() {
  console.log('Function call 2');
}

console.log('Function call 1');
// Calling a function
logMessage();

let sum = 0;
sum = 10 + 10;
console.log(sum);

// Context global de executie
function addNumbers() {
    // Contextul functiei de executie 1 
  let sum = 0;
  sum = 5 + 5;
  console.log(sum, 'Sum');

  function innerMultiplication() {
      // Contextul functiei de executie 2 
      let value = 0;
      value = 15 * 15;
      const innerString = 'Inner String';
      console.log(value, 'Multiplication', innerString);
  }

  innerMultiplication();
  console.log('Final add numbers');
}

addNumbers();
console.log('After function call');


// Scope chain, o functie o sa caute variabila la cel mai apropiat context de executie
function logFirstSumInFile() {
  // let sum = 0;
  console.log(sum);
}
logFirstSumInFile();


// Returnarea de valori a functiei

function getHelloWorldString() {
  const helloWorld = 'Hello world';
  // return undefined; by default
  return helloWorld;
}
// Asignarea unei valori returnate
const printString = getHelloWorldString();
// console.log(printString);

const newGetStringFunction = getHelloWorldString;
console.log(newGetStringFunction());


// Function expression and params
const getNumberPow2 = function(num, num2, num3, num4) {
  const newValue = num * num;
  console.log(arguments);
  console.log(num2, num3);
  return newValue;
}

// console.log(getNumberPow2(10));
const x = getNumberPow2(10,20,30,50);
// console.log(x);
// (function() {
//   console.log('Does nothing')
// })();


//  O functie ce returneaza suma a 3 numere

const getSum = function(num1, num2, num3) {
  const sumValue = num1 + num2 + num3;
  return sumValue;
}

// echivalent

// function getSum(num1, num2, num3) {
//   const sumValue = num1 + num2 + num3;
//   return sumValue;
// }

const sum1 = getSum(1,5,7);
const sum2 = getSum(1,10,7);
const sum3 = getSum(1,5,23);
console.log(sum1, sum2, sum3);



const CITIES_LIST = ['Oradea', 'Bucuresti', 'Suceava', 'Braila'];
const getCitiesString = function(listaDeOrase) {
  let cityString = '';

  for (let orasString of listaDeOrase) {
    cityString = cityString + ' ' + orasString;
  }
  // echivalent
  // for (let i = 0; i < listaDeOrase.length; i++) {
  //   cityString = cityString + " " + listaDeOrase[i];
  // }
  return cityString;
};

console.log(getCitiesString(CITIES_LIST));

const checkIfParamIsANumberAndValid = function(valueToCheck) {
  // return valueToCheck && typeof valueToCheck === 'number';
  // return valueToCheck ? typeof valueToCheck === 'number' : false;
  if (typeof valueToCheck === 'number' && valueToCheck !== NaN) {
    return true;
  } else {
    return false;
  }
  // shorthand 
  // return typeof valueToCheck === 'number';
}

const listOfLanguages = [
  "C#",
  "Java",
  "Enlgish",
  "Hungarian",
  "Latin",
  "JavaScript",
];

const getFilteredProgrammingLanguagesList = function (listaDeLimbaje) {
  const filteredList = [];
  for (limbaj of listaDeLimbaje) {
    const filtredLimbaj = switchLimbaj(limbaj);
    if (filtredLimbaj) {
      filteredList.push(filtredLimbaj);
    }
  }
  return filteredList;
};

function switchLimbaj(inputData) {
  switch (inputData) {
    case "C#":
    case "Java":
    case "JavaScript":
      return inputData;
    default:
      break;
  }
}
console.log(getFilteredProgrammingLanguagesList(listOfLanguages));

// Arrow function
const getNumbersDivsion = (a,b) => {return a/b};
// return short hand
const getNumbersDivsion2 = (a,b) => a / b;

getNumbersDivsion(10,2)

function z() {}
// sau
const y = (element) => {
  console.log(element)
};

y('Heya');


function returnSmallerFunction() {
  const numberTen = 10;
  return function(num) {
    return num * numberTen;
  }
}

const smallerFunction = returnSmallerFunction();
console.log(smallerFunction(5), smallerFunction(20));


//
function recursiveFn() {
  recursiveFn();
}


