import { HTTPMethod } from "../constants";

export const sendRequest = async (
  method: HTTPMethod,
  url: string,
  params?: any
) => {
  const paramsToString = new URLSearchParams(params).toString();
  const urlWithParams = params ? `${url}?${paramsToString}` : url;

  try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, urlWithParams);

    const response = await new Promise((resolve, reject) => {
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error(`Error: ${xhr.statusText}`));
        }
      };
      xhr.send();
    });

    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};
