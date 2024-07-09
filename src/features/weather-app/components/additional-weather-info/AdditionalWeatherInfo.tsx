import { useRecoilState, useRecoilValue } from "recoil";
import { defaultWindowSize, searchResultState } from "../../../../recoil";
import { Box, Grid } from "@mui/material";
import { formatDateTime } from "../../../../utils";
import { AdditionalWeatherInfoTextSx } from "./AdditionalWeatherInfoStyles";
import { useEffect } from "react";

export const AdditionalWeatherInfo = () => {
  const weatherData = useRecoilValue(searchResultState);
  const [windowSize, setWindowSize] = useRecoilState(defaultWindowSize);

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ ...windowSize, width: window.innerWidth });
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {weatherData ? (
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              ...AdditionalWeatherInfoTextSx,
              color: "#666666",
              fontWeight: "700",
              alignContent: "end",
            }}
          >
            {`${weatherData?.country}, ${weatherData?.countryShortForm}`}
          </Box>
          {windowSize.width < 576 ? (
            <Box>
              <Box
                sx={{
                  ...AdditionalWeatherInfoTextSx,
                  color: "#666666",
                  paddingBottom: "13px",
                }}
              >{`${weatherData?.weather}`}</Box>
              <Box
                sx={{
                  ...AdditionalWeatherInfoTextSx,
                  color: "#666666",
                  paddingBottom: "13px",
                }}
              >
                Humidity: {`${weatherData?.humidity}`}%
              </Box>
              <Box sx={AdditionalWeatherInfoTextSx}>
                {`${
                  weatherData?.dateTime
                    ? formatDateTime(weatherData?.dateTime)
                    : ""
                }`}
              </Box>
            </Box>
          ) : (
            <>
              <Box sx={AdditionalWeatherInfoTextSx}>
                {`${
                  weatherData?.dateTime
                    ? formatDateTime(weatherData?.dateTime)
                    : ""
                }`}
              </Box>
              <Box sx={AdditionalWeatherInfoTextSx}>
                Humidity: {`${weatherData?.humidity}`}%
              </Box>
              <Box
                sx={AdditionalWeatherInfoTextSx}
              >{`${weatherData?.weather}`}</Box>
            </>
          )}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};
