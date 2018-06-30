import { fruitBox } from "./fruit.js";

const headers = new Headers({ "Content-Type": "image/jpeg" });
const myInit = {
  method: "GET",
  headers: headers,
  mode: "same-origin"
};

export const fetchImage = letter => {
  const fruit = fruitBox[letter] || "none";
  const request = new Request(`./images/fruits/${fruit}.png`, myInit);
  fetch(request)
    .then(response => response.blob())
    .then(blob => {
      const objectURL = URL.createObjectURL(blob);
      const img = new Image(200);
      img.src = objectURL;
      let element = document.getElementById("figure");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(img);
    });
};
