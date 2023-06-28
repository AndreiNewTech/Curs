

// Assignment
// Addition
// Arithmetic
// Comparison
// Logical


//  Assignment and Addition
  //  Asignarea unor valori unor varibile, 
  //  addition + concateneaza variabile de tip string

  let firstName = "Andrei";
  let lastName = "Duhanes"
  let age = 32;

  age += 8;
  // age = age + 8;
  console.log('Varsta mea o sa fie la un moment dat, sper', age);

  const persoana = firstName + " " + lastName + " " + age + " ani";
  console.log(persoana);


// Addition ( ideea de coercitie, coercion)
  console.log('Anghel' + ' Gabriel');
  console.log(5 + 5);
  console.log(5 + '5');
  console.log(5 + 'Alexandru');
  console.log(+'10');

  
// Arithmetic
  // Addition
  10 + 5;

  // Subtraction
  5 - 6;

  // Multiplication
  4 * 5;

  // Division 
  4 / 2;

  // Exponential
  5 ** 2  // 25

  // Modulus
  4 % 2 // 0

  5 % 2 // 1

  // Incrementare
  let x = 1;
  // x = x + 1;
  x++;
  console.log(x, 'X');

  let y = 10;
  // y = y - 1;
  y--;
  console.log(y, 'Y value');

  let sum = (((1 + 2 + 3 + 4 + 5) / 2) / 2) ** 2;
  sum++;
  console.log(sum);
  const my_sum = 'My sum is ' + sum;
  console.log(my_sum);
