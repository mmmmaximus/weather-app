import { HTTPMethod } from "../../../../constants";

export const LOCAL_CORS_URL = `http://localhost:${
  process.env.REACT_APP_CORS_PORT || "8080"
}`;

export const CORS_URL = process.env.REACT_APP_CORS_URL;

export const WeatherAPIEndpoint = {
  getLocationKey: {
    uri: "/api/locationKey",
    method: HTTPMethod.GET,
  },
  getWeatherData: {
    uri: "/api/weather",
    method: HTTPMethod.GET,
  },
};
