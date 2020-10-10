import Head from 'next/head'
import '../styles/home.css'

export default function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
  <title>Covid-19 Tracker</title>
  </Head>
  <Component {...pageProps} />
  </>
  )
}
