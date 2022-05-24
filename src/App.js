import { Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { THEME_CONFIG } from "./configs/AppConfig";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import Views from "./views";
import store from "./redux/store";

const themes = {
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeSwitcherProvider
          themeMap={themes}
          defaultTheme={THEME_CONFIG.currentTheme}
          insertionPoint="styles-insertion-point"
        >
          <Router>
            <Switch>
              <Route path="/" component={Views} />
            </Switch>
          </Router>
        </ThemeSwitcherProvider>
      </Provider>
    </div>
  );
}

export default App;
