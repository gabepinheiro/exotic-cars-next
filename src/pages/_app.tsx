import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { MainLayout } from '~/layouts'
import { theme, GlobalStyles } from '~/styles'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp
