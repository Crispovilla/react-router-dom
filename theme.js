import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};
const colors = {
  primary: "rgba(255, 255, 255, 0.08)", // whiteAlpha 200
  secondary: "rgba(255, 255, 255, 0.80)", // whiteAlpha 800
  accent: "rgba(0, 0, 0, 0.48)", // blackAlpha 600
};

// Internally, we transform to this
const theme = extendTheme({ ...breakpoints, ...colors });
export default theme;
