import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export function useThemeImplementation() {
  const context = useContext(ThemeContext);
  return context;
}
