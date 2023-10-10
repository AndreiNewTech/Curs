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
if (!loggedUser) window.location.href = './login.html';


const navUserEl = document.querySelector('.nav-user');
console.log(loggedUser);

navUserEl.textContent = loggedUser[0].userName;




