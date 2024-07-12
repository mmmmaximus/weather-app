import {
  Button,
  SxProps,
  TextField,
  Theme,
  styled,
  useTheme,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { defaultTheme } from "../../../../recoil/theme.state";

export const SearchBarBoxSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    textAlign: "center",
    paddingTop: "26px",

    [breakpoints.down("sm")]: {
      paddingTop: "19px",
    },
  };
};

export const StyledTextField = styled(TextField)(() => {
  const { breakpoints } = useTheme();
  const theme = useRecoilValue(defaultTheme);

  return {
    "& > div:first-of-type": {
      borderRadius: 20,
    },
    marginRight: 20,
    backgroundColor: theme.background.textField,
    width: "620px",

    [breakpoints.down("sm")]: {
      marginRight: 10,
      width: "260px",
      "& > div:first-of-type": {
        borderRadius: 8,
      },
      "& > *:first-of-type": {
        height: 40,
      },
    },
  };
});

export const SearchButton = styled(Button)(() => {
  const { breakpoints } = useTheme();
  const theme = useRecoilValue(defaultTheme);

  return {
    height: 60,
    width: 60,
    backgroundColor: theme.button.backgroundColor,
    borderRadius: 20,

    [breakpoints.down("sm")]: {
      height: 40,
      width: 40,
      minWidth: 32,
      borderRadius: 8,
    },
  };
});

export const SearchIconSx: SxProps<Theme> = () => {
  const { breakpoints } = useTheme();

  return {
    height: 34,
    width: 34,

    [breakpoints.down("sm")]: {
      height: 22.7,
      width: 22.7,
    },
  };
};
