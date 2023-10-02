

const numbersArr = [1,2,3,4,5,6];

// Map ne returneaza un array modificat in fucntie de callback-ul primit
const newNumbersarr = numbersArr.map(function(elem) {
  if (elem !== 0 && elem % 2 === 0 && elem > 2) {
    return elem * elem + '';
  }  
  else {
    return elem;
  };
});
console.log(newNumbersarr);


// ForEach
numbersArr.forEach(function(el) {
  console.log(el);
})

// sau
numbersArr.forEach(el => {
  console.log(el);
})

for (let el of numbersArr) {
  console.log(el);
}


// Filter function, filtreaza un array si returneaza un array filtrat in functie de callback pasat
const wordsList = ['Html', 'Java', 'C#', 'NoSql', 'MySql'];

const filteredList = wordsList.filter((el) => {
  return el.length > 4;
});

const filteredList2 = wordsList.filter((el, index, array) => {
  // if (el === 'Html' || el === 'Java') {
  //   return true;
  // } else {
  //   return false;
  // }

  // sau
  console.log(el, index, array)
  return el === 'Html' || el === 'Java';
});


console.log(filteredList);
console.log(filteredList2);


// Find
const carsList = ['Bmv', 'Mercedes', 'Skoda', 'Dacia'];

const firstFoundElem = carsList.find(function(el) {
  return el === 'Dacia';
});


console.log(firstFoundElem);

// Inverse array
// carsList.reverse();
console.log(carsList);

// Taiere din arrays // slice si splice (index de plecare si index de finalizare)
const sliceCarsList1 = carsList.slice(2);

const spliceCarsList2 = carsList.splice(2);
console.log(spliceCarsList2, carsList);


// Reduce 
const reduceArray = [1,3,4,6];

const sumValues = reduceArray.reduce((prev, curr) =>  {
  console.log(prev, curr)
  return curr + prev;
}, 0);

console.log(sumValues);

