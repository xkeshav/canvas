const MIN = 1;
const MAX = 90;
let currentOperator = "add";

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const refreshBtn = document.getElementById("refresh");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const operatorSign = document.getElementById("operator");

const firstOperand = document.getElementById("first");
const secondOperand = document.getElementById("second");
const userOutput = document.getElementById("output");
const resultBox = document.getElementById("result");

// dialog box
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#tip");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


export const add = (a, b) => parseInt(a, 10) + parseInt(b, 10);
export const subtract = (a, b) => parseInt(a, 10) - parseInt(b, 10);
export const multiply = (a, b) => a * b;

const clearOutput = () => {
  userOutput.value = "";
  userOutput.setCustomValidity("");
  userOutput.focus();
};

addBtn.addEventListener("click", () => {
  operatorSign.innerHTML = "+";
  currentOperator = "add";
  invokeSum();
});

subtractBtn.addEventListener("click", () => {
  operatorSign.innerHTML = "-";
  currentOperator = "subtract";
  invokeSubtract();
});

multiplyBtn.addEventListener("click", () => {
  operatorSign.innerHTML = "x";
  currentOperator = "multiply";
  invokeMultiply();
});

const invokeSum = () => {
  clearOutput();
  const firstRandom = randomIntegerInRange(MIN, MAX);
  const secondRandom = randomIntegerInRange(MIN, MAX);
  firstOperand.setAttribute("value", firstRandom);
  secondOperand.setAttribute("value", secondRandom);
  const output = add(firstRandom, secondRandom);
  resultBox.value = output;
};

const invokeSubtract = () => {
  clearOutput();
  let firstRandom = randomIntegerInRange(MIN, MAX);
  let secondRandom = randomIntegerInRange(MIN, MAX);
  if (firstRandom < secondRandom) {
    [firstRandom, secondRandom] = [secondRandom, firstRandom];
  }
  firstOperand.setAttribute("value", firstRandom);
  secondOperand.setAttribute("value", secondRandom);
  const output = subtract(firstRandom, secondRandom);
  resultBox.value = output;
};

const invokeMultiply = () => {
  clearOutput();
  const firstRandom = randomIntegerInRange(MIN, MAX);
  const secondRandom = randomIntegerInRange(1, 9);
  firstOperand.setAttribute("value", firstRandom);
  secondOperand.setAttribute("value", secondRandom);
  const output = multiply(firstRandom, secondRandom);
  resultBox.value = output;
};

refreshBtn.addEventListener("click", () => {
  console.log({ currentOperator });
  //const output = currentOperator.apply("add", [firstRandom, secondRandom])
  clearOutput();
  if (currentOperator === "add") {
    invokeSum();
  }
  if (currentOperator === "subtract") {
    invokeSubtract();
  }
  if (currentOperator === "multiply") {
    invokeMultiply();
  }
});

userOutput.addEventListener("keyup", (e) => {
  const value = e.target.value;
  const correctResult = resultBox.value;
  //console.log(firstOperand.value, secondOperand.value, value, { correctResult });
  //console.log(currentOperator, { value }, Number(correctResult), Number(value) === Number(correctResult));
  if (Number(value) !== Number(correctResult)) {
    userOutput.setCustomValidity("You gotta fill this out.");
  } else {
    userOutput.setCustomValidity("");
  }
});
