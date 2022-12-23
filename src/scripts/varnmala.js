import { varnmala } from './utils';

export const varnmalaHandler = () => {
  const main = document.getElementById('main');
  const createVarnmalaDiv = () => {
    let fragment = document.createDocumentFragment();
    varnmala.forEach((varn) => {
      let div = document.createElement('div');
      div.className = 'word';
      div.textContent = varn;
      fragment.appendChild(div);
    });
    return fragment;
  };

  const highlightText = (w) => {
    for (const child of main.childNodes) {
      if (child.textContent === w.toUpperCase()) {
        const classes = child.classList;
        classes.toggle('show');
        break;
      }
    }
  };

  document.addEventListener('keydown', (e) => {
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
