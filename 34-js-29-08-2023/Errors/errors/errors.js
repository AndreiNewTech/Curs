

/// Errors 

// 1. ReferenceError
// console.log(er);
// const add2Vars = num1 + num2;

// console.log(name);
// const name  = 'Andrei';

// 2. TypeError
const peopleObj = {};
console.log(peopleObj.person); // E undefined dar nu e o eroare

// console.log(peopleObj.person.firstName);  // Type Error undefined nu are firstname prop

// Pentru a te proteja de eroarea aceata, o metoda e conditional chaining
console.log(peopleObj.person?.firstName); 

// if (peopleObj.person) {
//   console.log(peopleObj.person.firstName);
// }

// const nullVal = null;
// console.log(nullVal.firstName); // Type error

const numTen = 10; 
console.log(numTen.firstName); // string, boolean, number will give undefined
// will not throw error

// 3. Syntax error
// if (3 !=== 5) {   // sintaxa care nu face sens in limbajul javascriptului
//   console.log('3 nu e egal cu 5');
// }

// )
// }
// (10 >>>> 5);

// const num = 10;
// num.forEach(el => {
//   console.log(el);
// })

// Try catch
// const a = 10;
// // const b = 20;
// const c = a + b;
// console.log(c);

// Incearca sa execute o bucata de cod, daca este eroare o sa o prinda
// eroarea si permite adaugarea de cod ulterioara, permite executia codului ce o urmeaza
try {
  const a = 10;
  // const b = 20;
  const c = a + b;
  console.log(c);

} catch(error) {
  console.log(error);
}

// Posibilitatea de a creaa erori personalizate
function outputNumber(num) {
  if (typeof num !== 'number') {
    throw new Error('You havent provided a number');
  }

  console.log(num);
}


try {
  outputNumber('hello');
  // preiei date dintr-un backend de care nu esti sigur
  const serverData = [{personObj: {name: 'Andrei'}}, {personObj: {name: 'Alex'}}];
  // ar da o eroare aici
  serverData.forEach(el => {
    console.log(el.person.name)
  })
} catch(error) {
  console.log(error,'error');
}


function outputString(str) {
  try {
    if (typeof str !== 'string') {
      throw new Error('You havent provided a string');
    }
  } catch(er) {
    console.log(er);
  }
}


outputString(3);


console.log('This code executes after, this is the end of our js code');