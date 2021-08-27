import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/themes";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
};

export default MyApp;
