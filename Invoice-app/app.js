import { Factura,  DetaliiClient, Address, UnitatiFactura } from './common/factura.js';
import { ADRESA_FURNIZARE } from './common/constante.js'

/* 
    0.1 Registrare (Username, parola) 
    0.2 Logare (Username, parola) via local storage

    1. Home dashboard ce afiseaza toate facturile create de utilizator (o lista de facturi)
      - Afisare numar de facturi (text) 
        - Accesare detalii factura
      - Filtrare facturi (select)
      - Adaugare factura (buton)
      - Factura (numar factura, data, persoana si buton accesare detalii factura)

    2. Adaugare de factura / Editare (Are campuri completate)
      - Este un modal cu un formular (form) de creeare factura
      Factura:
        - Detalii prestator (utilizator) (adresa, oras, cod postal, tara, CNP)
        - Detalii client (nume, email, adresa, oras, cod postal, tara)
        - Data factura, payment terms (select)
        - Descriere facturii
        - Unitati de facturare (o lista):
          - Descriere serviciu/produs, cantitate pret = total si buton de stergere
          + Buton de adaugare unitate noua
      - Cancel / Creeare factura

    3. Accesare factura
      Este alt view 
      - Peste header avem un buton back care sa ne duca inapoi la dashboard
      - Header (status factura, buton edit, buton stergere, buton toggle platit/neplatit)
      - Afisare detalii factura (vezi factura)
*/
const loggedUser = JSON.parse(localStorage.getItem('user'));

(() => {
  if (!loggedUser) window.location.href = './userSign/login.html';
  const navUserEl = document.querySelector('.nav-username');
  navUserEl.textContent = loggedUser[0]?.userName;
})();


const formEl = document.querySelector('.creeare-factura');
const adresaEl = document.querySelector('#adresa');
const orasEl = document.querySelector('#oras');
const codPostalEl = document.querySelector('#codpostal');
const taraEl = document.querySelector('#tara');

const numeEl = document.querySelector('#nume');
const emailEl = document.querySelector('#email');
const adresaClientEl = document.querySelector('#adresa-client');
const orasClientEl = document.querySelector('#oras-client');
const codPostalClientEl = document.querySelector('#codpostal-client');
const taraClientEl = document.querySelector('#tara-client');

const dateEl = document.querySelector('#date');
const termeneEl = document.querySelector('#termene');
const descriereEl = document.querySelector('#descriere');
const logoutEl = document.querySelector('.nav-logout');


const getInvoiceIdBasedOnStorage = () => {
  const id = JSON.parse(localStorage.getItem('lastInvoiceId'));
  return id && typeof parseInt(id) === 'number' ? id : null;
};

const getFacturiDinStorage = () => {
  const facturiLista = JSON.parse(localStorage.getItem('facturi'));
  return facturiLista && facturiLista.length > 0 ? facturiLista : null;
};

const handleLogout = () => {
  localStorage.removeItem('user');
  window.location.href = './userSign/login.html';
};


const prepopulareForm = () => {
  adresaEl.value = ADRESA_FURNIZARE.strada;
  orasEl.value = ADRESA_FURNIZARE.oras;
  codPostalEl.value = ADRESA_FURNIZARE.codPostal;
  taraEl.value = ADRESA_FURNIZARE.tara;
};

const createInvoiceData = (facturaId) => {
  const prestatorAdresa = new Address(
    adresaEl.value, orasEl.value, codPostalEl.value, taraEl.value
  );

  const clientAdresa = new Address(
    adresaClientEl.value, orasClientEl.value, codPostalClientEl.value, taraClientEl.value
  );

  const detaliiClient = new DetaliiClient(
    numeEl.value, clientAdresa, emailEl.value
  );

  const facturaData = new Factura()
  .withClientDetails(detaliiClient)
  .withDataFactura(dateEl.value)
  .withTermeneFactura(termeneEl.value)
  .withDescriere(descriereEl.value)
  .withUserAddress(prestatorAdresa)
  .withId(facturaId)
  .withUserId(loggedUser[0]?.userName)

  return facturaData
}

const getTableElements = (type) => {
  switch(type) {
    case 'td':
      return  document.createElement('td');
    case 'tr':
      return  document.createElement('tr');
    case 'th':
      return  document.createElement('th');
    case 'table':
      return document.createElement('table');
  }
}

// Event listeners
logoutEl.addEventListener('click', handleLogout);
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const storageFacturaId = getInvoiceIdBasedOnStorage();
  const facturiStorage = getFacturiDinStorage();
  const facturaId = storageFacturaId ? storageFacturaId + 1 : 1;
  const factura = createInvoiceData(facturaId)
  
  localStorage.setItem('lastInvoiceId', JSON.stringify(facturaId))
  localStorage.setItem('facturi', JSON.stringify(
    facturiStorage ? [...facturiStorage, factura] : [factura])
  );

});


const renderFormListItem = () => {
  const containerEl = document.querySelector('.unitati');
  const subcontainerEl = document.createElement('div');
  containerEl.classList.add('container');
  subcontainerEl.className = 'subcontainer';
  const tableEl = getTableElements('table');

  // Create title
  const unitatiTitlu = document.createElement('h3');
  unitatiTitlu.textContent = 'Unitati';
  containerEl.appendChild(unitatiTitlu);

  // Create headings
  const headingRowEl = getTableElements('tr');
  createThElements(['Unit Name', 'Qty', 'Price', 'Total', ''], headingRowEl)
  tableEl.appendChild(headingRowEl);

  // Create rows
  const unitInputsRow = getTableElements('tr');
  unitInputsRow.id = '1';
  createRowElements(
    [
      {
        name: 'unit',
        htmltag: 'input',
        type: 'text',
        value: ''
      },
      {
        name: 'qty',
        htmltag: 'input',
        type: 'number',
        value: '0'
      },
      {
        name: 'price',
        htmltag: 'input',
        type: 'number',
        value: '0'
      },
      {
        name: 'total',
        htmltag: 'span',
        type: '',
        value: '0'
      },
      {
        name: 'remove',
        htmltag: 'span',
        type: '',
        value: 'x'
      }
    ],
    unitInputsRow
  )

  

  subcontainerEl.appendChild(tableEl);
  tableEl.appendChild(unitInputsRow);
  containerEl.appendChild(subcontainerEl);

}


function createThElements(headingNames=[], elementRowAttach) {
  headingNames.forEach(headingName => {
    const headingElem = getTableElements('th');
    headingElem.textContent = headingName;
    elementRowAttach.appendChild(headingElem);
  });
  return elementRowAttach;
}

function createRowElements(elemntListObj, elementRowAttach) {
  elemntListObj.forEach(el => {
    let inputEl;
    const tdEl = document.createElement('td');
    if (el.htmltag === 'input') {
      inputEl = document.createElement('input');
      inputEl.setAttribute('type', el.type);
      inputEl.value = el.value ;
    }
    if (el.htmltag === 'span') {
      inputEl = document.createElement('span');
      inputEl.textContent = el.value;
    }
    tdEl.appendChild(inputEl);
    tdEl.setAttribute('name', el.name)
    elementRowAttach.appendChild(tdEl);
  });

  addEventListnersToInputRows(elementRowAttach);
  return elementRowAttach;


}

function addEventListnersToInputRows(unitInputsRow) {
  const princeInputEl = unitInputsRow.querySelector("[name='price']");
  const quantityEl = unitInputsRow.querySelector("[name='qty'] input");
  console.log(quantityEl, 'Test')
  const totalValueEl = unitInputsRow.querySelector("[name='total']")
  princeInputEl.addEventListener('change', val => {
    totalValueEl.textContent = parseInt(val.target.value) * parseInt(quantityEl.value)
  })

}



renderFormListItem()


// Preopulare adresa principala
prepopulareForm();




