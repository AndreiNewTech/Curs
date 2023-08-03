function Scoala(adresa, denumire, profesori, elevi, anagajatiAuxiliari, clase, saliDeClase) {
  this.adresa = adresa;
  this.denumire = denumire;
  this.profesori = profesori;
  this.elevi = elevi;
  this.anagajatiAuxiliari = anagajatiAuxiliari;
  this.clase = clase;
  this.saliDeClase = saliDeClase;
}


Scoala.prototype.logAddress = function() {
  console.log(this.adresa.strada + ' ' + this.adresa.numar + ' ' + this.adresa.oras);
}


Scoala.prototype.logEleviSiProfesori = function(denumClasaStr) {
  const numeElevi = [];
  const numeProfesori = [];

  this.clase.forEach(clasa => {
    if (clasa.denumireClasa === denumClasaStr) {
      clasa.elevi.forEach(elev => {
        const numeSiVarsta = elev.nume + ' ' + elev.prenume + ', varsta:' + elev.varsta + ' ani';
        numeElevi.push(numeSiVarsta);
        // return;
      })
    }

  });
  this.profesori.forEach(profesor => {
    profesor.clase.forEach(profClasa => {
      if (profClasa.denumireClasa === denumClasaStr) {
        const numeSiVarsta = profesor.nume + ' ' + profesor.prenume + ', disciplina:' + profesor.disciplina;
        numeProfesori.push(numeSiVarsta);
      }
    })
  })
}


function Adresa(strada, numar, oras) {
  this.strada = strada;
  this.numar = numar;
  this.oras = oras;
}


function Profesor(id, nume, prenume, disciplina, clase) {
  this.id = id;
  this.nume = nume;
  this.prenume = prenume;
  this.disciplina = disciplina;
  this.clase = clase;
}

function Elev(id, nume, prenume, varsta, clasa) {
  this.id = id;
  this.nume = nume;
  this.prenume = prenume;
  this.varsta = varsta;
  this.clasa = clasa;
}


Elev.prototype.addClasa = function(clasa) {
  this.clasa = clasa;
}

function AngajatAuxiliar(id, nume, prenume, rol) {
  this.id = id;
  this.nume = nume;
  this.prenume = prenume;
  this.rol = rol;
}

function Clasa(id, denumireClasa, elevi, salaDeClasa) {
  this.id = id;
  this.denumireClasa = denumireClasa;
  this.elevi = elevi;
  this.salaDeClasa = salaDeClasa;
}

function SalaDeClasa(id, denumire, clasa) {
  this.id = id;
  this.denumire = denumire;
  this.clasa = clasa
}

SalaDeClasa.prototype.addClasa = function (clasa)  {
  this.clasa = clasa;
}


function createUniqueId() {
  const num = Math.floor(Math.random() * 100000);
  const firstLetterRandom = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const secondLetterRandom = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  return '#' + firstLetterRandom + num + secondLetterRandom + '#';
}

function generateClase(numarClase, elevi, saliDeClase) {
  const denumireClasa = ['9A', '9B', '9C', '10A', '10B', '10C', '11A', '11B', '11C', '12A', '12B', '12C'];
  const clase = [];

  for (let i = 0; i < numarClase; i++) {
    const id = createUniqueId();
    const numeClasa = denumireClasa[i];
    const salaDeClasa = saliDeClase[i];
    const eleviClasa = elevi.slice(i * 20, (i * 20) + 20);      
    const clasa = new Clasa(id, numeClasa, eleviClasa, salaDeClasa);
    clase.push(clasa);
  }

  return clase;
}


function generateSaliDeClase(numarSaliDeClase) {
  const denumireSalaClasa = ['Sala 1 Parter', 'Sala 2 Parter', 'Sala 3 Parter', 'Sala 4 Parter', 'Laborator 1 Etaj 1', 'Laborator 2 Etaj 1', 'Laborator 3 Etaj 1', 'Laborator 4 Etaj 1', 'Sala 1 Etaj 2', 'Sala 2 Etaj 2', 'Sala 3 Etaj 2', 'Sala 4 Etaj 2'];
  const saliDeClase = [];    

  for (let i = 0; i < numarSaliDeClase; i++) {
      const id = createUniqueId();
      const numeSala = denumireSalaClasa[Math.floor(Math.random() * denumireSalaClasa.length)];
      
      const salaDeClasa = new SalaDeClasa(id, numeSala);
      saliDeClase.push(salaDeClasa);
      }
  
      return saliDeClase;
}
 

function generateElevi(numarEleviPerClasa) {
  const numeElev = ['Popescu', 'Georgescu', 'Ionescu', 'Vasilescu', 'Cosmescu', 'Panaitescu', 'Marinescu', 'Dumbravescu'];
  const prenumeElev = ['Vasilica', 'Georgica', 'Stefan', 'Ion', 'Maria', 'Daria', 'Gheorghita', 'Dumitru'];
  const elevi = [];

  for (let i = 0; i < numarEleviPerClasa; i++) {
    const id = createUniqueId();
    const nume = numeElev[Math.floor(Math.random() * numeElev.length)];
    const prenume = prenumeElev[Math.floor(Math.random() * prenumeElev.length)];
    const varstaElev = Math.floor(Math.random() * 6) + 15;
    elevi.push(new Elev(id, nume, prenume, varstaElev));
  }
  
  return elevi;
}


function generateProfesori(numarProfesori, clase) {
  const numeProfesor = ['Iliescu', 'Basescu', 'Craciunescu', 'Cosminescu', 'Ionescu', 'Georgescu', 'Vasiliu', 'Preda', 'Marin', 'Stanciu', 'Popovici', 'Mocanu', 'Coada', 'Grigore'];
  const prenumeProfesor = ['Vasile', 'Ion', 'Petru', 'Stefan', 'Diana', 'Andreea', 'Cosmin', 'Crina', 'Carmen', 'Alin', 'Viorel', 'Alina', 'Dana', 'Anca'];
  const disciplina = ['Matematica', 'Lb. Romana', 'Informatica', 'Chimie', 'Fizica', 'Biologie', 'Istorie', 'Geografie', 'Lb. Engleza', 'Desen'];
  const profesori = [];

  for (let i = 0; i < numarProfesori; i++) {
    const id = createUniqueId();
    const nume = numeProfesor[Math.floor(Math.random() * numeProfesor.length)];
    const prenume = prenumeProfesor[Math.floor(Math.random() * prenumeProfesor.length)];
    const numeDisciplina = disciplina[Math.floor(Math.random() * disciplina.length)];
    const numarClase = Math.floor(Math.random() * 4) + 1;
    const claseProfesor = [];

    for (let j = 0; j < numarClase; j++) {
      const clasa = clase[Math.floor(Math.random() * clase.length)];
      claseProfesor.push(clasa);
    }

    profesori.push(new Profesor(id, nume, prenume, numeDisciplina, claseProfesor));
  }

  return profesori;
}


function generateAngajatiAux(numarAngajatiAux) {
  const listaNume = ['Mateescu', 'Cornescu', 'Turcu', 'Balcescu', 'Murgoci', 'Cerna'];
  const listaPrenume = ['Vlad', 'Marin', 'Oana', 'Ioana', 'Sabina', 'Sorin'];
  const listaRol = ['Contabil', 'Psihoterapeut', 'Asistent', 'Portar'];
  const angajatiAux = [];

  for (let i = 0; i <= numarAngajatiAux; i++) {
    const id = createUniqueId();
    const nume = listaNume[Math.floor(Math.random() * listaNume.length)];
    const prenume = listaPrenume[Math.floor(Math.random() * listaPrenume.length)];
    const rol = listaRol[Math.floor(Math.random() * listaRol.length)];
    angajatiAux.push(new AngajatAuxiliar(id, nume, prenume, rol));
  }

  return angajatiAux;
}  
 
const adresa = new Adresa('Calea Galati', 323, 'Braila'); 
const titlu = 'Liceul Teoretic Gh M Murgoci';

const elevi = generateElevi(150);
const saliDeClase = generateSaliDeClase(12); 

const clase = generateClase(12, elevi, saliDeClase); 


console.log(clase);

saliDeClase.forEach(element => {
    const clasaGasita = clase.find(clasa => {
      return element.id === clasa.salaDeClasa.id
    });
    element.clasa = clasaGasita;
});

elevi.forEach(element => {
  const clasa = clase.find(clasa => {
    return clasa.elevi.find(elev => {
      return elev.id === element.id;
    });
  });

  element.addClasa(clasa);
});


const profesori = generateProfesori(14, clase);
const angajatiAux = generateAngajatiAux(6);

const adresa2 = new Adresa('Calea Bucovinei', 30, 'Radauti'); 

const scoala = new Scoala(adresa, titlu, profesori, elevi, angajatiAux,clase, saliDeClase);
const scoala2 = new Scoala(adresa2, titlu, profesori, elevi, angajatiAux,clase, saliDeClase);


// scoala.logAddress = function() {
//   console.log(this.adresa.strada, + this.adresa.numar + this.adresa.oras)
// }

scoala.logAddress();
scoala2.logAddress()


scoala.logEleviSiProfesori('10C');

console.log([scoala, scoala2]);