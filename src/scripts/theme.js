// codepen: https://codepen.io/xkeshav/pen/GgKKBWm
const popover = document.querySelector("#nav");
const themer = document.querySelector(".theme-toggle");
const debug = document.querySelector(".debug-toggle");
const placer = document.querySelector(".placement-toggle");

let deb;
document.documentElement.dataset.resizing = false;
document.documentElement.dataset.theme = "system";
document.documentElement.dataset.placement = "top";

window.addEventListener("resize", () => {
  if (popover.matches(":popover-open")) popover.hidePopover();
  document.documentElement.dataset.resizing = true;
  if (deb) clearTimeout(deb);
  deb = setTimeout(() => {
    document.documentElement.dataset.resizing = false;
  }, 200);
});

placer.addEventListener("click", () => {
  document.documentElement.dataset.placement = document.documentElement.dataset.placement === "top" ? "bottom" : "top";
});

const config = {
  theme: "system",
  debug: false
};

let themeIndex = 0;
const themeOptions = ["system", "light", "dark"];
const switchTheme = () => {
  themeIndex += 1;
  config.theme = themeOptions[themeIndex % 3];
  sync();
};

themer.addEventListener("click", switchTheme);

const switchDebug = () => {
  config.debug = !config.debug;
  sync();
};

debug.addEventListener("click", switchDebug);
const update = () => {
  document.documentElement.dataset.theme = config.theme;
  document.documentElement.dataset.debug = config.debug;
};

const sync = () => {
  if (!document.startViewTransition) return update();
  document.startViewTransition(() => update());
};

update();
const hider = document.querySelector(".hider");
hider.removeAttribute("popovertargetaction");
const reset = () => {
  document.documentElement.dataset.complete = false;
  document.documentElement.style.setProperty("--complete", 0);
  popover.style.setProperty("--ty", 0);
};


popover.addEventListener("toggle", reset);
