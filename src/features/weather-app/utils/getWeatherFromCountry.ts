import { IApiResponse } from "../../../interface";
import { getLatLon, getWeatherData } from "../hooks";

export const getWeatherFromCountry = async (country: string) => {
  const latLonResponse: IApiResponse = await getLatLon(country);
  if (latLonResponse.error) {
    return latLonResponse;
  }

  const weatherDataResponse: IApiResponse = await getWeatherData(
    latLonResponse.response,
    country
  );
  if (weatherDataResponse.error) {
    return weatherDataResponse;
  }

  return weatherDataResponse;
};
