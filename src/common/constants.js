//const BASE_URL = "http://localhost:3003";
//const IMAGE_DIR = "../assets/images/background/";

const BASE_URL = "https://bnm1w7hj00.execute-api.us-east-1.amazonaws.com/master/canvas";
const IMAGE_DIR = "https://d2fcibdfky04dz.cloudfront.net/background";
console.log("environment==>", process.env.NODE_ENV);

export { BASE_URL, IMAGE_DIR };
