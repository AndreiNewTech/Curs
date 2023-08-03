// Accesare elemente

// -> incepe prin document 

// selectare singulara
// Fiecare element are (ca si un obiect) acces la proprietati si metode 
// prin care ii poti modifica starea, sau accesa detalii despre
const headerElement = document.getElementById('header-id');
const childrenOfHeaderElement = headerElement.children;
const navListElement = document.querySelector('.nav-list a')

// slectare multipla -> o sa fie o lista care poate fi accesata prin indexare
// returneaza o lista care seamana cu un array dar nu este chiar un array,

// Collection Html
const divElements = document.getElementsByTagName('div');

// NodeList 
const productCardsElements = document.querySelectorAll('.product-card');

// Collection Html
const productCardsElements2 =  document.getElementsByClassName('product-card');

// poate fi transformat in array prin Array.from
const divElementsArr = Array.from(divElements);

const productCardsElementsArr = Array.from(productCardsElements);

