class Biblioteca {
  adresa = '';
  listaCarti = [];
  angajati = [];

  listeazaAdresa() {
    console.log(`${this.adresa} este adresa bibliotecii`)
  }
  // constructor(adresa, listaCarti, angajati) {
  //   this.adresa = adresa;
  //   this.listaCarti = listaCarti;
  //   this.angajati = angajati;
  // }
}

const bibliotecaCluj = new Biblioteca();
const bibliotecaBucuresti = new Biblioteca();

bibliotecaCluj.adresa = 'Strada din Cluj';
bibliotecaBucuresti.adresa = 'Strada din Bucuresti';


bibliotecaCluj.listeazaAdresa();
bibliotecaBucuresti.listeazaAdresa();

class Timpul {
  constructor(timezone, tara) {
    this.timezone = timezone;
    this.tara = tara;
  }

  get getElemetClassName() {
    return this.tara.split(" ").join("");
  }

  getTime() {
    const dateTime = new Date();
    const options = { timeZone: this.timezone, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const newDateTime = dateTime.toLocaleTimeString('en-US', options);
    return `Timpul si ora din ${this.tara} este ${newDateTime}`
  }

  #getTimeInZone(timeZone){
    const now = new Date();
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', options).split(':');
    return Number(timeString[0]) + Number(timeString[1]) / 60 + Number(timeString[2]) / 3600;
  };
  
  createHtmlEl(ref) {
    const divElement = document.createElement('div');
    divElement.className = `container-${this.getElemetClassName}`;

    const titleEl = document.createElement('h1');
    titleEl.textContent = this.tara;

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = this.getTime();

    divElement.appendChild(titleEl);
    divElement.appendChild(descriptionEl);

    ref.appendChild(divElement)
  }

  compareTimeDifferenceWithCountry(compareCountry) {
    const getTime1 =  this.#getTimeInZone(this.timezone)
    const getTime2 =  this.#getTimeInZone(compareCountry)
    const diffHours = getTime1 - getTime2;
    return `${Math.abs(Math.trunc(diffHours))} hours difference with ${compareCountry}`;
  }

  createTimeDifferenceEl(compareCountry) {
    const createTimeEl = document.createElement('p');
    createTimeEl.textContent = this.compareTimeDifferenceWithCountry(compareCountry);
    const ref = document.getElementsByClassName(`container-${this.getElemetClassName}`)[0];
    ref.appendChild(createTimeEl);
  }
}

const bodyEl = document.body;
  
const londonTimeObj = new Timpul('Europe/London', 'United Kingdom');
const losAngelesTimeObj = new Timpul('America/Los_Angeles', 'California');

londonTimeObj.createHtmlEl(bodyEl);
losAngelesTimeObj.createHtmlEl(bodyEl);

londonTimeObj.compareTimeDifferenceWithCountry('America/Los_Angeles');
londonTimeObj.createTimeDifferenceEl('Europe/Bucharest');

// Sets and Dictonaries
// -> new Set([1,2,3,3,5] ) -> [1,2,3,5]