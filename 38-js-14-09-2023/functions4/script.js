

/// Function Methods (Call, Apply, Bind)
const persObj = {
  name: 'Andrei',
  surname: 'Duhanes',
  getFullname: function() {
    return this.name + ' ' + this.surname;
  }
}

const persObj2 = {
  name: 'Alex',
  surname: 'Popoescu'
}


function fn(varsta) {
   console.log(this); 
   console.log(this.name + ' ' + this.surname + ' are varsta ' + varsta + ' de ani');
}

// Call si Apply

// Fn are this -> persObj2 (initial il are catre -> Window)
fn.call(persObj2, 32);
console.log(persObj.getFullname.call(persObj2));

// Diferenta este doar ca accepta un array the argumente
fn.apply(persObj2, [32]);


/////
const course = {
  name: '',
  description: '',
  students: [],
  addStudents(studentName) {
    this.students.push(studentName);
    console.log(`${studentName} added to ${this.name} course`);
  },
  date: '12/12/2021'
}

const english = {
  name: "english course",
  description: "this is a good course",
  students: []
};

const math = {
  name: "math course",
  description: "this is a very good course",
  students: []
};

const addStudentsFn = course.addStudents;

addStudentsFn.call(english, 'Alex');
addStudentsFn.call(english, 'John');
addStudentsFn.call(english, 'Banel');


addStudentsFn.apply(math, ['Alex']);
addStudentsFn.apply(math, ['Johnny']);
addStudentsFn.apply(math, ['Marius']);

// Bind
const addStudentsFnBindedEnglish = course.addStudents.bind(english);
addStudentsFnBindedEnglish('Anghel');
addStudentsFnBindedEnglish('Dana');
addStudentsFnBindedEnglish('Maria');

const addStudentsFnBindedMath = course.addStudents.bind(math);
addStudentsFnBindedMath('Anghel');
addStudentsFnBindedMath('Dana');
addStudentsFnBindedMath('Maria');



// Closures

function init() {
  const name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  displayName();
}
init();


function init2() {
  const name = "Chrome";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const displayNameFn = init2();

displayNameFn();


function addWith(numAddWith) {
  return function(numberToAddWith) {
    console.log(numAddWith + numberToAddWith)
  }
}

const addWith10 = addWith(10);
const addWith20 = addWith(20);
const addWith2 = addWith(2);

addWith10(100); // 100
addWith20(20);  // 40
addWith2(10); // 12   