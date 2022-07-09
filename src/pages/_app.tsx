import dynamic from 'next/dynamic'
import GlobalStyle from 'src/styles/GlobalStyle'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { ContactProvider } from 'src/contexts/contact'
import { theme } from 'src/styles/theme'
import { disableReactDevTools } from 'src/utils/devTools'
import { ThemeProvider } from 'styled-components'


const TopProgressBar = dynamic(
  () => {
    return import("src/components/TopProgressBar");
  },
  { ssr: false },
);




function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (process.env.NODE_ENV === "production") disableReactDevTools();
  }, [])

  return(
    <ContactProvider>
      <ThemeProvider theme={theme}>
        <TopProgressBar />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContactProvider>
  )
}

export default MyApp
