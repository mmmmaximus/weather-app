import { SxProps, Theme, useTheme } from "@mui/material";

export const HistoryRowButtonStyles: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    height: "34px",
    borderRadius: "50%",
    marginX: "5px",
    minWidth: "34px",
    backgroundColor: "white",
    marginY: "13px",

    [breakpoints.down("sm")]: {
      marginX: "4.86px",
    },
  };
};
