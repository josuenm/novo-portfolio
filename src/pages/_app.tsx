import type { AppProps } from 'next/app'
import { ContactProvider } from 'src/contexts/contact'
import GlobalStyle from 'src/styles/GlobalStyle'
import { theme } from 'src/styles/theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContactProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContactProvider>
  )
}

export default MyApp
