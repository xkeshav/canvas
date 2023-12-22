let BASE_URL = "http://localhost:3003";
let IMAGE_DIR = "/images/background";
console.log("inside production");

if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://bnm1w7hj00.execute-api.us-east-1.amazonaws.com/master/canvas";
  IMAGE_DIR = "https://d2fcibdfky04dz.cloudfront.net/background";
}

console.log("environment==>", process.env.NODE_ENV);

export const colorBox = ["#f00000", "#38c138", "#0a6de8", "#e69110", "#1b1818", "#632363", "#f1e904", "#102923", "#000000", "#d4d4d4"];

export const htmlPageNames = ["about", "canvas", "draw", "varnmala", "math"];

export const numberBox = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  0: "zero"
};

export const fontBox = ["MudraMohta", "boisuStroke", "atkinson", "sportrop", "Ananda", "boisuStroke", "Roboto"];

export { BASE_URL, IMAGE_DIR };
