import { varnmala } from "../common/utils";

export const varnmalaHandler = () => {
  const main = document.getElementById("main");
  const createVarnmalaDiv = () => {
    let fragment = document.createDocumentFragment();
    varnmala.forEach((varn) => {
      let div = document.createElement("div");
      div.className = "word";
      div.textContent = varn;
      fragment.appendChild(div);
    });
    return fragment;
  };

  const highlightText = (w) => {
    // eslint-disable-next-line  no-unused-vars
    for (let child of main.childNodes) {
      if (child.textContent === w.toUpperCase()) {
        const classes = child.classList;
        classes.toggle("show");
        break;
      }
    }
  };

  document.addEventListener("keydown", (e) => {
    const { key } = e;
    const isAlphabet = isNaN(Number(key));
    if (isAlphabet) {
      highlightText(key);
    }
  });
  const loadGrid = () => {
    const wd = createVarnmalaDiv();
    main.appendChild(wd);
  };
  loadGrid();
};


// dialog box
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#tip");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

varnmalaHandler();
