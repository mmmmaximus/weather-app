import { Box, Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { searchResultState } from "../../../../recoil";
import {
  LargeTemperatureTextSx,
  TemperatureBoxSx,
  TemperatureTextSx,
} from "./TemperatureStyles";

export const Temperature = () => {
  const weatherData = useRecoilValue(searchResultState);

  return (
    <Box sx={TemperatureBoxSx}>
      {weatherData && (
        <>
          <Box sx={TemperatureTextSx}>Today's Weather</Box>
          <Box sx={LargeTemperatureTextSx}>
            {weatherData ? `${Math.round(weatherData?.temperature)}°` : ""}
          </Box>
          <Grid container sx={TemperatureTextSx}>
            {weatherData
              ? `H: ${Math.round(weatherData?.maxTemperature)}°`
              : ""}
            {weatherData
              ? `L: ${Math.round(weatherData?.minTemperature)}°`
              : ""}
          </Grid>
        </>
      )}
    </Box>
  );
};
