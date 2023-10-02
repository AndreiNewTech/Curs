
const registerFormEl = document.querySelector('.registration-form form');
const registerButton = document.querySelector('.register-button');

const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const genderRadiosEls = document.getElementsByClassName('gender-radios');
const termsEl = document.querySelector('#terms');
const submissionSuccessEl = document.querySelector('.success-submission');

// Form inputs object
let registerData = {};

const addToStorage = (data = {}) => {
  localStorage.setItem('register_data', JSON.stringify(data));
}

const getFromStorage = () => {
  return JSON.parse(localStorage.getItem('register_data')) ?? {};
}

const resetData = () => {
  submissionSuccessEl.classList.add('active');
  registerFormEl.reset();
  registerData = {};
}

const populateFormData = () => {
  const storageFormData = getFromStorage();
  if (Object.keys(storageFormData).length) {
    usernameEl.value = storageFormData.username;
    emailEl.value = storageFormData.email;
    passwordEl.value = storageFormData.password;
    genderRadiosEls[0].checked = true;
    termsEl.checked = true;
  }
}

// Event listners

usernameEl.addEventListener('input', (e) => {
  registerData.username = e.target.value;
})

emailEl.addEventListener('input', (e) => {
  registerData.email = e.target.value;
})

passwordEl.addEventListener('input', (e) => {
  registerData.password = e.target.value;
})


Array.from(genderRadiosEls).forEach(radioEl => {
  radioEl.addEventListener('click', (e) => {
    if (registerData.gender !== e.target.value) {
      registerData.gender = e.target.value;
    }
  })
})

termsEl.addEventListener('input', (e) => {
  if (termsEl.checked) {
    registerData.terms = true;
  }
})


registerButton.addEventListener('click', () => {
  if (registerFormEl.reportValidity()) {
    addToStorage(registerData);
    resetData();
  } else {
    console.log(registerData, 'Invalid');
  }
})

registerFormEl.addEventListener('submit', (e) => {
  e.preventDefault();
  // 1. Varianta simpla de a accesa valorile formularului
  // const formData = new FormData(e.target); // e.target is the form element
  // console.log(formData.entries());
  // for (let pair of formData.entries()) {
  //   console.log(pair[0] + ': ' + pair[1]); 
  //   registerData[pair[0]] = pair[1];
  //   addToStorage(registerData);
  // }

});


populateFormData();

