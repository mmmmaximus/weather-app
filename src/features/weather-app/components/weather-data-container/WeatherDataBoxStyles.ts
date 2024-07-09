import { Box, SxProps, Theme, styled, useTheme } from "@mui/material";

export const TempAndWeatherPicGridSx: SxProps<Theme> = () => {
  return {
    display: "flex",
    justifyContent: "space-between",
  };
};

export const TempAndWeatherPicBox = styled(Box)(() => {
  const { breakpoints } = useTheme();

  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "300px",

    [breakpoints.down("sm")]: {
      width: "157px",
    },
  };
});

export const WeatherDataBoxSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    border: "1px solid rgba(255, 255, 255, 0.5)",
    backgroundColor: "#FFFFFF33",

    borderRadius: "40px",
    marginX: "25.7%",
    marginTop: "112px",
    paddingX: "40px",
    paddingBottom: "40px",

    [breakpoints.down("sm")]: {
      borderRadius: "20px",
      marginX: "4.2%",
      marginTop: "139px",
      paddingX: "20px",
      paddingBottom: "20px",
    },
  };
};
