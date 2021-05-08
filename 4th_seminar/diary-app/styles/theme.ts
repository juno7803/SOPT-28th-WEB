import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black_1: "#363636",
    orange: "#ff7134",
    orange_hover: "#ff7e33",
    gray_2: "#f3f3f3",
    white: "#ffffff",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  1440: customMediaQuery(1440),
  768: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
