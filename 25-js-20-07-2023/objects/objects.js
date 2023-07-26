
// 1. Creare object

// property : value pairs
// values can be anyhting

const userDetails = {
  userName: 'Andrei',
  userSurname: 'Duhanes',
  userAge: 32,
  limbajeDeProgramare: ['Html', 'Javascript', 'Css'],
  consoleAge: function() {
    console.log(this.userAgem);
  },

  isPersonAbove18: function(age) {
    if (age > 18) {
      return true;
    } else {
      return false;
    }
  },

  isCurrentUserAbove18: function() {
    return this.isPersonAbove18(this.userAge)
  },

  lastDogDetails: {
    dogName: 'Sam',
    breed: 'Golden R',
    age: 10,
    breeds: {
    }
  },

}

console.log(userDetails);

// 2. Accesare object  object.property
const userDetailsRefCopy = userDetails;
console.log(userDetailsRefCopy);

const userDetailsUserName = userDetails.userName;
const userDetailsUserSurname = userDetails.userSurname;

console.log(userDetailsUserName, userDetailsUserSurname);
console.log(userDetails.userName, userDetails.userAge);
console.log(userDetails.limbajeDeProgramare);

// Returnare valoare din obiect in obiect
console.log(userDetails.lastDogDetails.dogName);

// Cand o proprietate are o functie, acea proprietate se numeste metoda

userDetails.consoleAge();
console.log(userDetails.isPersonAbove18(17));


// 3. Modificare object (inlocuirea valorilor)
userDetails.userName = 'Andrei Cristian';

userDetails.age = 33;
userDetails.limbajeDeProgramare.push('Java');

// Putem inlocui valori (cum ar fi functia initiala);
userDetails.consoleAge = function () {
  console.log('New age', 33);
}

// un alt mod de a acessa 
console.log(userDetails['age']);
console.log(userDetails.consoleAge());


/// 4. Adaugare de proprietati

const propOras = 'oras';
// adaugare proprietate noua oras
userDetails.oras = 'Radauti';
// userDetails['oras'] = 'Radauti';
console.log(userDetails['oras']);
console.log(userDetails);
/// Exemple de obiecte + arrays

const detaliiDeLogareUtilizator = {
  adresaDeEmail: 'andrei@gmail.com',
  parola: '3sdfsdk2312@asdp@asd0'
}


const user1 = {
  nume: 'Andrei D',
  varsta: 32,
  hasLoggedInEver: true
};

const user2 = {
  nume: 'Alex T',
  varsta: 26,
  hasLoggedInEver: false
}

const user3 = {
  nume: 'Traian',
  varsta: 33,
  hasLoggedInEver: false
}

const listaPersoane = [user1, user2, user3];


// console.log(userDetails.isCurrentUserAbove18());

const userDetails2 = userDetails;

/// 1. Creati un obiect de tip animal
// proprietati: tip de animal, nume, varsta, getDetails -> Nume si varsta, tara de origine
// 'Numele este ' nume + 'varsta' + varsta