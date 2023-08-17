const BASE_URL = "https://bnm1w7hj00.execute-api.us-east-1.amazonaws.com/master/canvas"; // run `json-server --watch db.json` before this
const IMAGE_DIR = "../assets/images/background";

const headerElement = document.body.querySelector("header");

const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
});

const myInit = {
  method: "GET",
  headers: headers,
  cache: "default",
  mode: "cors",
};

export const setBackgroundImage = (letter) => {
  const url = `${BASE_URL}/bg/${letter}`;
  const request = new Request(url, myInit);
  fetch(request)
    .then((response) => {
      if (response.ok) return response.json();
      else throw Error;
    })
    .then((result) => {
      const poster = result.output.length > 0 ? result.output.pop().value : "blank";
      return poster;
    })
    .then((poster) => {
      const bgURL = `url(${IMAGE_DIR}/${poster}.jpg)`; // css way
      // @ts-ignore
      headerElement.style.backgroundImage = bgURL;
    })
    .catch(() => {
      document.body.style.background = "color";
    });
};
