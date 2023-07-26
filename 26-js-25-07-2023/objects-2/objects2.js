console.log('Objects');

const user = {
  name: 'Andrei',
  pass: 'asda@sdfrl3a'
};

// const user2 = user;
// user2.name = 'Ionut';

// const user2 = {
//   name: 'Ionut',
//   pass: 'asda@sdfrl3a'
// }

// const user3 = {
//   name: 'Alex',
//   pass: 'asda@sdfrl3a'
// }

// Function factory - in loc sa scriem muserii manual de fiecare data
function addUser(name, pass) {
  return {
    name: name,
    pass: pass,
    getName: function() {
      return this.name;
    }
  }
}

const user1 = addUser('Andrei', 'asda@sdfrl3a');
const user2 = addUser('Ionut', 'asda@sdfrl3a');
const user3 = addUser('Alex', 'asda@sdfrl3a');

console.log(user1, user2, user3);

// Function constructor OOP object oriented programming // prototypal inheritence language
function Animal(type, country, gender, age) {
  this.type = type;
  this.country = country;
  this.gender = gender;
  this.age = age;
  // this.getAge = function() {
  //   return this.age;
  // }
}

Animal.prototype.getAge = function() {
  return this.age;
}

const dog = new Animal('dog', 'Germany', 'F', 4);
const tiger = new Animal('tiger', 'India', 'M', 10 );
const cat = new Animal('cat', 'Romania', 'F',  15);

console.log(dog.getAge());

console.log(dog, tiger, cat);
// Function constructor / class, specifica cum vrem sa arate obiectul nostru -> iar apoi
// instantierea cu -> cuvantul cheie new Animal('dog','Germany, 'F', 4) -> creeaza obiectul propriuzis

// console.log(dog);

const obj = {
  name: 'Andrei',
  getName: function () {
    return this.name;
  }
}

const f = function() {
  console.log(test);

}

const ob = {
  t: function() {
    return 't';
  }
}

console.log(ob.t instanceof Object);

const arr = new Array();
const obj2 = new Object();
const fn = new Function('a', 'b', 'return a + b');
const date = new Date();

console.log(fn(2,4));


