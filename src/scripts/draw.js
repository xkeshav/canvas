import { fetchKeyMetadata } from "../common/helper.js";
import { colorBox, getRandomValue, numberBox } from "./utils.js";

const main = document.querySelector("main");
const boardDiv = document.querySelector(".board");
const charDiv = document.getElementById("char");
const toggleButton = document.getElementById("toggleCase");
const header = document.querySelector("header");
const info = document.querySelector(".info");

// change case of character
toggleButton.addEventListener("change", (e) => {
  charDiv.style.textTransform = !e.target.checked ? "uppercase" : "lowercase";
});

const drawNumber = (key = 0) => {
  //console.log("%c else is number", "color:green", key);
  const randomColor = getRandomValue(colorBox);
  boardDiv.style.backgroundColor = randomColor;
  charDiv.textContent = key;
  info.textContent = numberBox[key];
};

const drawLetter = (key = "A") => {
  const char = key;
  boardDiv.style.backgroundColor = "transparent";
  charDiv.textContent = char;
};

const drawShape = () => {
  document.addEventListener("keydown", async (e) => {
    header.style.display = "none";
    const inputKey = e.key;
    const isNumber = !isNaN(Number(inputKey));
    if (isNumber) {
      drawNumber(inputKey);
    } else {
      drawLetter(inputKey);
      const { value, imagePath } = await fetchKeyMetadata(inputKey);
      info.textContent = value;
      main.style.backgroundImage = `url(${imagePath})`;
    }
  });
};

drawShape();
