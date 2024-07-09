import { SxProps, Theme, useTheme } from "@mui/material";

export const AdditionalWeatherInfoTextSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "21.79px",
    textAlign: "left",
    color: "#666666",

    [breakpoints.down("sm")]: {
      textAlign: "right",
    },
  };
};
