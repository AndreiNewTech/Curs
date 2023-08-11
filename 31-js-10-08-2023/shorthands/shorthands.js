
//1. String template
const userAndr = 'Andrei';

const getFullName = () => 'Andrei Duhanes';

const strHello = 'hello' + ' world';
const strHelloAndr = 'hello ' + userAndr;

const strHi = `Hi ${userAndr}`;
const strHi2 = `Hi ${getFullName()}`;

//2 Optional chaining
const userObj = {
  name: 'Alex',
  age: 30
}

console.log(userObj?.name.x?.t);
// protejeaza impotriva erorilor in caz ca vreti 
// sa accesati o proprietate al lui unddefined
// undefined.prop -> eroarre 
// undefined?.prop -> undefined

//3 Default parameters
function getName(name = 'Andrei') {
  console.log(name);
}

getName('Alex');
getName();

//4 Ternary 
let age = 12;
const isAbove18 = age > 18 ? 'Este major' : 'Nu este major';

let color = 'asdas'; // alb negru, gri;
const whatColor = color === 'white' ? 'Is white' : color === 'grey' ? 'Is grey' : 'Is black';

//Spread ... -> a imprastia

// Arrays
const num1Arr = [1,2,3];
const num2Arr = [4,5,6];

const finalArr = [...num1Arr, ...num2Arr];

const helloStr = 'Hello';
const helloArr = [...helloStr];


// Objects
const persObj = {
  age: 20,
  name: 'Andrei'
}

const userAndrObj = {
  ...persObj,
  email: 'andr@test.com'
}
console.log(userAndrObj);

const animal = {
  type: 'dog',
  breed: 'Labrador',
}

const animalCopy = { ...animal};
console.log(animalCopy);

// Functions
const sum = function(...args) {
  console.log(args, 'Sume arguments')
  return args.reduce((prev,cur) => prev + cur, 0);
}

console.log(sum(1,2,3,4));

console.log(finalArr);


// REST
const WEEKDAYS = ['Mon', 'Tue', 'When'];
const [monday, wendsday] = WEEKDAYS;

// const monday = WEEKDAYS[0];
// const wendsday = WEEKDAYS[1];

console.log(monday, wendsday);


const schoolObj = {
  street: 'Aleea Baisoara',
  elevi: 100,
  profesori: 30,
  oras: 'Baia-Mare'
}


const { oras, profesori, elevi, street, } = schoolObj;
const { oras: orasVar, profesori: profesoriVar, elevi: eleviVar, street:StreetVar, } = schoolObj;
// const oras = schoolObj.oras;






