import "@/styles/globals.css"
import { GlobalStyles } from "@styles/globalStyles"
import { atomasDarkTheme } from "@styles/systemDesign"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={atomasDarkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
