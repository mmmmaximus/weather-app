import { SxProps, Theme, useTheme } from "@mui/material";

export const SearchHistoryBoxSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    paddingX: "20px",
    paddingY: "23px",
    marginTop: "26px",
    textAlign: "start",
    borderRadius: "24px",
    backgroundColor: "#FFFFFF33",

    [breakpoints.down("sm")]: {
      paddingX: "17px",
      paddingY: "22px",
      marginTop: "19.42px",
    },
  };
};

export const SearchHistoryTextSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "21.79px",
    textAlign: "left",
    paddingBottom: "26px",
    paddingLeft: "6px",

    [breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "19.07px",
      paddingLeft: "3px",
    },
  };
};

export const NoRecordTextSx: SxProps<Theme> = {
  fontFamily: "Noto Sans",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "21.79px",
  textAlign: "center",
};
