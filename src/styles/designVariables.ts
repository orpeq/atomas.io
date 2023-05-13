export const colors = {
  primary: {
    background: "#1A1A1A",
    text: "#FFFFFF",
  },
  boxShadow: {
    primary: "0 13px 99px rgba(0, 0, 0, 0.08);",
    forDropdown: "0px 4px 20px rgba(0, 0, 0, 0.12);",
  },
}

export type AppColorsType = typeof colors

export const responsiveBreakPoints = {
  maxSmallPhone: "(max-width: 360px)",
  maxPhone: "(max-width: 480px)",
  maxTablet: "(max-width: 770px)",
  maxSmallDesktop: "(max-width: 1020px)",
  maxLaptopDesktop: "(max-width: 1130px)",
  maxMediumDesktop: "(max-width: 1200px)",
  maxLargeDesktop: "(max-width: 1360px)",
  maxExtraLargeDesktop: "(max-width: 1600px)",
}

export type AppBreakpointsType = typeof responsiveBreakPoints

export const fontSizes = {
  extraSmall: "12px",
  small: "14px",
  default: "16px",
  medium: "18px",
  big: "20px",
  h1: "40px",
  h2: "30px",
}

export type AppFSType = typeof fontSizes

export const lineHeights = {
  small: "16px",
  default: "20px",
  large: "24px",
  big: "28px",
  h1: "45px",
  h2: "36px",
  h3: "34px",
  h4: "32px",
}

export type AppLineHeightsType = typeof lineHeights

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
}

export type AppFontWeightType = typeof fontWeights
