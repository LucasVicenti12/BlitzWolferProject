import { PaletteMode } from "@mui/material";
import { blue } from "@mui/material/colors";

export const theme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: blue[900],
          },          
          background: {
            primary: "#ffffff",
            secondary: "#f5f5f5",
          },
          text: {
            primary: "#000000",
            secondary: "#747474",
            variant: "#000B0A",
            alternative: "#ffffff",
          },          
        }
      : {
          primary: {
            main: "#66B2FF",
          },          
          background: {
            primary: "#181818",
            secondary: "#121212",
          },
          text: {
            primary: "#ffffff",
            secondary: "#747474",
            variant: "#000B0A",
            alternative: "#ffffff",
          },          
        }),
  },
});
