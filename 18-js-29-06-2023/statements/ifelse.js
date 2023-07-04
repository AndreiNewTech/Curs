  // Logical operations

  // Falsy values ex: 0, "", undefined, null, NaN, false
  // Truthy toate celelate (numere, string-uri etc)

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

  Boolean(5 && '5'); // true
  Boolean(true || false); // true
  Boolean(10 && 6) // true;
  Boolean(0 && 6) // false, 0 falsy value 6 truthy value

  Boolean((10 > 5) || (5 === 5) && (100 === 1001)); // true
  Boolean(((10 > 5) || (5 === 5)) && (100 === 1001)) // false
  Boolean(true || true) // true
  Boolean('Javascript' && 'Typescript'); // true
  !Boolean(0 || null); // true 


  // Nu intra in if, deoarece x este un falsy value
  const x = '';
  if ((5 <= 5) && x) {
    console.log('True');
  }

  // Intra in if, deoarece y este un truthy value
  const y = 'Value';
  if ((5 <= 5) && y) {
    console.log('True');
  }

  // const nume = prompt('Nume');
  const nume = '';

  if (nume === 'Andrei') {
    const numeFamilie = 'Duhanes';
    console.log(nume + ' ' + numeFamilie);
  }

  if (nume === 'Alex') {
    const numeFamilie = 'Tanasoiu';
    console.log(nume + ' ' + numeFamilie);
  } else {
    console.log('Nu este egal cu Alex')
  }

  if (nume === 'Ionut') {
    const numeFamilie = 'Mares';
    console.log(nume + ' ' + numeFamilie);
  } else if (nume !== 'Andrei' &&  nume !== 'Alex') {
    console.log(nume + ' nu are nume de familie');
  }

  if (!nume ) {
    console.log("Not a corect name whatsoever");
  }


  const value = 'String';
  // Truthy
  // const value = 123;
  // const value = '0';
  // const value = true;

  //  Falsy
  // const value = 0;
  // const value = '';
  // const value = undefined;
  // const value = null;
  // const value = false; 
  // let value;

  if (value) {
    console.log('Truthy', value);
  } else {
    console.log('Falsy', value);
  }

  // Un mic programel care sa afiseze daca o persoana este majora sau minora



