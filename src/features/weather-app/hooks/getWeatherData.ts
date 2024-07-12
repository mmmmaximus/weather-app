import { APIKeys } from "../../../constants";
import { IApiResponse } from "../../../interface";
import { sendRequest } from "../../../services";
import { CORS_URL, WEATHER_BASE_URL, WeatherAPIEndpoint } from "../constants";
import { ILatLon } from "../interface";
import { getDataFromWeatherApiResponse } from "../utils";

export const getWeatherData = async (
  { lat, lon }: ILatLon,
  country?: string
): Promise<IApiResponse> => {
  try {
    const response: any = await sendRequest(
      WeatherAPIEndpoint.getWeatherData.method,
      `${CORS_URL}${WEATHER_BASE_URL}${WeatherAPIEndpoint.getWeatherData.uri}`,
      { lat, lon, appid: APIKeys.OPEN_WEATHER_API_KEY, units: "metric" }
    );

    return { response: getDataFromWeatherApiResponse(response, country) };
  } catch (e) {
    return { error: e as string };
  }
};
