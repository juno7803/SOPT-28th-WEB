import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import "./index.scss";
import { GlobalStyle } from "../styles/global-style";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";
import { client } from "../lib/api";

const App = ({ Component, pageProps }: AppProps) => {
  const fetcher = (url: string) => client.get(url);
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <RecoilRoot>
          <GlobalStyle />
          <Component {...pageProps} />
        </RecoilRoot>
      </SWRConfig>
    </ThemeProvider>
  );
};

export default App;
