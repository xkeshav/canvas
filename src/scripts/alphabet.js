const BASE_URL = `http://localhost:3000`; // run `json-server --watch db.json` before this
const IMAGE_DIR = `../asset/images/background`;

const headerElement = document.body.querySelector('header');

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

const myInit = {
  method: 'GET',
  headers: headers,
  cache: 'default',
  mode: 'cors',
};

export const setBackgroundImage = (letter) => {
  const url = `${BASE_URL}/bg?key=${letter}`;
  const request = new Request(url, myInit);
  fetch(request)
    .then((response) => {
      if (response.ok) return response.json();
      else throw Error;
    })
    .then((result) => {
      const poster = result.length > 0 ? result.pop().value : 'blank';
      return poster;
    })
    .then((poster) => {
      const bgURL = `url(${IMAGE_DIR}/${poster}.jpg)`; // css way
      // @ts-ignore
      headerElement.style.backgroundImage = bgURL;
    })
    .catch(() => {
      document.body.style.background = `color`;
    });
};
