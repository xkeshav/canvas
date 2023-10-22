import { BASE_URL } from "./constants";

const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json"
});

const myInit = {
  method: "GET",
  headers: headers,
  cache: "default",
  mode: "cors"
};

//export const handleError = (err) => {
//  console.log("handleError called", err);
//  return new Response(
//    JSON.stringify({
//      code: 400,
//      message: "Stupid network Error"
//    })
//  );
//};

export const fetchKeyMetadata = async (letter) => {
  const url = `${BASE_URL}/bg/${letter}`;
  const request = new Request(url, myInit);
  try {
    const response = await fetch(request); // catch(handleError);
    if (!response.ok) {
      const message = `An error thrown: ${response.status}`;
      throw new Error(message);
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(`inside catch block: ${e.message}`);
  }
};

export const isUserUsingMobile = () => {
  // User agent string method
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Screen resolution method
  if (!isMobile) {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    isMobile = screenWidth < 768 || screenHeight < 768;
  }

  // Touch events method
  if (!isMobile) {
    isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

  // CSS media queries method
  if (!isMobile) {
    const bodyElement = document.getElementsByTagName("body")[0];
    isMobile = window.getComputedStyle(bodyElement).getPropertyValue("content").indexOf("mobile") !== -1;
  }

  return isMobile;
};
