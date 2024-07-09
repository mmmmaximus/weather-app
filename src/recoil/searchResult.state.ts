import { atom, selector } from "recoil";
import { HistoryRowProps, IWeatherData } from "../features";

const defaultState = {
  searchResult: undefined,
  searchHistory: [],
  isLoadingResult: false,
};

export const defaultSearchState = atom<any>({
  key: "defaultSearchState",
  default: defaultState,
});

export const searchResultState = selector<IWeatherData>({
  key: "searchResultState",
  get: ({ get }) => {
    return get(defaultSearchState).searchResult;
  },
  set: ({ get, set }, newValue) => {
    const state = get(defaultSearchState);
    set(defaultSearchState, { ...state, searchResult: newValue });
  },
});

export const searchHistoryState = selector<HistoryRowProps[]>({
  key: "searchHistoryState",
  get: ({ get }) => {
    return get(defaultSearchState).searchHistory;
  },
  set: ({ get, set }, newValue) => {
    const state = get(defaultSearchState);
    set(defaultSearchState, { ...state, searchHistory: newValue });
  },
});

export const isLoadingResultState = selector<boolean>({
  key: "isLoadingResultState",
  get: ({ get }) => {
    return get(defaultSearchState).isLoadingResult;
  },
  set: ({ get, set }, newValue) => {
    const state = get(defaultSearchState);
    set(defaultSearchState, { ...state, isLoadingResult: newValue });
  },
});
