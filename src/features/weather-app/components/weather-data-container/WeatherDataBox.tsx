import { Box, CircularProgress, Grid } from "@mui/material";
import {
  TempAndWeatherPicBox,
  TempAndWeatherPicGridSx,
  WeatherDataBoxSx,
} from "./WeatherDataBoxStyles";
import { SearchHistory } from "../search-history";
import { Temperature } from "../temperature";
import { AdditionalWeatherInfo } from "../additional-weather-info";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  defaultWindowSize,
  isLoadingResultState,
  searchResultState,
} from "../../../../recoil";
import { selectImageFromWeatherData } from "../../utils";
import { useEffect } from "react";

export const WeatherDataBox = () => {
  const isLoading = useRecoilValue(isLoadingResultState);
  const weatherData = useRecoilValue(searchResultState);
  const [windowSize, setWindowSize] = useRecoilState(defaultWindowSize);

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ ...windowSize, width: window.innerWidth });
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={WeatherDataBoxSx}>
      {isLoading ? (
        <Box sx={{ marginTop: "26px", textAlign: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid sx={TempAndWeatherPicGridSx}>
            {/* temp and H L */}
            <TempAndWeatherPicBox
              sx={{
                paddingTop: windowSize.width < 576 ? "20px" : "46px",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Temperature />
            </TempAndWeatherPicBox>

            {/* weather img */}
            <TempAndWeatherPicBox
              sx={{ marginBottom: "15px", alignItems: "end" }}
            >
              {weatherData && (
                <img
                  style={{
                    marginTop: "-100px",
                    width: windowSize.width < 576 ? 157 : 300,
                    height: "auto",
                  }}
                  alt={weatherData.weather}
                  src={selectImageFromWeatherData(weatherData)}
                />
              )}
            </TempAndWeatherPicBox>
          </Grid>

          {/* more detail */}
          <AdditionalWeatherInfo />
        </>
      )}

      {/* search history */}
      <SearchHistory />
    </Box>
  );
};
