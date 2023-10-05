
// Name 
// min-length = 5, required, doar litere

// Phone
// length = 10, doar cifre, incepe cu 07,  required

// Date  Of Service
// Sa nu fie mai veche data de 1 an, required

// Email
// Domeniu sa se termine in .com, .ro, .net, required

// Feedback
// Min legth 30 caractere.  required

// Rating 
// required

// General -> adaugare mesaj per fiecare input in caz de nevalidare

const MANDATORY_FIELD = 'This field is mandatory';
const formEl = document.querySelector('#feedbackForm');
const feedbackNameEl = document.querySelector('#feedbackName');
const feedbackPhoneEl = document.querySelector('#feedbackPhone');
const feedbackDateEl = document.querySelector('#feedbackDate');
const feedbackEmailEl = document.querySelector('#feedbackEmail');
const feedbackDescriptionEl = document.querySelector('#feedbackDescription');
const feedbackRatingEl = document.querySelector('#feedbackRating');


const warningElements = document.getElementsByClassName('warning');
const elArray = [feedbackNameEl, feedbackPhoneEl, feedbackDateEl, feedbackEmailEl, feedbackDescriptionEl, feedbackRatingEl];


const formData = {  
  feedbackName: '',
  feedbackPhone: '',
  feedbackDate: '',
  feedbackEmail: '',
  feedbackDescription: '',
  feedbackRating: ''
}


elArray.forEach(el => {
  el.addEventListener("change", (event) => {
    const idFormElement = event.target.id;
    const valueFromElement = event.target.value;
    formData[idFormElement] = valueFromElement;
  })
})


formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  resetWarnings();
  let isFormValid = true;

  for (let key in formData) {
    const value = formData[key];

    if (key === 'feedbackName') {
      isFormValid = !validateFeedbackName(value) ? false : isFormValid;
      continue;
    }

    if (key === 'feedbackPhone') {
      isFormValid = !validateFeedbackPhone(value)? false : isFormValid;
      continue;
    }

    if (key === 'feedbackDate') {
      isFormValid = !validateFeedbackDate(value) ? false : isFormValid;
      continue;
    }

    if (key === 'feedbackEmail') {
      isFormValid = !validateFeedbackEmail(value) ? false : isFormValid;
      continue;
    }

    if (key === 'feedbackDescription') {
      isFormValid = !validateFeedbackDescrition(value) ? false : isFormValid;
      continue;
    }

    if (key === 'feedbackRating') {
      isFormValid = !validateFeedbackRating(value) ? false : isFormValid;
      continue;
    }
  }


  // console.log(isFormValid)

  // Daca validarea trece
  if (isFormValid) {
      // 1. trimite formularul
      const jsonFormData = JSON.stringify(formData);
      localStorage.setItem('formData', jsonFormData);
      // 2. sterge valorile
      resetElemValues(elArray);
  }
});

function validateFeedbackDate(value) {
  const valueTrim = value.trim();
  const warningEl = feedbackDateEl.nextElementSibling;
  if (isDateWithinLastYear(value) || !valueTrim) {
    if (isDateWithinLastYear(value)) {
      warningEl.textContent = 'Please select a date within the last year';
    }

    if (!valueTrim) {
      warningEl.textContent = MANDATORY_FIELD;

    }
    feedbackDateEl.classList.add('invalid');
    return false;
  }

 return true;
} 

function validateFeedbackName(value) {
  const valueTrim = value.trim();
  const regexOnlyLetters = /^[a-zA-Z]+$/;
  const isLengthInvalid = valueTrim.length <= 5;
  const isRegexInvalid = !regexOnlyLetters.test(value);
  const warningEl = feedbackNameEl.nextElementSibling;

  if (!valueTrim || isRegexInvalid || isLengthInvalid) {
    if (isLengthInvalid) {
      warningEl.textContent = 'Minimum length is 5 characters';
    } 

    if (isRegexInvalid) {
      warningEl.textContent = 'Only letters allowed';
    }

    if (!valueTrim) {
      warningEl.textContent = MANDATORY_FIELD;
    }

    feedbackNameEl.classList.add('invalid');
    return false;
  }

  return true;
}

function validateFeedbackPhone(value) {
  const valueTrim = value.trim();
  const onlyIntegersRegex = /^\d+$/;
  const isFirstCharsInvalid = value.slice(0,2) !== '07';
  const isLengthInvalid = value.length !== 10;
  const isRegexInvalid = !onlyIntegersRegex.test(value);

  const warningEl = feedbackPhoneEl.nextElementSibling;

  if (!valueTrim || isRegexInvalid || isLengthInvalid || isFirstCharsInvalid) {
    if(isFirstCharsInvalid){
      warningEl.textContent = 'Phone number should start with 07';
    }

    if (isLengthInvalid) {
      warningEl.textContent = 'Phone number should be 10 digits long.';
    }

    if (isRegexInvalid) {
      warningEl.textContent = 'Phone number should contain only numbers';
    }

    if (!valueTrim) {
      warningEl.textContent = MANDATORY_FIELD;
    }

    feedbackPhoneEl.classList.add('invalid');
    return false;
  }

  return true;
}


function validateFeedbackDescrition(value) {
  const valueTrim = value.trim();
  const isLengthInvalid = valueTrim.length <= 30;
  const warningEl = feedbackDescriptionEl.nextElementSibling;
  if (isLengthInvalid || !valueTrim) {
    if (isLengthInvalid) { 
      warningEl.textContent = 'Please provide a feedback of min 30 chars'
    }

    if (!valueTrim) {
      warningEl.textContent = MANDATORY_FIELD;
    }
    feedbackDescriptionEl.classList.add('invalid');
    return false;
  }

  return true;
}

function validateFeedbackEmail(value)  {
  const valueTrim = value.trim();
  const warningEl = feedbackEmailEl.nextElementSibling;
  const onlyDomainRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|ro)$/;
  const ifRegexInvalid = !onlyDomainRegex.test(value);

  if (ifRegexInvalid || !valueTrim) {
    if (ifRegexInvalid) {
      warningEl.textContent = 'The email format is not good or missing .com or .ro .net';
    }

    if (!valueTrim) {
      warningEl.textContent = MANDATORY_FIELD;
    }

  feedbackEmailEl.classList.add('invalid');
  return false;
  }

  return true;
}


function validateFeedbackRating(value) {
  const valueTrim = value.trim();
  const warningEl = feedbackRatingEl.nextElementSibling;
  if (!valueTrim) {
    warningEl.textContent = MANDATORY_FIELD;
    feedbackRatingEl.classList.add('invalid');
    return false;
  }

  return true;
}

function resetWarnings() {
  Array.from(warningElements).forEach(el => {
    el.textContent = '';
  })

  elArray.forEach(el => {
    el.classList.remove('invalid');
  })
}


function resetElemValues(arrEL) {
  arrEL.forEach(el => {
    el.value = '';
    console.log(el)

  })
}

const isDateWithinLastYear = (dateString) => {
  const currentDate = new Date();
  const oneYearAgoDate = new Date(new Date().setFullYear(currentDate.getFullYear() - 1));
  const valueDate = new Date(dateString);

  return valueDate < oneYearAgoDate;
}


document.getElementById("addData").addEventListener('click', () => {
  const nameData = "Andrei"; 
  const numberData = "0745333346";
  const dateData = "2023-06-09";
  const emailData = "and@gmail.ro";
  const descriptionData = "Text adaugat test  test test test teest test test";
  const ratingData = "3";

  feedbackNameEl.value = nameData;
  formData.feedbackName = nameData;

  feedbackPhoneEl.value = numberData;
  formData.feedbackPhone = numberData;

  feedbackDateEl.value = dateData;
  formData.feedbackDate = dateData,

  feedbackEmailEl.value = emailData;
  formData.feedbackEmail = emailData,

  feedbackDescriptionEl.value = descriptionData;
  formData.feedbackDescription = descriptionData,

  feedbackRatingEl.value = ratingData;
  formData.feedbackRating = ratingData;
});