import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ContactProvider } from 'src/contexts/contact'
import GlobalStyle from 'src/styles/GlobalStyle'
import { theme } from 'src/styles/theme'
import { ThemeProvider } from 'styled-components'

const TopProgressBar = dynamic(
  () => {
    return import("src/components/TopProgressBar");
  },
  { ssr: false },
);


function MyApp({ Component, pageProps }: AppProps) {
  return (
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
