import { Box } from "@mui/material";
import { HistoryRow, HistoryRowProps } from "../history-row";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchHistoryState, searchResultState } from "../../../../recoil";
import { useEffect } from "react";
import { arrayCacheHandler } from "../../../../utils";
import { getRowPropsFromWeatherProps } from "../../utils";
import { MAX_HISTORY_CACHE_LENGTH } from "../../constants";
import {
  NoRecordTextSx,
  SearchHistoryBoxSx,
  SearchHistoryTextSx,
} from "./SearchHistoryStyle";

export const SearchHistory = () => {
  const [searchHistoryList, setSearchHistoryList] =
    useRecoilState<HistoryRowProps[]>(searchHistoryState);
  const searchResult = useRecoilValue(searchResultState);

  useEffect(() => {
    if (searchResult) {
      const newWeatherData = getRowPropsFromWeatherProps(searchResult);
      const newHistoryList = arrayCacheHandler(
        newWeatherData,
        searchHistoryList,
        MAX_HISTORY_CACHE_LENGTH
      );
      setSearchHistoryList(newHistoryList);
    }
  }, [searchResult]);

  return (
    <Box sx={SearchHistoryBoxSx}>
      {searchHistoryList.length > 0 ? (
        <>
          <Box sx={SearchHistoryTextSx}>Search History</Box>
          <Box
            sx={{
              "& > *:not(:last-child)": {
                marginBottom: "18px",
              },
            }}
          >
            {searchHistoryList.map((item, index) => (
              <HistoryRow
                key={index}
                index={index}
                country={item.country}
                countryShortForm={item.countryShortForm}
                dateTime={item.dateTime}
              />
            ))}
          </Box>
        </>
      ) : (
        <Box sx={NoRecordTextSx}>No records</Box>
      )}
    </Box>
  );
};
