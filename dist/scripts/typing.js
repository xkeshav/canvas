// @ts-nocheck
import { colorBox, emojiList, isAlphabet, isNumber, random, spellingList } from './utils.js';

const letterDiv = document.querySelector('.letter');
const emojiDiv = document.querySelector('.emoji');
const spellDiv = document.querySelector('.spelling');

// call as addClass.call(elemName, className);

const addClass = function (className) {
  this.classList.add(className);
};

const removeClass = function (className) {
  this.classList.remove(className);
};

const drawLetter = (letter, color = 'pink') => {
  letterDiv.innerHTML = letter;
  letterDiv.style.color = color;
};

const drawEmoji = (letter = '') => {
  //const list = emojiList[letter] || [];
  const { [letter]: list = [] } = emojiList;
  if (list.length) {
    const codePoint = random(list);
    const emoji = String.fromCodePoint(codePoint);
    emojiDiv.innerHTML = emoji;
  } else {
    emojiDiv.innerHTML = letter;
  }
};

const drawSpelling = (key = '', color = 'green') => {
  const { [key]: spelling } = spellingList;
  const width = spelling.trim().length;
  spellDiv.innerHTML = spelling;
  spellDiv.style.color = color;
  document.documentElement.style.setProperty('--steps', width); // change css value from JS
  spellDiv.classList.remove('animation');
  removeClass.call(spellDiv, 'animation');
  void spellDiv.offsetWidth;
  spellDiv.classList.add('animation');
  addClass.call(spellDiv, 'animation');
};

const drawSomething = () => {
  const dice = String.fromCodePoint(127922);
  spellDiv.innerHTML = dice;
  spellDiv.style.fontSize = '10em';
};

document.addEventListener(
  'keydown',
  (e) => {
    e.preventDefault();
    const color = random(colorBox);
    const { key, keyCode } = e;
    if (isAlphabet(keyCode)) {
      const keyCapital = key.toUpperCase();
      drawLetter(keyCapital, color);
      drawEmoji(keyCapital);
      drawSpelling(keyCapital, color);
    } else if (isNumber(keyCode)) {
      const numberEmoji = String.fromCodePoint(127000 + Number(key));
      drawEmoji(numberEmoji);
    } else {
      drawSomething();
    }
  },
  false
);
