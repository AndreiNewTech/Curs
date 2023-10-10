

class UnitatiFactura {
  constructor(nume, cantitate, pret) {
    this.nume = nume;
    this.cantitate = cantitate;
    this.pret = pret;
  }
}


class DetaliiClient {
  constructor(nume, adresa, email) {
    this.nume = nume;
    this.adresa = adresa;
    this.email = email;
  }
}

class AdresaUser {
  constructor() {
    userAddress = 'Aleea Bucuresti';
    city = 'Cluj';
    postcode = '23124';
    tara = 'Romania'
    cnp = '19022233322';
  }
}

class Invoice {
  // Builder pattern
  constructor() {
    // user details
    userAddress = null;
    // client details
    clientDetails = null;
    // detalii factura
    dataFactura = new Date();
    termeniFactura = '';
    descriere = '';
    // Unitati factura
    unitatiFactura = [];
  }

  withUserAddress(userAddress) {
    this.userAddress = userAddress;
    return this;
  }

  withClientDetails(clientDetails) {
    this.clientDetails = clientDetails;
    return this;
  }

  withDataFactura(dataFactura) {
    this.dataFactura = dataFactura;
    return this;
  }

  withTermeniFactura(termeniFactura) {
    this.termeniFactura = termeniFactura;
    return this;
  }

  withDescriere(descriere) {
    this.descriere = descriere;
    return this;
  }

  withUnitatiFactura(unitatiFactura) {
    this.unitatiFactura = unitatiFactura;
    return this;
  }

  build() {
    return {
      userAddress: this.userAddress,
      clientDetails: this.clientDetails,
      dataFactura: this.dataFactura,
      termeniFactura: this.termeniFactura,
      descriere: this.descriere,
      unitattiFactura: this.unitatiFactura
    }
  
  }
}

class Pers {
  nume = '';
  prenume = '';
  constructor() {
  }

  withNume(nume) {
    this.nume = nume;
    return this;
  }

  withPrenume(prenume) {
    this.prenume = prenume;
    return this;
  }
  
  build() {
    return {
      nume: this.nume,
      prenume: this.prenume
    }
  }
}

const pers = new Pers().withPrenume('Andrei').withNume('Duh').build();
console.log(pers);


