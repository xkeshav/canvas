// @ts-nocheck

const EMPTY_STRING = " ";

let CANVAS_DIMENSION = { width: 300, height: 230 };

const isLargeImage = true;

if (isLargeImage) {
  CANVAS_DIMENSION = { width: 1012, height: 506 }; // standard; can be change
}

const CUSTOM_FONT = "Mudra_Mohta-Regular.woff";

const createCanvas = () => {
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
  context.fillStyle = "#11351E";
  context.fillRect(20, 20, w - 20, h - 20);
  const text = "Recursive Zero";

  //font style
  context.font = "bold 2rem customFont";
  context.textAlign = "center";
  context.textBaseline = "middle";
  // font color and size
  context.fillStyle = "#CDCC38";
  context.fillText(text, w / 2, h / 2);
  // when needed stroked text; comment fillStyle and fillText and uncomment strokeStyle and strokeText
  context.strokeStyle = "white";
  context.strokeText(text, 510, 270);

  //context.translate(w / 2, h / 2);
  // draw border in a inner rectangle
  context.strokeStyle = "#000";
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

const drawImage = async (inputText = EMPTY_STRING) => {
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
  console.log("cccc");
  const mainPanelDiv = createElement("div", "canvasDiv", "canvas__div");
  document.body.appendChild(mainPanelDiv);
  drawImage("Recursive Zero").then(loadImage);
};

const createElement = (type, idName, className) => {
  const elem = document.createElement(type);
  if (idName) elem.id = idName;
  if (className) elem.className = className;
  return elem;
};

createMainPanel();
