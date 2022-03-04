import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      BrightRed: "hsl(12, 88%, 59%)",
      BrightRedLight: "hsla(12, 88%, 59%, 0.8)",
      DarkBlue: "hsl(228, 39%, 23%)",
      DarkGrayishBlue: "hsl(227, 12%, 61%)",
      VeryDarkBlue: "hsl(233, 12%, 13%)",
      VeryPaleRed: "hsl(13, 100%, 96%)",
      VaryLightGray: "hsl(0, 0%, 98%)",
    },
  },
  fonts: {
    heading: `Be Vietnam Pro, ${base.fonts.heading}`,
    body: `Be Vietnam Pro,  ${base.fonts.body}`,
  },
});

export default theme;
