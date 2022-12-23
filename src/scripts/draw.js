// @ts-nocheck
import { setBackgroundImage } from './alphabet.js';
import { colorBox } from './utils.js';

let i = 0;
const len = Object.keys(colorBox).length;
const boardDiv = document.querySelector('.board');
const shapeDiv = document.getElementById('shape');
const charDiv = document.getElementById('char');

const clearShapeDiv = () => {
  while (shapeDiv.hasChildNodes()) {
    shapeDiv.removeChild(shapeDiv.lastChild);
  }
};

const drawShape = () => {
  document.addEventListener(
    'keydown',
    (e) => {
      // console.warn("e", e);
      // const which = e.which;
      // console.log("which", which);
      document.querySelector('h2').style.display = 'none';
      i++;
      let key = e.key;
      const isNumber = !isNaN(Number(key));

      if (isNumber) {
        console.log('%c else is number', 'color:green', key);
        i = i % len == 0 ? 1 : i;
        boardDiv.style.backgroundColor = Object.values(colorBox)[i];
        boardDiv.style.backgroundImage = null;
        clearShapeDiv();
        charDiv.innerHTML = key;
        for (i = 0; i < Number(key); i++) {
          const div = document.createElement('div');
          div.classList = 'circle';
          shapeDiv.appendChild(div);
        }
      } else {
        console.log('%c if not a number', 'color:red', key);
        const char = key.toUpperCase();
        boardDiv.style.backgroundColor = 'transparent';
        clearShapeDiv();
        charDiv.innerHTML = char;
        setBackgroundImage(key);
      }
    },
    false
  );
};

drawShape();
