import { Provider } from "react-redux";
import Root from "./shared/routes/Root";
import { CustomThemeProvider } from "./shared/theme/context/ThemeContext";
import store from "./shared/store/store";

function App() {
  return (
    <CustomThemeProvider>
      <Provider store={store}>
        <Root />
      </Provider>
    </CustomThemeProvider>
  );
}

export default App;
