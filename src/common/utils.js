console.log("🦄 From utils File");

export const colorBox = ["#f00000", "#38c138", "#0a6de8", "#e69110", "#1b1818", "#632363", "#f1e904", "#102923", "#000000", "#d4d4d4"];

export const numberBox = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  0: "zero"
};

export const varnmala = Array.from({ length: 26 }, (_, i) => String.fromCodePoint(65 + i));

export const getRandomValue = (arr = []) => arr.at(Math.floor(Math.random() * arr.length));
