import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import "./index.scss";
import { GlobalStyle } from "../styles/global-style";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
