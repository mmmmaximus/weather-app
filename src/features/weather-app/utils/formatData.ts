import { capitalizeEveryWord } from "../../../utils";
import { HistoryRowProps } from "../components";
import { ILatLon, IWeatherData } from "../interface";

export const getDataFromWeatherApiResponse = (
  weatherData: any,
  country?: string
): IWeatherData => {
  return {
    temperature: weatherData.main.temp,
    maxTemperature: weatherData.main.temp_max,
    minTemperature: weatherData.main.temp_min,
    weather: weatherData.weather[0].main,
    country: capitalizeEveryWord(country ?? weatherData.name),
    countryShortForm: weatherData.sys.country,
    dateTime: weatherData.dt,
    humidity: weatherData.main.humidity,
  };
};

export const getDataFromLatLonApiResponse = (latLonData: any): ILatLon => {
  const data = latLonData.results[0];
  const lat = (
    (data.bounds.northeast.lat + data.bounds.southwest.lat) /
    2
  ).toString();
  const lon = (
    (data.bounds.northeast.lng + data.bounds.southwest.lng) /
    2
  ).toString();
  const country =
    data.components?.city ?? data.components?.state ?? data.components?.country;
  return { country, lat, lon };
};

export const getRowPropsFromWeatherProps = (
  weatherData: IWeatherData
): HistoryRowProps => {
  return {
    country: weatherData.country,
    countryShortForm: weatherData.countryShortForm,
    dateTime: weatherData.dateTime,
  };
};
