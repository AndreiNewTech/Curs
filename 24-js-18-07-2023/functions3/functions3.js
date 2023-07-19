
// 11. Scrieti o functie care primeste ca argument
// o lista si returneaza o lista filtrata, 
// in care raman doar numerele distincte puse in ordine crescatoare
// (fara sa folositi array.sort). filterNumbersList([1,5,3,3, null, 'hello']) -> [1,3,5]

const getFilteredList = (elementsList) => {
  const distinctList = [];
  const filteredList = [];
  const listaSortata = distinctList;

  // 1. Filtram numerele
  for (let i = 0; i < elementsList.length; i++) {
    if (typeof elementsList[i] === 'number' && elementsList[i]) {
      filteredList.push(elementsList[i]);
    }
  }


  // 2. Adaugam doar valori distincte
  for (let number of filteredList) { 
    let foundDuplicate = false;
      for (let number2 of distinctList) {
        if (number === number2) {
          foundDuplicate = true;
          break;
        }
      }
      if (!foundDuplicate) {
        distinctList.push(number);
      }
  }

  // 3. Sortare prin bubble sort. 
  // [3,5,1,2] -> [3,5,1,2] - > [3,1,5,2] -> [3,1,2,5]
  for (let i = 0; i < listaSortata.length; i++) {
    for (let j = 0; j < listaSortata.length - i; j++) {
      if (listaSortata[j] > listaSortata[j+1]) {
        let tempVal;
        tempVal = listaSortata[j];
        listaSortata[j] = listaSortata[j+1];
        listaSortata[j+1] = tempVal;
      }
    }
}

  // 2. Numere distince
  return distinctList;
}

// [3,5,1,2] -> [3,5,1,2] -> [3,1,5,2] -> [3,1,2,5] #1 #4
// [3,1,2,5] -> [1,3,2,5] -> [1,2,3,5] -> [1,2,3,5] #2 #4
// [1,2,3,5] -> [1,2,3,5] -> [1,2,3,5] -> [1,2,3,5] #3 #4
//[1,2,3,5] -> [1,2,3,5] -> [1,2,3,5] -> [1,2,3,5] #4 #4

console.log(getFilteredList([1,6,32,2,2,5, NaN,'string', null]))



const getNumberFilteredList = function(mixedValuesList) {
  const filteredNumberList = [];
  for (let i = 0; i < mixedValuesList.length; i++) {
    if (typeof mixedValuesList[i] === 'number' && mixedValuesList[i]) {
      filteredNumberList.push(mixedValuesList[i]);
    }
  }
  return filteredNumberList;
}


const addDistinctValues = function(duplicateValueList) {
  const filteredList = duplicateValueList;
  const distinctList = [];
  for (let number of filteredList) { 
    let foundDuplicate = false;
      for (let number2 of distinctList) {
        if (number === number2) {
          foundDuplicate = true;
          break;
        }
      }
      if (!foundDuplicate) {
        distinctList.push(number);
      }
  }

  return distinctList;
}

const getOrderedList = function(unorderedList) {
  for (let i = 0; i < unorderedList.length; i++) {
    for (let j = 0; j < unorderedList.length - i; j++) {
      if (unorderedList[j] > unorderedList[j+1]) {
        let tempVal;
        tempVal = unorderedList[j];
        unorderedList[j] = unorderedList[j+1];
        unorderedList[j+1] = tempVal;
      }
    }
  }
  return unorderedList;
}

const getFilteredListRestructured = (elementsList) => {
  // 1. Filtram numerele
  const numberFilterdArr = getNumberFilteredList(elementsList);

  // 2. Adaugam doar valori distincte
  const distinctValuesArr = addDistinctValues(numberFilterdArr);

  // 3. Sortare prin bubble sort.
  const ordereNumberdArr = getOrderedList(distinctValuesArr);

  return ordereNumberdArr;
};


console.log(getFilteredListRestructured([1,3,33,5,6,6,6,null, 'A']));


// Callbacks 
function logHello() {
  console.log('Hello');
}

const callFunctionParam = function(fnParam) {
  fnParam();
}


const modifiyAndConsoleArr = function(arr, fn) {
  const newArr = [];
  for (let el of arr) {
    newArr.push(fn(el))
  }
  console.log(newArr);
  return newArr;
}

const power2List = modifiyAndConsoleArr([1,2,3], function(val) {
  return val * val;
})

const power3List =  modifiyAndConsoleArr([1,2,3], function(val) {
  return Math.pow(val, 3);
})

const getOddOrEvenString =  modifiyAndConsoleArr([1,2,3], function(val) {
  if (val % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})

// cu arrow functions de regula
const stringValues = modifiyAndConsoleArr([1,2,3], (val) => {
  return val + '';
})

// .sort((a,b) => a - b)
// [1,2,3].sort(function(a,b) {
//   return a - b;
// });

const mappedArr = [1,2,3].map(function (a) {
  return a * a * a + ''
})

console.log(mappedArr, 'new arr');

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const getGenericFilteredList = function(arr, fn) {
  const filteredList = [];
  for (let el of arr) {
    if (fn(el)) {
      filteredList.push(el);
    }
  }
  return filteredList;
}

getGenericFilteredList(words, (val) => {
    return val.length > 6;
})

console.log(words);
console.log(getGenericFilteredList(words, (val) => {
  return val.length > 5;
}));

// sau array functions
words.filter((val) => {
  return val.length > 5;
})


const bodyElemn = document.getElementById('body');
bodyElemn.addEventListener('mouseover', () => {
  console.log('clicked');
})


// callFunctionParam(logHello);



// Flatten Recursevly
const testAr = [21,3,[[[3, 10 ,20 ,[2]]]], [231, [23]]];


const fn = (arrInArr, arr) => {
  arrInArr.forEach(el => {
    if (Array.isArray(el)) {
      fn(el, arr)
    } else {
      arr.push(el);
    }
  });
}



const t = (function(val) {
  return {
  }
})('5');

