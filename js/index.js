import { colorBox } from "./color.js";
import { fetchImage } from "./alphabet.js";

let i = 0;
const len = Object.keys(colorBox).length;

document.addEventListener(
    "keydown",
    e => {
        // console.warn("e", e);
        // const which = e.which;
        const key = e.key;
        i++;
        i = i % len == 0 ? 1 : i;
        let qs = document.querySelector(".alphabet");
        // console.log("colorcode", Object.values(colorBox));
        document.body.style.backgroundColor = Object.values(colorBox)[i];
        let str = key.toUpperCase();
        qs.innerHTML = str;
        fetchImage(key);
    },
    false
);
