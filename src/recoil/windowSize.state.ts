import { atom } from "recoil";

type WindowDimensions = { width: number; height: number };

const defaultState: WindowDimensions = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const defaultWindowSize = atom<WindowDimensions>({
  key: "defaultWindowSize",
  default: defaultState,
});
