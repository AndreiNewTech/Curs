// Asyncronicity (asincroniciate)

// codul este executat pas cu pas
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// setTimeout(function() {
//   console.log('Delayed string');
// }, 3000);

// setTimeout(() => {
//   console.log(1);
// }, 0);
// console.log(2);

// setTimeout(() => {
//   console.log(3);
// })
// console.log(4);

// Examples of asyncron actions (setInterval, setTimeout, dom events)
let seconds = 2;
// const paragrafel = document.createElement('p');
// paragrafel.textContent = `My interval paragraph at second ${seconds}`;
// document.body.appendChild(paragrafel);
// seconds += 2;

// const interval = setInterval(() => {
//   console.log('Interval code executed');
//   const paragrafel = document.createElement('p');
//   paragrafel.textContent = `My interval paragraph at second ${seconds}`;
//   document.body.appendChild(paragrafel);
//   seconds += 2;
// }, 2000);

// setTimeout(function() {
//   clearInterval(interval);
// }, 5000);

// console.log('Test');
// const loading = document.createElement('p');
// loading.classList.add('loading');
// loading.textContent = 'loading';
// document.body.appendChild(loading);

fetch('https://jsonplaceholder.typicode.com/todos/4')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        const titleEl = document.createElement('h1');
        const completed = document.createElement('h2');
        titleEl.textContent = json.title;
        completed.textContent = json.completed ? 'Is completed' : 'Is not completed';
        document.body.appendChild(titleEl);
        document.body.appendChild(completed);

        document.getElementsByClassName('loading')[0].remove();
  })


// Promises
const firstPromise = new Promise(function(resolve, reject) {
  if (false) {
    resolve('My first value');
  }
  else {
    reject(new Error('Error something'));
  }
})

firstPromise.then(val => {
  console.log(val);
}).catch((er) => {
  console.log(er);
});


const mockDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const todoObject = {
      completed: false,
      title: 'Lorep Ipsum',
      userId: 3
    };
    resolve(todoObject);
  }, 3000);
});

mockDataPromise.then(val => {
  const titleEl = document.createElement('h1');
  const completed = document.createElement('h2');
  titleEl.textContent = val.title;
  completed.textContent = val.completed ? 'Is completed' : 'Is not completed';
  document.body.appendChild(titleEl);
  document.body.appendChild(completed);
  return 'True';
}).catch(er => {console.log(er)}).finally(() => {
  console.log('Ended');
});

console.log('Code after promise');
console.log('Code after promise2 ');

// Promise are 3 states -> pending, fulfilled, rejected, settled
// Promise has data for resolve, or reject or both. 


// Testing dogo api

fetch('https://dogapi.dog/api/v2/facts').then(val => {return val.json()}).then(val =>{
  console.log(val);
})









