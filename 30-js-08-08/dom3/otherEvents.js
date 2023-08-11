window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

document.addEventListener("DOMContentLoaded", (event) => {
  console.log('Document ready');
});

// Input events focus and blur (blur opusul lui focus)

const inputTextEl = document.getElementById('textInput');

// inputTextEl.onfocus = function() {
//   console.log('focused');
// }

// inputTextEl.onblur = function() {
//   console.log('blured');
// }

inputTextEl.addEventListener('focus', function() {
  console.log('focused');
})

// Input change
inputTextEl.addEventListener('change', function(event) {
  console.log('changed', event.target.value);
});

const textOutput = document.getElementById('textInputData');

// Acces la valoarea din input text
inputTextEl.addEventListener('input', function(event) {
  // console.log('changed', event.target.value);
  textOutput.textContent = event.target.value;
})

// Scroll event la document
document.addEventListener('scroll', function(e) {
  console.log(e)
  console.log('Scoll');
})


// Event bubbling (propagare);
document.addEventListener('click', function() {
  // alert("Document Clicked!");
})

document.getElementById("parent").addEventListener("click", function (e) {
  alert("Parent Div Clicked!");
  e.stopPropagation();
});

document.getElementById("child").addEventListener("click", function (e) {
  alert("Child Div Clicked!");
});



