import { capitalizeEveryWord } from "../../../utils";
import { HistoryRowProps } from "../components";
import { ICountryName, IWeatherData } from "../interface";

export const getDataFromWeatherApiResponse = (
  weatherData: any,
  country: string,
  countryShortForm: string
): IWeatherData => {
  const formatTemp = (str: any) =>
    Number(str["Metric"]["Value"].toString().split(".")[0]);

  return {
    temperature: formatTemp(weatherData[0]["Temperature"]),
    maxTemperature: formatTemp(
      weatherData[0]["TemperatureSummary"]["Past24HourRange"]["Maximum"]
    ),
    minTemperature: formatTemp(
      weatherData[0]["TemperatureSummary"]["Past24HourRange"]["Minimum"]
    ),
    weather: weatherData[0]["WeatherText"],
    country: capitalizeEveryWord(country),
    countryShortForm: countryShortForm.toUpperCase(),
    dateTime: weatherData[0]["EpochTime"],
    humidity: weatherData[0]["RelativeHumidity"],
  };
};

export const getDataFromLocationKeyApiResponse = (
  locationKeyData: any
): ICountryName => {
  return {
    locationKey: locationKeyData[0]?.["Key"],
    country: locationKeyData[0]?.["EnglishName"],
    countryShortForm: locationKeyData[0]?.["Country"]["ID"],
  };
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
