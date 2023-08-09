
//  Creare de elemente si inserare

// Adaugam un element de heading 1 in body

const heading1Element = document.createElement('h1');
const bodyElement = document.body;

heading1Element.textContent = 'Heading 1';

bodyElement.appendChild(heading1Element);

// Adaugare heading 2

const heading2Element = document.createElement('h2');

bodyElement.append(heading2Element);

heading2Element.textContent = 'Heanding 2';

console.log(heading1Element);

// Creare lista portofoliu

const languagesListElement = document.createElement('ul');

const languagesList = ['Html', 'Css', 'Js'];

languagesList.forEach((el, index) => {
  const listItemElement = document.createElement('li');
  listItemElement.textContent = index + 1 + ' ' + el;
  languagesListElement.appendChild(listItemElement);
});

console.log(languagesListElement);

bodyElement.insertBefore(languagesListElement, heading2Element);
heading2Element.before(languagesListElement);

// bodyElement.appendChild(languagesListElement);

// Vrem sa atasam intre heading 1 si heading 2;

