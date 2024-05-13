console.log("🦄 From utils File");

export const varnmala = Array.from({ length: 26 }, (_, i) => String.fromCodePoint(65 + i));
export const getRandomValue = (arr = []) => arr.at(Math.floor(Math.random() * arr.length));
export const isAlphabet = (key) => (65 <= key && key <= 90) || (key >= 97 && key <= 122);
export const isNumber = (key) => 48 <= key && key <= 57;

export const add = (a, b) => parseInt(a, 10) + parseInt(b, 10);
export const subtract = (a, b) => parseInt(a, 10) - parseInt(b, 10);
export const multiply = (a, b) => a * b;