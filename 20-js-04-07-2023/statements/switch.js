
const ziuaSaptamanii = prompt('Ce zi este?');

let ziuaSaptamaniiString;

switch(ziuaSaptamanii.toLowerCase()) {
  case 'luni':
    console.log('Primele zile din saptamana');
    ziuaSaptamaniiString = 'Este ziua luni';
    break; // nu uitati sa il puneti

  case 'marti':
    console.log('Primele zile din saptamana');
    ziuaSaptamaniiString = 'Este ziua marti';
    break;

  case 'miercuri':
    console.log('Ziua este miercuri');
    ziuaSaptamaniiString = 'Este ziua miercuri';
    break;

  default: 
    console.log('Este o zi diferita');
    ziuaSaptamaniiString = 'Este o zi diferita';
}


function ouptutTest() {
  console.log('Test1');
  console.log('Test2');
  console.log('Test3');
  outputTestInTest();
  console.log('Test4');
  console.log('Test5');

  function outputTestInTest() {
    console.log('TestTest1');
    console.log('TestTest2');
    console.log('TestTest3');
    console.log('TestTest4');
    console.log('TestTest5');
  }
}

ouptutTest();

console.log(ziuaSaptamaniiString);