console.log('clases');
//Function constructor
function Person(name, surname) {
  this.dateCreationObject = new Date();
  this.age = 5;
  this.name = name;
  this.surname = surname;
}

Person.prototype.getAge = function() {
  console.log(this.age);
}

Person.prototype.city = 'Radauti';
const alexPers = new Person('Alex','Popescu');

// console.log(alexPers);
// console.log(alexPers.getAge());
console.log(alexPers);


// Class echivalent
class PersonClass {
  // proprietate
  dateCreationObject = new Date();
  // proprietate a clasei care se accesseaza direct de catre clasa
  static typeOfClass = 'PersonClass';

  // default
  // constructor() {}
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  // getters and setters
  get getName() {
    return this.name;
  }

  set setName(name) {
    if (name) {
      this.name = name;
    }
  } 

  // metoda
  getAge() {
    console.log(this.age);
  }
}

const persObj = new PersonClass('Ionut', 'Popescu', 30);
console.log(PersonClass.typeOfClass);
console.log(persObj.name)

// Ex: 
class Animal {
  static classType = 'Animal class instatiata doar pentru obiecte de tip Animal';
  dateObjCreatedString = new Date().toLocaleDateString("en-US");

  constructor(specie, nume, taraOrigine, varsta) {
    this.specie = specie;
    this.varsta = varsta;
    this.nume = nume;
    this.taraOrigine = taraOrigine; 
  }

  get getAnimalDetails() {
    return `Animal ${this.specie}, Name: ${this.nume}, Tara: ${this.taraOrigine}, Varsta: ${this.varsta} ani`
  }

  getAnimalSound(defaultSound = 'Unknows sound') {
    switch (this.specie) {
      case 'dog':
        console.log('Woof woof');
        break;
      case 'cat':
        console.log('Miau miau');
        break;
      case 'bear': 
        console.log('Rwoar');
      default:
        console.log(defaultSound);
        break;
    }
  }
}


class Dog extends Animal {
  constructor(nume, taraOrigine, varsta, rasa, arePedigree, orasDeResedinta) {
    super('dog', nume, taraOrigine, varsta);
    this.rasa = rasa;
    this.arePedigree = arePedigree;
    this.orasDeResedinta = orasDeResedinta
  }
}

class Cat extends Animal {
  constructor(nume, taraOrigine, varsta, rasa, arePedigree, orasDeResedinta) {
    super('cat', nume, taraOrigine, varsta);
    this.rasa = rasa;
    this.arePedigree = arePedigree;
    this.orasDeResedinta = orasDeResedinta
  }
}


class Lion extends Animal {
  constructor(isInCaptivity, nume, taraOrigine, varsta) {
    super('lion', nume, taraOrigine, varsta)
    this.isInCaptivity = isInCaptivity;
  }

  get getLocation() {
    if (this.isInCaptivity ) return 'Berlin Zoo';
    else return 'Tanzania';
  }
}


const dog = new Dog('Sushi', 'Austria', 10, 'Shitzu', true, 'Oradea');
const cat = new Cat('Fum', 'Romania', 4);
const bear = new Animal('bear', 'Smokey', 'Germania', 10);
const lion = new Lion(true, 'Lion King', 'Tanzania', 5);



// console.log(dog.getAnimalDetails);
// console.log(cat.getAnimalDetails);
// dog.getAnimalSound();
// cat.getAnimalSound();
// lion.getAnimalSound('Roaarrrr ');

console.log(dog);

class User {
  constructor(nume, prenume) {
    this.nume = nume;
    this.prenume = prenume;
  }
  createHtmlElementWithUserDetails(divRef) {
    const nameTitleEl = document.createElement('h1');
    nameTitleEl.textContent = this.nume;

    const surnameTitleEl = document.createElement('h2');
    surnameTitleEl.textContent = this.prenume;
    divRef.appendChild(nameTitleEl);
    divRef.appendChild(surnameTitleEl);
  }
}

const user1 = new User('Ion', 'Creanga');
const user2 = new User('Mihai', 'Eminescu');
const user3 = new User('Vasile', 'Alecsandri');

// console.log(user1);
const bodyEl = document.body;
const userArr = [user1, user2, user3];

userArr.forEach(el => {
  console.log(el);
  el.createHtmlElementWithUserDetails(bodyEl);
})

