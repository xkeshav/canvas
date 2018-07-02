import { bgBox } from "./bg.js";

const headers = new Headers({ "Content-Type": "image/jpeg" });
const myInit = {
  method: "GET",
  headers: headers,
  mode: "same-origin"
};

export const setBackgroundImage = letter => {
  const image = bgBox[letter] || "apricot";
  let bg = `/images/background/${image}.jpg`;

  const request = new Request(bg, myInit);
  fetch(request)
    .then(response => {
      if (response.ok) return response.blob();
      else throw Error;
    })

    .then(blob => {
      console.log("blob", blob);
      const objectURL = URL.createObjectURL(blob);
      let img = new Image();
      img.src = objectURL;
      console.log({ img });
      document.body.querySelector(
        "header"
      ).style.backgroundImage = `url(${bg})`;
    })
    .catch(e => {
      console.log("Error", e);
      const alternative = `/images/background/apricot.jpg`;
      document.body.style.backgroundImage = `url(${alternative})`;
    });
};
