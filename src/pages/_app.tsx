import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { ThemeProvider } from 'styled-components'
import { ScrollTopButton } from '~/components'
import { ToastContainer } from 'react-toastify'
import { MainLayout } from '~/layouts'
import { theme, GlobalStyles } from '~/styles'

import 'react-toastify/dist/ReactToastify.css'

function MyApp ({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <ToastContainer />
        <ScrollTopButton />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
