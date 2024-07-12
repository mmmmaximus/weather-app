import { Box, Grid, IconButton } from "@mui/material";
import { SharedAssets } from "../../../assets";
import { SearchBar, WeatherDataBox } from "../components";
import { getWeatherFromCountry } from "../utils";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isLoadingResultState, searchResultState } from "../../../recoil";
import { defaultTheme } from "../../../recoil/theme.state";
import { DarkTheme, LightTheme } from "../../../theme";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButtonSx } from "./WeatherPageStyles";

export const WeatherPage = () => {
  const [theme, setTheme] = useRecoilState(defaultTheme);
  const setSearchResults = useSetRecoilState(searchResultState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingResultState);

  return (
    <Box sx={{ height: "inherit" }}>
      <Grid container justifyContent="center">
        <IconButton
          sx={IconButtonSx}
          onClick={() => {
            console.log(theme.background.themeButton);

            if (theme === LightTheme) {
              setTheme(DarkTheme);
            } else {
              setTheme(LightTheme);
            }
          }}
        >
          {theme === LightTheme ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
        <SearchBar
          label={"Country"}
          handleSearch={getWeatherFromCountry}
          searchResultSetter={setSearchResults}
          icon={SharedAssets.searchIconLight}
          isLoadingGetter={isLoading}
          isLoadingSetter={setIsLoading}
        />
      </Grid>
      <WeatherDataBox />
    </Box>
  );
};
