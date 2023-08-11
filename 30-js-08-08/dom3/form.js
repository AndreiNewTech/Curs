// Prevent default

const formElement = document.getElementById('form-dummy');

formElement.addEventListener('submit', function(el) {
  el.preventDefault();

  const firstNameValue =  document.getElementById('fname').value;
  const lastNameValue = document.getElementById('lname').value;
  const countryValue = document.getElementById('country').value;

  
  console.log(firstNameValue, lastNameValue, countryValue)
  // console.log(el.target.value)
})

