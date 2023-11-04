

class UnitatiFactura {
  constructor(nume, cantitate, pret) {
    this.nume = nume;
    this.cantitate = cantitate;
    this.pret = pret;
  }

  getNume() {
    return this.nume;
  }

  getCantitate() {
    return this.cantitate;
  }

  getPret() {
    return this.pret;
  }

}

class Address {
  constructor(adresa, oras, codPostal, tara) {
    this.adresa = adresa;
    this.oras = oras;
    this.codPostal = codPostal;
    this.tara = tara;
  }
  getAdresa() {
    return this.adresa;
  }

  getOras() {
    return this.oras;
  }

  getCodPosta() {
    return this.codPostal;
  }

  getTara() {
    return this.tara
  }
}


class DetaliiClient {
  constructor(nume, adresa, email) {
    this.nume = nume;
    this.email = email;
    this.adresa = adresa;
  }

  getNume() {
    return this.nume;
  }
  getEmail() {
    return this.email;
  }
  getAdresa() {
    return this.adresa;
  }
}


class Factura {
  // Builder pattern
  constructor() {
    this.userId = ''

    this.idFactura = '' // sa persiste numarul faacturii prin localStorage;
    // user details
    this.userAddress = null;
    // client details
    this.clientDetails = null;
    // detalii factura
    this.dataFactura = new Date();
    this.termeneFactura = '';
    this.descriere = '';
    // Unitati factura
    this.unitatiFactura = [];
  }

  withUserAddress(userAddress) {
    this.userAddress = userAddress;
    return this;
  }

  withId(id) {
    this.idFactura = id;
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

  withTermeneFactura(termeneFactura) {
    this.termeneFactura = termeneFactura;
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

  withUserId(userId) {
    this.userId = userId;
    return this;
  }
}


export {
  Factura, DetaliiClient, Address, UnitatiFactura
}


