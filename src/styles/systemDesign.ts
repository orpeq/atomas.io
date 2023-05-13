import { DefaultTheme } from "styled-components"

import {
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  responsiveBreakPoints,
} from "./designVariables"

export const atomasDarkTheme: DefaultTheme = {
  theme: "atomas-dark",
  colors: colors,
  media: responsiveBreakPoints,
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  fontWeights: fontWeights,
}
