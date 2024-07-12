import { SxProps, Theme, useTheme } from "@mui/material";

export const IconButtonSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    left: 0,
    position: "fixed",
    height: "60px",
    width: "60px",
    margin: "26px",

    [breakpoints.down("sm")]: {
      left: "auto",
      position: "static",
      height: "40px",
      width: "40px",
      marginTop: "19px",
      marginX: 0,
      marginBottom: 0,
    },
  };
};
