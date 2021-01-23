import React from "react";
import store from "../../../redux/store";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../utils/themes";
import { MuiTheme } from "../../../utils/MuiTheme";
// import App from "../../../App";
import { Provider } from "react-redux";

export const TestingWrapper = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <MuiTheme>{children}</MuiTheme>
        </ThemeProvider>
      </Provider>
    </div>
  );
};
