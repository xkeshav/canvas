// @ts-nocheck

const getRandomColor = () => {
  const randomNum = Math.floor(Math.random() * 16777216);
  const hex_test = randomNum.toString(16);
  const hex_code = hex_test.padEnd(6, 0);
  // displayColorCode(hex_code);
  return hex_code;
};

/* eslint no-unused-vars:0 */
const displayColorCode = (code) => {
  let codeDiv = createElement("div", "code");
  codeDiv.innerHTML = code;
  document.body.appendChild(code);
};

const fullNameOption = document.getElementById("full");

let isFullNameEnable = false;
// change case of character
fullNameOption.addEventListener("change", (e) => {
  isFullNameEnable = e.target.checked;
});

const EMPTY_STRING = " ";

let CANVAS_DIMENSION = { width: 300, height: 230 };
let FONT_SIZE = "2rem";

const isLargeImage = false; // if make true then do change in css file .canvas__div

if (isLargeImage) {
  CANVAS_DIMENSION = { width: 1012, height: 506 }; // standard; can be change
  FONT_SIZE = "5rem";
}

const CUSTOM_FONT = "atkinson-hyperlegible-regular-102-webfont.woff";

const getInitials = (text = []) =>
  text
    .split(EMPTY_STRING)
    .map((t) => t.at(0))
    .filter(Boolean);

const createCanvas = (content) => {
  const canvas = createElement("canvas");
  const { width: w, height: h } = CANVAS_DIMENSION;
  canvas.width = w;
  canvas.height = h;
  canvas.style.height = `${h}px`;
  canvas.style.width = `${w}px`;
  const context = canvas.getContext("2d");
  context.scale(1, 1);
  context.save();
  //================
  // outer rectangle
  const color = getRandomColor();
  context.fillStyle = `#${color}`;
  context.fillRect(10, 10, w - 20, h - 20);
  const text = content;

  //font style
  context.font = "bold 2rem customFont";
  context.textAlign = "center";
  context.textBaseline = "middle";
  // font color and size
  context.fillStyle = "black";
  context.fillText(text, w / 2, h / 2);
  // when needed stroked text; comment fillStyle and fillText and uncomment strokeStyle and strokeText
  //context.strokeStyle = "white";
  //context.strokeText(text, 510, 270);

  //context.translate(w / 2, h / 2);
  // draw border in a inner rectangle
  context.strokeStyle = `#${color}`;
  context.strokeRect(0, 0, w, h);
  const dataURL = canvas.toDataURL();
  const image = Promise.resolve(dataURL);
  return image;
};

const loadCustomFont = async (fontName) => {
  const myCustomFont = new FontFace("customFont", `url('../assets/fonts/${fontName}'`);
  const font = await myCustomFont.load().catch((e) => console.log(e));
  console.log({ font });
  if (font) {
    document.fonts.add(font);
  }
};

const drawImage = async (inputText = EMPTY_STRING, separator = EMPTY_STRING) => {
  console.log({ inputText });
  await loadCustomFont(CUSTOM_FONT);
  const image = createCanvas(inputText);
  return image;
};

function loadImage(url) {
  const canvasDiv = document.getElementById("canvasDiv");
  const drawDiv = createElement("div", "", "draw");
  const image = createElement("img");
  image.src = url;
  drawDiv.appendChild(image);
  canvasDiv.appendChild(drawDiv);
}

const createMainPanel = () => {
  const mainPanelDiv = createElement("div", "canvasDiv", "canvas__div");
  document.body.appendChild(mainPanelDiv);
  drawImage("Hello World").then(loadImage);
};

const textToRender = (text, isFull = false) => {
  let renderedText = [];
  if (text.length > 0) {
    const replacedText = text.replace(/(\s{2})+/g, EMPTY_STRING); // convert multi space into single space
    if (isFull) {
      renderedText = [replacedText];
    } else {
      if (replacedText.includes(EMPTY_STRING)) {
        renderedText = getInitials(replacedText);
      } else {
        renderedText = [text.charAt(0), text.charAt(1)];
      }
    }
  }
  return renderedText;
};

const createElement = (type, idName, className) => {
  const elem = document.createElement(type);
  if (idName) elem.id = idName;
  if (className) elem.className = className;
  return elem;
};

const input = document.getElementById("name");

//const date = new Date();
//const now = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "long" }).format(date);
//console.log({now})
const padWithZero = (item) => item.toString().padStart(2, "0");

document.addEventListener("click", (event) => {
  //console.log(input.value);
  const { target } = event;
  console.log({ target });
  const inputValue = input.value.trim();
  switch (target.dataset.variant) {
    case "text": {
      const canvasText = textToRender(inputValue, isFullNameEnable);
      console.log({ canvasText });
      drawImage(canvasText.join(EMPTY_STRING)).then(loadImage);
      break;
    }
    case "time": {
      const now = new Date();
      //const now = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "long" }).format(now);
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();
      const timeList = [padWithZero(hour), padWithZero(minute), padWithZero(second)];
      drawImage(timeList.join(":")).then(loadImage);
      break;
    }
    case "reset": {
      document.getElementById("canvasDiv").innerHTML = "";
      input.value = "";
      break;
    }
  }
});

createMainPanel();
