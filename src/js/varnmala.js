(() => {
    const main = document.getElementById("main");
    const varnmala = Array.from({ length: 26 }, (_, i) =>
        String.fromCodePoint(65 + i)
    );
    const createVarnmalaDiv = () => {
        let fragment = document.createDocumentFragment();
        varnmala.forEach(varn => {
            let div = document.createElement("div");
            div.className = "word";
            div.textContent = varn;
            fragment.appendChild(div);
        });
        return fragment;
    };

    const highlightText = w => {
        for (let child of main.childNodes) {
            if (child.textContent === w.toUpperCase()) {
                let classes = child.classList;
                classes.toggle("show");
                break;
            }
        }
    };
    document.addEventListener("keydown", e => {
        const key = e.key;
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
})();
