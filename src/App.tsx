import { Box, Button } from "@mui/material";
import { WeatherPage } from "./features";
import { useRecoilState } from "recoil";
import { defaultTheme } from "./recoil/theme.state";
import { DarkTheme, LightTheme } from "./theme";
import { defaultWindowSize } from "./recoil";
import { useEffect } from "react";
import { SharedAssets } from "./assets";

export const App = () => {
  const [theme, setTheme] = useRecoilState(defaultTheme);
  const [windowSize, setWindowSize] = useRecoilState(defaultWindowSize);

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ ...windowSize, width: window.innerWidth });
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.background.app,
        backgroundImage: `url(${SharedAssets.backgroundImage})`,
      }}
    >
      {windowSize.width < 576 ? (
        <></>
      ) : (
        <Button
          sx={{
            backgroundColor: "white",
            position: "absolute",
            margin: "20px",
          }}
          onClick={() => {
            if (theme === LightTheme) {
              setTheme(DarkTheme);
            } else {
              setTheme(LightTheme);
            }
          }}
        >
          Change Theme
        </Button>
      )}
      <WeatherPage />;
    </Box>
  );
};
