import { APIKeys } from "../../../constants";
import { IApiResponse } from "../../../interface";
import { sendRequest } from "../../../services";
import { CORS_URL, WeatherAPIEndpoint } from "../constants";
import { getDataFromLatLonApiResponse } from "../utils";

export const getLatLon = async (country: string): Promise<IApiResponse> => {
  try {
    const cachedLatLon = localStorage.getItem(country.toLowerCase());

    if (cachedLatLon) {
      return { response: JSON.parse(cachedLatLon) };
    }

    const response: any = await sendRequest(
      WeatherAPIEndpoint.getLatLon.method,
      `${CORS_URL}${WeatherAPIEndpoint.getLatLon.uri}`,
      { q: country, appid: APIKeys.OPEN_WEATHER_API_KEY }
    );

    const formattedResponse = getDataFromLatLonApiResponse(response);
    localStorage.setItem(country, JSON.stringify(formattedResponse));

    return { response: formattedResponse };
  } catch (e) {
    return { error: "Not found" };
  }
};
