import { HTTPMethod } from "../constants";

export const sendRequest = async (
  method: HTTPMethod,
  url: string,
  params?: any
) => {
  const urlWithParams = params
    ? `${url}?${new URLSearchParams(params).toString()}`
    : url;

  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json", // Default for most APIs
      },
    };

    const response = await fetch(urlWithParams, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
