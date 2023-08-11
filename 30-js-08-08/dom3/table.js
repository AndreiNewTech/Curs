
const listaLimbaje = [
  {
    denumire: 'Html',
    dificultate: 1
  },
  {
    denumire: 'Css',
    dificultate: 2
  },
  {
    denumire: 'Js',
    dificultate: 4
  },
  {
    denumire: 'Typescript',
    dificultate: 5
  },
  {
    denumire: 'Angular',
    dificultate: 6
  },
];

// helper functions 
const adaugareStyleTd = (tdElement) => {
  tdElement.style.border = '1px solid #dddddd';
  tdElement.style.textAlign = 'left';
  tdElement.style.padding = '18px';
}

// index limbaj dificultate
const containerElement = document.getElementById('container');

const tableElement = document.createElement('table');

const trHeadElement = document.createElement('tr');
const thElement = document.createElement('th');
const thElement1 = document.createElement('th');
const thElement2 = document.createElement('th');
const thElement3 = document.createElement('th');

thElement.textContent = 'Index';
thElement1.textContent = 'Limbaj';
thElement2.textContent = 'Dificultate';
thElement3.textContent = 'Stergere';

tableElement.style.fontFamily = 'arial, sans-serif';
tableElement.style.borderCollapse = 'collapse';
tableElement.style.width = '100%';

trHeadElement.appendChild(thElement);
trHeadElement.appendChild(thElement1);
trHeadElement.appendChild(thElement2);
trHeadElement.appendChild(thElement3);

tableElement.appendChild(trHeadElement);
containerElement.appendChild(tableElement);

// Adaugam containerul jos
document.body.appendChild(containerElement);

listaLimbaje.forEach((limbajObj, index) => {
  addNewElementToTable(limbajObj, ++index);
});


function addNewElementToTable(obj, index) {
  // Appenduirea in tabel
  const trElement = document.createElement('tr');
  // varianta 2 de stergere
  // trElement.addEventListener('click', function(event) {
  //   // console.log(event.target);
  //   this.remove();
  // })
  
  // Daca row-ul este impar
  if (index % 2 !== 0) {
    trElement.style.background = 'lightgrey';
  }

  const tdIndexElement = document.createElement('td');
  tdIndexElement.textContent = index;
  adaugareStyleTd(tdIndexElement);

  trElement.appendChild(tdIndexElement);

  for (const prop in obj) {
    const colRowElement = document.createElement('td');
    adaugareStyleTd(colRowElement);
    colRowElement.textContent = obj[prop];
    trElement.appendChild(colRowElement);
  }

  tableElement.appendChild(trElement);

  const tdDeleteElement = document.createElement('td');
  adaugareStyleTd(tdDeleteElement);
  tdDeleteElement.innerHTML= '<div class="close" style="text-align:center; cursor:pointer">X</div>';


  tdDeleteElement.addEventListener('click', function(e) {
    const tdEl = e.target.parentElement;
    const trEl = tdEl.parentElement;
    trEl.remove();
  })
  

  trElement.appendChild(tdDeleteElement);
  


}


function addNewLanguage(obj) {
  listaLimbaje.push(obj);
  addNewElementToTable(obj, listaLimbaje.length);
}


// EVENT Listeners:
// click
// hover
// focus
// tabbing
// etc

function onClickEvent() {
  // console.log('Click');
}
function onClickEvent1() {
  console.log('Click1');
}

function onHoverEvent() {
  console.log('Weeeeeeee');
}

containerElement.addEventListener('click', onClickEvent);
containerElement.addEventListener('click', onClickEvent1);

// Inalturarea unui event listener
containerElement.removeEventListener('click', onClickEvent1);

// containerElement.addEventListener('mouseover', onHoverEvent);

const addLanguageElement = document.createElement('button');

addLanguageElement.addEventListener('click', () => {
  const denumire = prompt('Denumire')
  const dificultate = parseFloat(prompt('Dificultate'));
  const languageObj = {
    denumire: denumire,
    dificultate: dificultate
  }
  addNewLanguage(languageObj);
});


addLanguageElement.textContent = 'Adauga';
document.body.appendChild(addLanguageElement);


// varianta 1 de stergere 

// containerElement.addEventListener('click', function(event) {
//   const rowColElement = event.target;
//   rowColElement.parentElement.remove();
// })



