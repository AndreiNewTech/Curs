
// for (let i = 0; i < 100; i++) {
//   console.log('Numarul i este = ' + i);
// };

// for (let i = 0, j = 50;  i < 100 && j < 51; i++, j--) {
//   console.log(i, j);
// }

// Se poate initializa si asa (dar nu este de dorit)

// let x = 0;
// for (;x < 1000; x++) {
//   console.log(x);
// }


// Cuvinte cheie: break, continue

for (let i = 0; i < 10; i++) {
  // vrem sa iesim cand ajunge la cifra 5, o sa afiseze doar primle 5 cifre 0 - 4
  if (i === 5) {
    break;
  }
  console.log(i);
}


for (let i = 0; i <= 100; i = i + 10) {
  if (i === 50) {
    continue;
  }
  console.log(i);
}


for (let i = 0; i < 50; i++) {
  const color1 = Math.floor(Math.random() * 200);
  const color2 = Math.floor(Math.random() * 200);
  const color3 = Math.floor(Math.random() * 200);
 
  document.getElementById('body').innerHTML = document.body.innerHTML +  "<p class='text'>" + i + "</p>";
  const rgbColor = 'rgb(' + color1 + "," + color2 + "," + color3 + ")";
  document.getElementsByClassName('text')[i].style.backgroundColor= rgbColor;
}


// Exercitiu Console.log numerle pare

function getEvenNumbers() {

  for (let i = 0; i < 100; i = i + 2) {
    console.log(i);
  }

 // sau testam daca sunt pare
 
  for (let j = 0; j < 100; j++) {
    if (j % 2 === 0) {
      console.log(j);
    }
  }

  // sau folosim continue

  for (let k = 0; k < 100; k++) {
    if (k % 2 === 1) {
      continue;
    } 
    console.log(k);
  }
}


// Ex do it yourself 4 
let counter = 0;
document.getElementById('counter').textContent = counter;

function handleCounter() {
  for(let i=0; i < 4; i++) {
    const promptNumber = prompt('Introdu numar');
    if (promptNumber > 50) {
      counter++;
    }
  }
  document.getElementById('counter').textContent = counter;
}

// Inside loops

console.log('-----------------------------------------');

for (let i = 0; i < 10; i++) {
  console.log(i);
  for (let j = 0; j < 10; j++) {
    console.log(j);
  }
}

console.log('-----------------------------------------');

let charString = '';

// For in for e folosit pentru matrice, de regula nu e ideal sa folosesti loop in loop
for (let i = 0; i < 10; i++) {
  // charString = charString + '$';
  for (let j = 0; j < 10; j++) {
    charString = charString + '$';
  }

  charString = charString + "\n";
}
console.log(charString);

let numberString = '';

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++ ) {
    numberString = numberString + (i * j) + ',';
  }
  console.log(numberString);
  numberString = numberString + "\n";
}


console.log(numberString);



const lista = [2,5,6,7,8,10];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 === 0) {
    console.log(lista[i]);
  }
}




