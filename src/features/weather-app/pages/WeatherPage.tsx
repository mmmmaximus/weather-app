import { Box } from "@mui/material";
import { SharedAssets } from "../../../assets";
import { SearchBar, WeatherDataBox } from "../components";
import { getWeatherFromCountry } from "../utils";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isLoadingResultState, searchResultState } from "../../../recoil";

export const WeatherPage = () => {
  const setSearchResults = useSetRecoilState(searchResultState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingResultState);

  return (
    <Box sx={{ height: "inherit" }}>
      <SearchBar
        label={"Country"}
        handleSearch={getWeatherFromCountry}
        searchResultSetter={setSearchResults}
        icon={SharedAssets.searchIconLight}
        isLoadingGetter={isLoading}
        isLoadingSetter={setIsLoading}
      />
      <WeatherDataBox />
    </Box>
  );
};
