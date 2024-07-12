import { Box } from "@mui/material";
import { WeatherPage } from "./features";
import { useRecoilState, useRecoilValue } from "recoil";
import { defaultTheme } from "./recoil/theme.state";
import { defaultWindowSize } from "./recoil";
import { useEffect } from "react";
import { SharedAssets } from "./assets";

export const App = () => {
  const theme = useRecoilValue(defaultTheme);
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
      <WeatherPage />;
    </Box>
  );
};
