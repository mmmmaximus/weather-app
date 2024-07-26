import { APIKeys } from "../../../constants";
import { IApiResponse } from "../../../interface";
import { sendRequest } from "../../../services";
import { CORS_URL, WeatherAPIEndpoint } from "../constants";
import { ICountryName } from "../interface";
import { getDataFromWeatherApiResponse } from "../utils";

export const getWeatherData = async (
  countryObj: ICountryName
): Promise<IApiResponse> => {
  try {
    const response: any = await sendRequest(
      WeatherAPIEndpoint.getWeatherData.method,
      `${CORS_URL}${WeatherAPIEndpoint.getWeatherData.uri}`,
      {
        locationKey: countryObj.locationKey,
        apikey: APIKeys.ACCUWEATHER_API_KEY,
        details: "true",
      }
    );

    return {
      response: getDataFromWeatherApiResponse(
        response,
        countryObj.country,
        countryObj.countryShortForm
      ),
    };
  } catch (e) {
    return { error: e as string };
  }
};
