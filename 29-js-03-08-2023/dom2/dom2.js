
//1. Selectare si vizualizare

document.querySelectorAll('.clasa-mea p'); // lista
document.querySelector('#my-id .heading div') // singur

document.getElementsByClassName('clasa-mea'); // lista
document.getElementById('#id-meu'); // singur
document.getElementsByTagName('section') // lista


// Incercam sa selectam section cards 
const cardsContainerElement1 = document.getElementsByTagName('section');
const cardsContainerElement2 = document.getElementsByClassName('cards-container');
console.log(cardsContainerElement1[0], cardsContainerElement2[0]);


const cardsContainerElement3 = document.querySelector('.cards-container');
console.log(cardsContainerElement3);

const cardsContainerElement4 = document.querySelectorAll('.cards-container');
console.log(cardsContainerElement4[0]);

// Un alt exemplu
const bodyElement = document.getElementsByTagName('body')[0];
const cardsContainerElement5 = bodyElement.querySelectorAll('.cards-container');


// Selectare texte din card
const cardsTitluElement = document.querySelector('h2'); 
const cardsDescriereElement = document.getElementsByClassName('cards__descriere')[0];
const cardsLimbajeTitleElement = document.querySelector('h3');

const cardsLimbajeListElements1 = document.querySelectorAll('.cards__limbaje li');
const cardsLimbajeListElements2 = document.getElementsByClassName('cards__limbaje')[0].getElementsByTagName('li');

const cardsLimbajeElements = document.getElementsByClassName('cards__limbaje')[0];
const cardsLimbajeListElements3 = cardsLimbajeElements.getElementsByTagName('li');

console.log(cardsTitluElement, cardsDescriereElement, cardsLimbajeTitleElement, cardsLimbajeListElements2);

console.dir(cardsContainerElement5[0]);

function describeUserDetailsFromHtmlElements() {
  const textCardsTitluElement = cardsTitluElement.textContent;
  const textCardsDescriereElement = cardsDescriereElement.textContent;
  const textCardsLimbajeTitleElement = cardsLimbajeTitleElement.textContent;
  const cardsLimbajeListElementsArr = Array.from(cardsLimbajeListElements1);
  const limbajeListaString = cardsLimbajeListElementsArr.map(el => el.textContent).reduce(function(prev, curr) {
    if (!prev) {
      return curr;
    } else {
      return prev + ', ' + curr;
    }
  });

  const finalMessage = 'Unul din trainerii Newtech este ' + textCardsTitluElement 
    + '.Despre el: ' + textCardsDescriereElement + textCardsLimbajeTitleElement + 
    ' folosite sunt: ' + limbajeListaString
   
  return finalMessage;
};


const cardsFooterElement = document.getElementsByClassName('cards-footer')[0];
// Accesam clasa elementului cards-footer
console.log(cardsFooterElement.className);
console.log(cardsFooterElement.classList);

cardsFooterElement.innerHTML = describeUserDetailsFromHtmlElements();

// Accesam marimea html-ului
console.log(cardsFooterElement.offsetWidth);
console.log(cardsFooterElement.offsetHeight);

// Modificam stilul via style
cardsFooterElement.style.color = 'Grey';

// Modificam adaugand o clasa
cardsFooterElement.classList.add('cards-footer--small-text');

// Ex. adauga width sa fie egal cu width-ul de la cards
const cardsElement = document.getElementById('first-card');
const cardElementWidth = cardsElement.offsetWidth;

cardsFooterElement.style.width = cardElementWidth + 'px';

console.log(cardElementWidth);

// Accesare parent, sibling, si child nodes
// parent
const cardsElementParent = cardsElement.parentNode;
// sibling (frati)
const cardsElementFrateDupa = cardsElement.nextElementSibling;
const cardsElementFrateInainte = cardsElement.previousElementSibling;
// child nodes vs children
const cardsElementsChildNodes = cardsElement.childNodes;
const cardsElementsChildren = cardsElement.children;


