//Create a function named createButtons(num)
// ---> it gets an integer number of buttons to create
// each button created will have the label of 'Click me X' where X is the index of the button
// On click of each button is supposed to alert the index

// Restrictions: No ES6 Arrow functions. No let/const variables are allowed

/* <button></button> */

function createButtons(num) {
  if (isNaN(num) === true) {
    throw new Error("This is not a number!");
  }
  var inject = document.body;
  for (var i = 1; i <= num; i++) {
    inject.innerHTML += `<button onClick="alert(${i})">Click me ${i}</button>`;
  }
}
createButtons(10);
