import {useContext} from "react";
import {ThemeContext} from "./context/ThemeContext";

export function useThemeImplementation() {
  return useContext(ThemeContext);
}
