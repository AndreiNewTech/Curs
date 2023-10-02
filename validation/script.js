
const formEl = document.querySelector('#user-form');
const userNameEl = document.querySelector('#username');

formEl.addEventListener('submit', (e) => {
  const isValid = formEl.reportValidity();
  e.preventDefault();
})


