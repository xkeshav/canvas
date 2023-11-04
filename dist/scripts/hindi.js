import { colorBox, isAlphabet, random } from './utils.js';

const letterDiv = document.querySelector('.letter');

document.addEventListener(
  'keydown',
  (e) => {
    e.preventDefault();
    const color = random(colorBox);
    const { key, keyCode } = e;
    if (isAlphabet(keyCode)) {
      const keyCapital = key.toUpperCase();
      drawLetter(keyCapital, color);
    }
  },
  false
);

const drawLetter = (letter, color = 'pink') => {
  letterDiv.innerHTML = letter;
  letterDiv.style.color = color;
};
