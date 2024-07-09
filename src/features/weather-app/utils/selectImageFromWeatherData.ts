import { SharedAssets } from "../../../assets";
import { IWeatherData } from "../interface";

export const selectImageFromWeatherData = (
  weatherData: IWeatherData
): string => {
  if (weatherData.weather === "Clouds") {
    return SharedAssets.cloud;
  }
  if (weatherData.weather === "Clear") {
    return SharedAssets.sun;
  }
  return "";
};
