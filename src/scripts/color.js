// @ts-nocheck
let colorWell;
const defaultColor = '#03ff';

colorWell = document.querySelector('#colorWell');
colorWell.value = defaultColor;
colorWell.addEventListener('input', updateFirst, false);
colorWell.addEventListener('change', updateFirst, false);
colorWell.select();

const main = document.querySelector('main');

function updateFirst(event) {
  main.style.backgroundColor = event.target.value;
}

const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
//const outputBox = document.querySelector('output');
//const selectEl = favDialog.querySelector('select');
//const confirmBtn = favDialog.querySelector('#confirmBtn');

// "Update details" button opens the <dialog> modally
showButton.addEventListener('click', () => {
  favDialog.showModal();
});
//// "Favorite animal" input sets the value of the submit button
//selectEl.addEventListener('change', (e) => {
//  confirmBtn.value = selectEl.value;
//});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', () => {
  console.log('close modal');
  console.log(`ReturnValue: ${favDialog.returnValue}.`);
  //outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});
