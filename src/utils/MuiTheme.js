import React from "react";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as ThemeProviderMui } from "@material-ui/core/styles";
// import { lightTheme, darkTheme } from "../themes";
import { StylesProvider } from "@material-ui/styles";

export const MuiTheme = ({ children }) => {
  const theme = createMuiTheme({
    // typography: {
    //   fontFamily: [lightTheme.utils.fontFamily],
    // },
    // palette: {
    //   text: {
    //     primary: lightTheme.colors.primary,
    //   },
    //   primary: {
    //     light: lightTheme.colors.accent,
    //     main: lightTheme.colors.accent,
    //     dark: lightTheme.colors.accent,
    //     contrastText: "#ffffff",
    //   },
    // },
    overrides: {
      MuiInput: {
        input: {
          "&::placeholder": {},
        },
      },
    },
  });

  return (
    <ThemeProviderMui theme={theme}>
      <StylesProvider injectFirst>{children}</StylesProvider>
    </ThemeProviderMui>
  );
};
