

// if ()
let count = 0;

while (count < 10) {
  console.log('Run while', count);
  count++;
}

// Pana la 5
while (count < 10) {
 
  if (count === 5) break;
  console.log('Run while', count);
  count++;
}


// Omite 5
while (count < 10) {
  count++;
  if (count === 5) continue;
  console.log('Run while', count);
}

let countDo = 0;
do {
  console.log('Yey');
  countDo++;
} while(countDo < 2)






