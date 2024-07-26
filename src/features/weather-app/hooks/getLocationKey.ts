import { APIKeys } from "../../../constants";
import { IApiResponse } from "../../../interface";
import { sendRequest } from "../../../services";
import { CORS_URL, WeatherAPIEndpoint } from "../constants";
import { getDataFromLocationKeyApiResponse } from "../utils";

export const getLocationKey = async (
  country: string
): Promise<IApiResponse> => {
  try {
    const cachedLatLon = localStorage.getItem(country.toLowerCase());

    if (cachedLatLon) {
      return { response: JSON.parse(cachedLatLon) };
    }

    const response: any = await sendRequest(
      WeatherAPIEndpoint.getLocationKey.method,
      `${CORS_URL}${WeatherAPIEndpoint.getLocationKey.uri}`,
      { q: country, apikey: APIKeys.ACCUWEATHER_API_KEY }
    );

    const formattedResponse = getDataFromLocationKeyApiResponse(response);
    localStorage.setItem(country, JSON.stringify(formattedResponse));

    return { response: formattedResponse };
  } catch (e) {
    return { error: "Please try again tomorrow" };
  }
};
