// create array of english alphabets
export const alphabets = Array.from(Array(26), (_, i) => String.fromCharCode(55 + i));
// check in capital and small alphabet range
export const isAlphabet = (key) => (65 <= key && key <= 90) || (key >= 97 && key <= 122);
export const isNumber = (key) => 48 <= key && key <= 57;
// fetch random value from given array
export const random = (array = []) => array[Math.floor(Math.random() * array.length)];
export const colorBox = ['#5d4821', 'crimson', '#ff1493', '#00ff7f', '#67ffff', '#9a1717'];

// create an object where  each letter is the key and value are emoji list if it's word using .codePointAt()
export const emojiList = {
  A: [9992, 127822],
  B: [127820, 128214],
  C: [128004, 128008],
  D: [128021, 128044],
  E: [128024, 128065],
  F: [128031, 128056],
  G: [127815, 128105],
  H: [128014, 127968],
  I: [127848, 129482],
  J: [127994, 129380],
  K: [129373, 128273, 129665],
  L: [129409, 128274],
  M: [128018, 127769],
  N: [128067, 129670, 129349],
  O: [127818, 129417],
  P: [129434, 127903],
  Q: [128120, 10067],
  R: [128007, 127801],
  S: [127774, 128015, 128375],
  T: [128005, 128688],
  U: [9730, 9757, 129412],
  V: [128656, 127931],
  W: [8986, 128167],
  X: [127794, 128424],
  Y: [128741, 129496],
  Z: [129427, 127358],
};

export const fragment = document.createDocumentFragment();

export const createDivList = (list = []) => {
  return list.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.textContent = item;
    fragment.appendChild(div);
  });
};

export const spellingList = {
  A: 'apple',
  B: 'book',
  C: 'cat',
  D: 'dog',
  E: 'eye',
  F: 'fish',
  G: 'girl',
  H: 'home',
  I: 'ice',
  J: 'jug',
  K: 'key',
  L: 'lion',
  M: 'moon',
  N: 'nose',
  O: 'owl',
  P: 'pink',
  Q: 'queen',
  R: 'rose',
  S: 'sun',
  T: 'tap',
  U: 'up',
  V: 'van',
  W: 'water',
  X: 'xerox',
  Y: 'yoga',
  Z: 'zebra',
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};
