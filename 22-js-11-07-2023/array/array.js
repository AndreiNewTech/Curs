

//  Arrays 
const myFirstArray = ['My first Array', 'Pretty nice', 'A great data structure'];
const firstArrayValue = myFirstArray[0];
console.log(firstArrayValue);
console.log(myFirstArray);

// Puteti folosi orice structura de date pe array
const mixArray = ['My second array', 101, null, undefined];

// Length ne zice marimea array-ului, length 4
const mixArrayLengthValue = mixArray.length;

// Index based (0 - arr.length - 1)
const longArray = [123,123,35,345,324,24423,43,232,12,3,4356,54634,34,43553];
const longArrayFirstValue = longArray[0];
const longArrayLastValue = longArray[longArray.length - 1];
//  sintaxa mai noua de accesare
const longAraryLastValue2 = longArray.at(-1);

const arrayInArray = [[1,2,3,5], ['abc', 'bca', 'cab']];
const firstArrayInArray = arrayInArray[0];
const secondArrayInArray = arrayInArray[1];
const firstElementInFisrtArrayInArray1 = firstArrayInArray[0];
const firstElementInFisrtArrayInArray2 = arrayInArray[0][0];

// Adaugare/scoatere/modificare in array
const numArray = [101, 1001, 10001];
// Modificare
numArray[0] = 1;
numArray[1] = 11;
numArray[numArray.length - 1] = 111;
// Adaugare ultim membru
numArray.push(1000001);
// sau
// numArray[numArray.length] = 1000001;
// numArray[10] = 10; creeaza spatii in array, strica indexarea daca indexul nu e cel consecutiv

numArray.push(100000001);

// Adaugare prim membru (shifting)
const limbajeInvatate = ['Html', 'Css', 'Js'];
limbajeInvatate.unshift('Git'); // ['Git', 'Html', 'Css', 'Js]
limbajeInvatate.shift() // ['Git', 'Html', 'Css', 'Js]


// Scapa de ultimul membru din array, pe de alta iti returneaza acea valoare
const lastValue = numArray.pop();
numArray.pop();
numArray.pop();
numArray.pop(); // ramane doar cu [1]

// Golire array
const dogNamesArray = ['Sam', 'Drupi', 'Brutus'];
// golim array daca e const
dogNamesArray.length = 0; 

// daca e let 
let dogNamesArray2 = ['Sam', 'Drupi', 'Brutus'];
dogNamesArray2 = [];


// Iterare


