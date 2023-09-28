import { useState, useMemo, createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { theme } from "./Theme.ts";

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    localStorage.getItem("miami-website_theme") !== null
      ? localStorage.getItem("miami-website_theme")
      : "light"
  );

  localStorage.setItem("miami-website_theme", mode);

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  }));

  const themeMode = useMemo(() => createTheme(theme(mode)), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
