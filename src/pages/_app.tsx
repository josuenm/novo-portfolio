import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import LoadingScreen from 'src/components/LoadingScreen'
import { ContactProvider } from 'src/contexts/contact'
import GlobalStyle from 'src/styles/GlobalStyle'
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

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    window.onload = () => setIsLoaded(true)

    if (process.env.NODE_ENV === "production") disableReactDevTools();
  }, [])

  if(!isLoaded) return <LoadingScreen />
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
