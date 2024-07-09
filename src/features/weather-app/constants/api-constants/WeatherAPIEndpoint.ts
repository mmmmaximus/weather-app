import { HTTPMethod } from "../../../../constants";

export const WEATHER_BASE_URL = "http://api.openweathermap.org";

export const WeatherAPIEndpoint = {
  getLatLon: {
    uri: "/geo/1.0/direct",
    method: HTTPMethod.GET,
  },
  getWeatherData: {
    uri: "/data/2.5/weather",
    method: HTTPMethod.GET,
  },
};
