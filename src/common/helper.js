import { BASE_URL, IMAGE_DIR } from "./constants";

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

export const handleError = (err) => {
  console.log("handleError called", err);
  return new Response(
    JSON.stringify({
      code: 400,
      message: "Stupid network Error"
    })
  );
};

const handleResponse = (res) => {
  const {
    output: [{ value }]
  } = res;
  const imagePath = `${IMAGE_DIR}/${value}.jpg`;
  return { value, imagePath };
};

export const fetchKeyMetadata = async (letter) => {
  const url = `${BASE_URL}/bg/${letter}`;
  const request = new Request(url, myInit);
  try {
    const response = await fetch(request); // catch(handleError);
    if (!response.ok) {
      console.log("response not okay");
      const message = `An error thrown: ${response.status}`;
      throw new Error(message);
    }
    const result = await response.json();
    return handleResponse(result);
  } catch (e) {
    console.log(`inside catch block: ${e.message}`);
  }
};
