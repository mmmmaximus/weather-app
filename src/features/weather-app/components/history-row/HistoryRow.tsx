import { Box, Grid } from "@mui/material";
import { formatDateTime } from "../../../../utils";
import { IWeatherData } from "../../interface";
import { getWeatherFromCountry } from "../../utils";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  defaultWindowSize,
  searchHistoryState,
  searchResultState,
} from "../../../../recoil";
import { useCallback, useEffect } from "react";
import { SharedAssets } from "../../../../assets";
import { HistoryRowButton } from "../history-row-button";
import { HistoryRowStyles } from "./HistoryRowStyles";

export type HistoryRowProps = Pick<
  IWeatherData,
  "country" | "countryShortForm" | "dateTime"
> & { index?: number };

export const HistoryRow = ({
  index,
  country,
  countryShortForm,
  dateTime,
}: HistoryRowProps) => {
  const setSearchResults = useSetRecoilState(searchResultState);
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryState);
  const [windowSize, setWindowSize] = useRecoilState(defaultWindowSize);

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ ...windowSize, width: window.innerWidth });
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const searchHandler = useCallback(async () => {
    const searchResult = await getWeatherFromCountry(country);
    setSearchResults(searchResult.response);
  }, [country, setSearchResults]);

  const deleteHandler = useCallback(
    (index: number) => {
      const newSearchHistory = searchHistory
        .slice(0, index)
        .concat(searchHistory.slice(index + 1));
      setSearchHistory(newSearchHistory);
    },
    [searchHistory, setSearchHistory]
  );

  const renderRowContebnt = () => {
    if (windowSize.width < 576) {
      console.log("small");

      return (
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item sx={{ display: "block", paddingLeft: "10px" }}>
            <Box
              sx={{
                fontFamily: "Noto Sans",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19.07px",
                paddingTop: "13px",
                paddingBottom: "2px",
                alignContent: "center",
              }}
            >
              {country}, {countryShortForm}
            </Box>
            <Box
              sx={{
                fontFamily: "Noto Sans",
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "13.62px",
                paddingBottom: "13px",
                alignContent: "center",
              }}
            >
              {dateTime ? formatDateTime(dateTime) : ""}
            </Box>
          </Grid>
          <Grid item>
            <Grid container sx={{ paddingRight: "2.42px" }}>
              <HistoryRowButton
                onClick={searchHandler}
                icon={SharedAssets.searchRowLight}
              />
              <HistoryRowButton
                onClick={() => deleteHandler(index as number)}
                icon={SharedAssets.deleteRowLight}
              />
            </Grid>
          </Grid>
        </Grid>
      );
    }

    return (
      <>
        <Box
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "21.79px",
            textAlign: "left",
            paddingY: "21px",
            paddingLeft: "21px",
            alignContent: "center",
          }}
        >
          {country}, {countryShortForm}
        </Box>
        <Grid item>
          <Grid container sx={{ paddingRight: "8px" }}>
            <Box
              sx={{
                fontFamily: "Noto Sans",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "19.07px",
                paddingY: "21px",
                paddingRight: "5px",
                alignContent: "center",
              }}
            >
              {dateTime ? formatDateTime(dateTime) : ""}
            </Box>
            <HistoryRowButton
              onClick={searchHandler}
              icon={SharedAssets.searchRowLight}
            />
            <HistoryRowButton
              onClick={() => deleteHandler(index as number)}
              icon={SharedAssets.deleteRowLight}
            />
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <Grid container sx={HistoryRowStyles}>
      {renderRowContebnt()}
    </Grid>
  );
};
