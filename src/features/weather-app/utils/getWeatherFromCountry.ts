import { IApiResponse } from "../../../interface";
import { getLocationKey, getWeatherData } from "../hooks";

export const getWeatherFromCountry = async (country: string) => {
  const latLonResponse: IApiResponse = await getLocationKey(country);
  if (latLonResponse.error) {
    return latLonResponse;
  }

  const weatherDataResponse: IApiResponse = await getWeatherData(
    latLonResponse.response
  );
  if (weatherDataResponse.error) {
    return weatherDataResponse;
  }

  return weatherDataResponse;
};
