import { SxProps, Theme, useTheme } from "@mui/material";

export const TemperatureBoxSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    [breakpoints.down("sm")]: {
      marginBottom: "-57px",
    },
  };
};

export const TemperatureTextSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "21.79px",
    textAlign: "left",

    [breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "19.07px",
    },
  };
};

export const LargeTemperatureTextSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    fontFamily: "Noto Sans",
    fontSize: "110px",
    fontWeight: "600",
    lineHeight: "21.79px",
    textAlign: "left",
    color: "#6C40B5",
    paddingY: "40px",

    [breakpoints.down("sm")]: {
      fontSize: "65px",
      paddingY: "20px",
    },
  };
};
