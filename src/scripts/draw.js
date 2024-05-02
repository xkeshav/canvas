//import { fetchKeyMetadata } from "../common/helper";
import { IMAGE_DIR, colorBox, fontBox, numberBox } from "../common/constants";
import { getRandomValue } from "../common/utils";
import { alphabetMapper } from "../mappers/alphabet";

const main = document.querySelector("main");
const boardDiv = document.querySelector(".board");
const charDiv = document.getElementById("char");
const toggleCaseSwitch = document.getElementById("toggleCase");
const toggleFontSwitch = document.getElementById("toggleFont");
const info = document.querySelector(".info");
const textSpan = document.getElementById("text");

const init = () => {
  console.log("welcome to abcdkbd.com");
  console.log({boardDiv, charDiv});
};

if (document.readyState !== "loading") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

// change case of character
toggleCaseSwitch.addEventListener("change", (e) => {
  charDiv.style.textTransform = !e.target.checked ? "uppercase" : "lowercase";
  const after = window.getComputedStyle(textSpan, "::after");
  const { content } = after;
  textSpan.style.setProperty("--content", e.target.checked ? `${content.toLowerCase()}` : `${content.toUpperCase()}`);
});

let c = 0;

toggleFontSwitch.addEventListener("change", (e) => {
  console.log(e.target.checked);
  c++;
  const num = c % fontBox.length;
  const fontFamily = fontBox[num];
  console.log({ fontFamily });
  charDiv.style.fontFamily = fontFamily;
});

const drawNumber = (key = 0) => {
  //console.log("%c else is number", "color:green", key);
  const randomColor = getRandomValue(colorBox);
  console.log({ randomColor });
  boardDiv.style.backgroundColor = randomColor;
  charDiv.textContent = key;
  info.textContent = numberBox[key];
};

const drawLetter = (key = "A") => {
  const char = key;
  boardDiv.style.backgroundColor = "transparent";
  charDiv.textContent = char;
  textSpan.style.setProperty("--content", toggleCaseSwitch.checked ? `'${char.toLowerCase()}'` : `'${char.toUpperCase()}'`);
};

const drawShape = () => {
  ["keydown", "touchstart"].forEach((type) => {
    console.log("type", { type });
    document.addEventListener(type, async (e) => {
      const { key } = e;
      const isNumber = !isNaN(Number(key));
      if (isNumber) {
        drawNumber(key);
      } else {
        drawLetter(key);
        const found = alphabetMapper.filter((alpha) => alpha.key === key);
        //console.log({ found });
        //const metadata = await fetchKeyMetadata(key); // LEARN: see how API being called using amplify
        //console.log({ metadata });
        if (found.length === 0) {
          drawLetter(key);
        } else {
          info.textContent = found[0].value;
          main.style.backgroundImage = `url(${IMAGE_DIR}/${found[0].value}.jpg)`;
        }
      }
    });
  });
};

drawShape();
