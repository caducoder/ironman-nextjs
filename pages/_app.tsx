import type { AppProps } from 'next/app'
import GlobalStyle from '../src/theme/GlobalStyle'
import Document from './_document'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
