import { SharedAssets } from "../../../assets";
import { IWeatherData } from "../interface";

export const selectImageFromWeatherData = (
  weatherData: IWeatherData
): string => {
  if (weatherData.weather.toLowerCase().includes("cloud")) {
    return SharedAssets.cloud;
  }
  if (weatherData.weather.toLowerCase().includes("sun")) {
    return SharedAssets.sun;
  }
  return "";
};
