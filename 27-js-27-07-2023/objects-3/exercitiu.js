
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

function createUnqiueId() {
  // String.fromCharCode(89) -> o litera mare intre 65-90 cu Math.random
  // O cifra cu math Random pana la 100000;
  // #A15243B
  const num = Math.floor(Math.random() * 100000);
  const firstLetterRandom = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const secondLetterRandom = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

  return '#'+ firstLetterRandom + num + secondLetterRandom;
}


function generateAngajatiLista(numarDeAngajati) {
  const listaAngajati = [];
  let counter = numarDeAngajati;

  const listPrenume = ['Andrei', 'Alex', 'Ionut', 'Maria', 'Dana', 'Traian', 'Gabriel', 'Laurentiu', 'Alexandra'];
  const listaNume = ['Popescu', 'Gavrilescu', 'Iliescu', 'Basescu', 'Constantinescu', 'Grigorescu', 'Enescu'];
  while(counter > 0) {
    /// logica lupului :D
    const randomNumberListPrenume =  Math.floor(Math.random() * listPrenume.length);
    const prenume = listPrenume[randomNumberListPrenume];
    const randomNumberListNume =  Math.floor(Math.random() * listaNume.length);
    const nume = listaNume[randomNumberListNume];
    const numeIntreg = nume + ' ' + prenume
    const varsta = Math.floor(Math.random() * (65-18 + 1) + 18);
    const adresa = generateAdress();
    const id = createUnqiueId();

    const angajat = new Angajat(id,numeIntreg,varsta,adresa);
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
    const listaCuvinte = ['Natura', 'Univers', 'Iubire', 'Stiinta', 'Dor'];

    let counter = numarDeCarti;

    while(counter > 0) {
      const randomCuvinteListNumber =  Math.floor(Math.random() * listaCuvinte.length);
      const randomGenCarteListNumber =  Math.floor(Math.random() * genCarteList.length);
      const randomAutorListListNumber =  Math.floor(Math.random() * autoriList.length);

      const autor = autoriList[randomAutorListListNumber];
      const gen = genCarteList[randomGenCarteListNumber];
      const titlu = listaCuvinte[randomCuvinteListNumber] + ' ' + numeDeStart;
      const id = createUnqiueId();

      const carte = new Carte(id, titlu, autor, gen)
      cartiList.push(carte);
      // la fel cu counter--
      counter = counter - 1;
    }

    return cartiList;
}

console.log(generateCartiLista(10, 'Minunata'));

function generateAdress() {
    const listaStrazi = ['Str Mihai Viteazu', 'Str Nicolae Balcescu', 'Str Stefan cel Mare', 'Str Bogdan Voda', 'Str Tudor Vladimirescu'];
    const randomNumberStraziIndex = Math.floor(Math.random() * listaStrazi.length);    
    const listaOrase = ['Timisoare', 'Bucuresti', 'Iasi', 'Brasov', 'Constanta', 'Braila', 'Cluj-Napoca', 'Baia Mare'];
    const randomNumberListaOraseIndex =  Math.floor(Math.random() * listaOrase.length);
    const randomStreetNumber = Math.floor(Math.random() * 100);
    const id = createUnqiueId();
    const adresa = new Adresa(id, listaStrazi[randomNumberStraziIndex], randomStreetNumber, listaOrase[randomNumberListaOraseIndex]);
    // const adresa = {
    //   id: id,
    //   strada: listaStrazi[randomNumberStraziIndex],
    //   numar: randomStreetNumber,
    //   oras: listaOrase[randomNumberListaOraseIndex],
    // }
    return adresa;
}


const librarie = new Librarie(createUnqiueId(), generateAngajatiLista(10), generateCartiLista(1000, 'Fermecata'), generateAdress());
console.log(librarie);
//