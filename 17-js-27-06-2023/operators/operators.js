

// Assignment
// Addition
// Arithmetic
// Comparison
// Logical


// 1  Assignment and Addition
  //  Asignarea unor valori unor varibile, 
  //  addition + concateneaza variabile de tip string

  let firstName = "Andrei";
  let lastName = "Duhanes"
  let age = 32;

  age += 8;
  // age = age + 8;
  age -= 8
  // age = age - 8

  // *= /= 

  console.log('Varsta mea o sa fie la un moment dat, sper', age);

  const persoana = firstName + " " + lastName + " " + age + " ani";
  console.log(persoana);


// 2 Addition ( ideea de coercitie, coercion)
  console.log('Anghel' + ' Gabriel');
  console.log(5 + 5);
  console.log(5 + '5');
  console.log(5 + 'Alexandru');
  console.log(+'10');

  
// 3 Arithmetic
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


  // Comparison (is it true or false)

  // Equals ===
  5 === 5; // true
  5 === 6; // false
  5 === 'a' // false
  'abc' === 'abc' // true

  const ten = 10;
  const tenB = 10;
  const twenty = 20;

  ten === twenty; // false
  ten === ten; // true
  ten === tenB; // true

  null === undefined; // false
  true === true; // true
  true === false; // false

  // Equals == Nu folositi!!!
  2 == '2'; // true
  0 == false; // true  ( 0 reprezinta false)
  1 == false; // false ( 1 reprezinta true)
  "" == false; // true
  undefined == null; // true

  // Falsy values ex: 0, "", undefined, null, NaN, false
  // Truthy toate celelate (numere, string-uri etc)


  // Inegalitate !== (opusul ===)
  5 !== 5; // false
  5 !== 6; // true
  ten !== tenB; // false 


  // Greater than > & Lesser than < 
  5 > 7; // false
  5 < 10; // true

  const hundred = 100;
  const thousand = 1000;

  hundred < thousand; // true
  thousand > hundred; // true

  hundred + 901 > thousand; // true
  thousand < hundred + 1000 // true

  5 <= 5; // true
  5 >= 5; // true

  'string' > 2 // false -> string este tranformat in NaN si toate NaN in comparatie cu ceva sunt false

  '3' > 2 // true -> '3' transformat in 3, si 3 > 2
  '3' < 2 // false

  // Logical operations

  // AND &&
  true && true // true
  true && false // false
  false && true // false
  false && false // false

  // OR ||
  true || false // true
  true || true // true
  false || true // true
  false || false // false

  // NOT !
  !true // false
  !false // true


  Boolean(5 && '5');