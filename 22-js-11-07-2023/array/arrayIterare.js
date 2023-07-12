
// Iterare arrays cu FOR si cu while

const programingLanguagesList = [];
programingLanguagesList.push('Git');
programingLanguagesList.push('Html');
programingLanguagesList.push('Css');
programingLanguagesList.push('Javascript');
programingLanguagesList.push('Sass');
programingLanguagesList.push('Typescript');
programingLanguagesList.push('Nodejs');
programingLanguagesList.push('Express');
programingLanguagesList.push('MongoDb');

for (let i = 0; i <= programingLanguagesList.length - 1; i++) {
  console.log(programingLanguagesList[i], i);
}

// let count = 0;
// while (count < programingLanguagesList.length) {
//   console.log(programingLanguagesList[count], count)
//   count++;
// }


// programingLanguagesList.forEach(function (val, index) {
//   console.log(val, index);
// })

// for (listVariable of programingLanguagesList) {
//     console.log(listVariable);
// }


const newProgrammingLangList = [];

for (let i = 0; i <= programingLanguagesList.length - 1; i++) {
   newProgrammingLangList.push(programingLanguagesList[i]);
}

const newShorterProgrammingLangList = []; // fara Sass si fara Css
for (let i = 0; i <= programingLanguagesList.length - 1; i++) {
  if (programingLanguagesList[i] === 'Css' || programingLanguagesList[i] === 'Sass') {
    continue;
  }
  newShorterProgrammingLangList.push(programingLanguagesList[i]);
  // sau
  // if (!(programingLanguagesList[i] === 'Css' || programingLanguagesList[i] === 'Sass')) {
  //   newShorterProgrammingLangList.push(programingLanguagesList[i]);
  // }
}

// Separat lista in 2 liste per tip, folosindu-ne de typeof

const mixStringNumberList = [10, 5, '5', 13, 2, '6', 2, '23'];
const numbersList = [];
const stringNumberList = [];
const LIST_LENGTH = mixStringNumberList.length;

// for (let i = 0; i < LIST_LENGTH; i++) {
//   if (typeof mixStringNumberList[i] === 'number') {
//     numbersList.push(mixStringNumberList[i]);
//   }
//   if (typeof mixStringNumberList[i] === 'string') {
//     stringNumberList.push(mixStringNumberList[i]);
//   }
//   console.log(mixStringNumberList);
//   console.log(mixStringNumberList.shift());

// }
//sau inversa
for (let i = LIST_LENGTH - 1; i >= 0; i--) {
  if (typeof mixStringNumberList[i] === 'number') {
    numbersList.push(mixStringNumberList[i]);
  }
  
  if (typeof mixStringNumberList[i] === 'string') {
    stringNumberList.push(mixStringNumberList[i]);
  }

  console.log(mixStringNumberList);
  console.log(mixStringNumberList.pop());
}












