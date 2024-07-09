import { atom } from "recoil";
import { LightTheme } from "../theme";

const defaultState = LightTheme;

export const defaultTheme = atom<any>({
  key: "defaultTheme",
  default: defaultState,
});
