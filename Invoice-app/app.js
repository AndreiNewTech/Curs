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

const getInvoiceIdBasedOnStorage = () => {
  const id = JSON.parse(localStorage.getItem('lastInvoiceId'));
  return id && typeof parseInt(id) === 'number' ? id : null;
}

const getFacturiDinStorage = () => {
  const facturiLista = JSON.parse(localStorage.getItem('facturi'));
  return facturiLista && facturiLista.length > 0 ? facturiLista : null;
}



const loggedUser = JSON.parse(localStorage.getItem('user'));
if (!loggedUser) window.location.href = './userSign/login.html';

const navUserEl = document.querySelector('.nav-username');
const logoutEl = document.querySelector('.nav-logout');
navUserEl.textContent = loggedUser[0]?.userName;

logoutEl.addEventListener('click', handleLogout);


function handleLogout() {
  localStorage.removeItem('user');
  window.location.href = './userSign/login.html';
}



// Creeare factura

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




// Preopulare adresa principala
adresaEl.value = ADRESA_FURNIZARE.strada;
orasEl.value = ADRESA_FURNIZARE.oras;
codPostalEl.value = ADRESA_FURNIZARE.codPostal;
taraEl.value = ADRESA_FURNIZARE.tara;


const dateEl = document.querySelector('#date');
const termeneEl = document.querySelector('#termene');

const descriereEl = document.querySelector('#descriere');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validarile
  const prestatorAdresa = new Address(
    adresaEl.value, orasEl.value, codPostalEl.value, taraEl.value
  )

  const clientAdresa = new Address(
    adresaClientEl.value, orasClientEl.value, codPostalClientEl.value, taraClientEl.value
  )

  const detaliiClient = new DetaliiClient(
    numeEl.value, clientAdresa, emailEl.value
  )

  const storageFacturaId = getInvoiceIdBasedOnStorage()
  const facturaId = storageFacturaId ? storageFacturaId + 1 : 1;
  const facturaData = new Factura()
    .withClientDetails(detaliiClient)
    .withDataFactura(dateEl.value)
    .withTermeneFactura(termeneEl.value)
    .withDescriere(descriereEl.value)
    .withUserAddress(prestatorAdresa)
    .withId(facturaId)
  
    localStorage.setItem('lastInvoiceId', JSON.stringify(facturaId))


    // Salvare factura
    const facturiStorage = getFacturiDinStorage();

    localStorage.setItem('facturi', JSON.stringify(
      facturiStorage ? [...facturiStorage, facturaData] : [facturaData])
    )

})




