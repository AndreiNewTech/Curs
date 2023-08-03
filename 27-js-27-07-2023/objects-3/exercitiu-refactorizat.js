
function Librarie(id, angajati, carti, adresa) {
  this.id = id;
  this.angajati = angajati;
  this.carti = carti;
  this.adresa = adresa;
}

function Angajat(id, nume, varsta, adresa) {
  this.id = id;
  this.nume = nume;
  this.varsta = varsta;
  this.adresa = adresa
}

function Carte(id, titlu, autor, gen) {
  this.id = id;
  this.titlu = titlu;
  this.autor = autor;
  this.gen = gen;
}

function Adresa(id, strada, numar, oras) {
  this.id = id;
  this.strada = strada;
  this.numar = numar;
  this.oras = oras;
}


// Helper function

// function expression
const getUppercaseRandom = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// sau arrow function
const getRandomNumberBasedOnArrLength = (arrLength) => Math.floor(Math.random() * arrLength.length);

function createUnqiueId() {
  // String.fromCharCode(89) -> o litera mare intre 65-90 cu Math.random
  // O cifra cu math Random pana la 100000;
  // #A15243B
  const num = Math.floor(Math.random() * 100000);
  const firstLetterRandom = getUppercaseRandom();
  const secondLetterRandom = getUppercaseRandom();

  return '#'+ firstLetterRandom + num + secondLetterRandom;
}


function generateAngajatiLista(numarDeAngajati) {
  const listaAngajati = [];
  let counter = numarDeAngajati;

  const listPrenume = ['Andrei', 'Alex', 'Ionut', 'Maria', 'Dana', 'Traian', 'Gabriel', 'Laurentiu', 'Alexandra'];
  const listaNume = ['Popescu', 'Gavrilescu', 'Iliescu', 'Basescu', 'Constantinescu', 'Grigorescu', 'Enescu'];
  while(counter > 0) {
    /// logica lupului :D
    const randomNumberListPrenume =  getRandomNumberBasedOnArrLength(listPrenume);
    const prenume = listPrenume[randomNumberListPrenume];
    const randomNumberListNume =  getRandomNumberBasedOnArrLength(listaNume)
    const nume = listaNume[randomNumberListNume];
    const numeIntreg = nume + ' ' + prenume;

    const varsta = Math.floor(Math.random() * (65-18 + 1) + 18);
    const adresa = generateAdress();
    const id = createUnqiueId();

    const angajat = new Angajat(id, numeIntreg, varsta, adresa);
    listaAngajati.push(angajat);
    
    counter--;
  }
  // Sa returneze o lista de tip obiect Angajat
  return listaAngajati
}


function generateCartiLista(numarDeCarti, numeDeStart) {
    const cartiList = [];
    const autoriList = ['Mihai Eminescu','Ion Creanga', 'Petre Ispirescu', 'Shakespere', 'Lev Tolstoi', 'Feodor Dostoievski', 'Ernest Hemmingway'];
    const genCarteList = ['poezie', 'nuvela', 'roman', 'poem', 'basm'];
    const cuvinteLista = ['Natura', 'Univers', 'Iubire', 'Stiinta', 'Dor'];
    let counter = numarDeCarti;

    while(counter > 0) {
      const randomCuvinteListNumber =  getRandomNumberBasedOnArrLength(cuvinteLista)
      const randomGenCarteListNumber =  getRandomNumberBasedOnArrLength(genCarteList)
      const randomAutorListListNumber =  getRandomNumberBasedOnArrLength(autoriList)

      const autor = autoriList[randomAutorListListNumber];
      const gen = genCarteList[randomGenCarteListNumber];
      const titlu = cuvinteLista[randomCuvinteListNumber] + ' ' + numeDeStart;
      const id = createUnqiueId();

      const carte = new Carte(id, titlu, autor, gen);
      cartiList.push(carte);
      // la fel cu counter--
      counter = counter - 1;
    }

    return cartiList;
}

function generateAdress() {
    const listaStrazi = ['Str Mihai Viteazu', 'Str Nicolae Balcescu', 'Str Stefan cel Mare', 'Str Bogdan Voda', 'Str Tudor Vladimirescu'];
    const randomNumberStraziIndex = getRandomNumberBasedOnArrLength(listaStrazi)
    const listaOrase = ['Timisoare', 'Bucuresti', 'Iasi', 'Brasov', 'Constanta', 'Braila', 'Cluj-Napoca', 'Baia Mare'];
    const randomNumberListaOraseIndex =  getRandomNumberBasedOnArrLength(listaOrase)
    const randomStreetNumber = Math.floor(Math.random() * 100);
    const id = createUnqiueId();
    const adresa = new Adresa(id, listaStrazi[randomNumberStraziIndex], randomStreetNumber, listaOrase[randomNumberListaOraseIndex]);
    
    return adresa;
}

const librarie = new Librarie(createUnqiueId(), generateAngajatiLista(10), generateCartiLista(1000, 'Fermecata'), generateAdress());
const librarie2 = new Librarie(createUnqiueId(), generateAngajatiLista(5), generateCartiLista(500, 'Colorata'), generateAdress());

const listaLibrarii = [librarie, librarie2];

console.log(listaLibrarii);