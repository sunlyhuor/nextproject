import '@/styles/globals.css'
import Head from 'next/head'
import AOS from "aos"

export default function App({ Component, pageProps }) {
  
  // AOS.init({});

  return (
    <>
      <Head>
          <meta charSet='utf-8' />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta http-equiv="X-UA-Compatible" content="IE=7" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
