
console.log('Hello world');

const names = 'Andrei';

function getName() {
  const varsta = 32;
  console.log(names + ' are ' + varsta + ' ani.');
}

getName();
getName();


function getPersonInfo(firstName, lastName, age) {
  console.log(names);
  getName();
  console.log(
    firstName + ' ' +  lastName  + ' are varsta de  ' +  age + ' ani impliniti'
  );
}

getPersonInfo('Alex', 'Popescu', 34);
getPersonInfo('Ionut', 'Atodiresii', 40);
getPersonInfo('Teodor', 'Stolojan', 50);


// Checking input using If

function validateNumber() {
  const inputValue = document.getElementById("num1").value;

  if (parseInt(inputValue) >= 10 && parseInt(inputValue) < 100) {
    console.log('Correct Value');
  } else {
    console.log('Incorrect Value');
  }
  
}

// Alert which one is bigger
const num1 = 30;
const num2 = 30;

// if (num1 > num2) {
//   alert('Num1 is bigger');
// } else if (num2 > num1) {
//   alert('Num2 is bigger');
// }

// alert(num1 > num2 ? 'Num1 is bigger' :  num1 === num2 ? 'Are equal' : 'Num2 is bigger');



// Write a program that receives a 2-digit number as input and prints the sum of the
// digits of the number.
// Algorithm:
// 1.) Extract the unity digit by mod10 -> units.
// 2.) Extract the tens by dividing by 10 -> tens.
// 3.) We will then add tens + units -> sum.
// 4.) Alert sum.
// Exercise Do it yourself

// const numar = parseInt(prompt("Introdu numarul tau: ")) ;

// const units = numar % 10;
// const tens = Math.floor(numar / 10);

// const sumOfDigits = units + tens;

// alert("Suma cifrelor numarului tau este: " + sumOfDigits)


//  Math
Math.floor(3.2) // 3
Math.ceil(3.2) // 4 
Math.pow(10, 2); // 100
Math.sqrt(4); // 2
Math.random() // 0 - 1 

parseInt('2') // 2
parseInt(2.2) // 2


// Example for changing colors

const bodyElement = document.getElementById('main-body');
const inputElement = document.getElementById('num2');

function toggleColor() {
 
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  inputElement.value = randomNumber;

  if (randomNumber > 50) {
    bodyElement.style.backgroundColor = 'pink';
  } else {
    bodyElement.style.backgroundColor = 'orange';
  }

}














