// @ts-nocheck
import { isAlphabet } from './utils.js';

const panel = document.querySelector('.panel');
const cellRange = document.getElementById('range');
const orientationPanel = document.querySelectorAll('.orientation');
//const panelOptionDiv = document.querySelector('#panel__options');

let orientation;

let selectedIndex = 0;
const cellWidth = panel.offsetWidth;
let radius, theta;

const rotatePanel = ({ rotate = 'rotateX' }) => {
  const angle = theta * selectedIndex;
  const transformString = `translateZ(-${radius}px) ${rotate}(${angle}deg)`;
  panel.style.transform = transformString;
};

const updatePanel = (num = 0) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('panel__cell');
    div.textContent = String.fromCodePoint(65 + i);
    fragment.appendChild(div);
  }
  panel.innerHTML = '';
  panel.appendChild(fragment);
};

const changePanel = ({ orientation = 'Y' }) => {
  const rotate = `rotate${orientation}`;
  const radioInput = document.querySelectorAll('input[type=radio]');
  radioInput.forEach( r => r.checked = r.defaultValue === orientation);
  const cellCount = Number(cellRange.value);
  updatePanel(cellCount);
  theta = 360 / cellCount;
  const cells = document.querySelectorAll('.panel__cell');
  const halfCell = cellWidth / 2;
  const divideBy = Math.tan(Math.PI / cellCount);
  radius = Math.round(halfCell / divideBy);
  cells.forEach((cell, i) => {
    const cellAngle = theta * i;
    const transformString = `${rotate}(${cellAngle}deg) translateZ(${radius}px)`;
    cell.style.transform = transformString;
  });
  rotatePanel({ rotate });
};

const onOrientationChange = (e) => {
  orientation = e.target.value;
  console.log({orientation}); 
  //e.target.closest('label').classList.add('selected');
  changePanel({ orientation });
};

const onKeyChange = (e) => {
  const { keyCode } = e;
  //let orientation;
  switch (keyCode) {
    case 39: {
      // ArrowRight
      selectedIndex++;
      orientation = 'Y';
      break;
    }
    case 37: {
      // ArrowLeft
      selectedIndex--;
      orientation = 'Y';
      break;
    }
    case 38: {
      // ArrowUp
      selectedIndex++;
      orientation = 'X';
      break;
    }
    case 40: {
      // ArrowDown
      selectedIndex--;
      orientation = 'X';
      break;
    }
    default: {
      if (isAlphabet(keyCode)) {
        selectedIndex = 65 - keyCode;
      } else {
        selectedIndex--;
      }
    }
  }
  changePanel({ orientation });
};


orientationPanel.forEach((radio) => {
  radio.addEventListener('click', onOrientationChange, false);
});

cellRange.addEventListener('change', changePanel);
document.addEventListener('keydown', onKeyChange);

updatePanel();
