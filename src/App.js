import Root from "./shared/routes/Root";
import { CustomThemeProvider } from "./shared/theme/context/ThemeContext";

function App() {
  return (
    <CustomThemeProvider>
      <Root />
    </CustomThemeProvider>
  );
}

export default App;
