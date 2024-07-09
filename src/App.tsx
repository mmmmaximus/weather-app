import { Button } from "@mui/material";
import { WeatherPage } from "./features";
import { useRecoilState } from "recoil";
import { defaultTheme } from "./recoil/theme.state";
import { DarkTheme, LightTheme } from "./theme";
import { defaultWindowSize } from "./recoil";
import { useEffect } from "react";

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
    <div
      style={{
        backgroundImage: "url(/background-image.png)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundColor: theme.background.app,
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
    </div>
  );
};
