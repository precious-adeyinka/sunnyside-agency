import '../styles/globals.css'
import '../styles/utils.css'

import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress height={6} color={'hsl(167, 40%, 24%)'} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
