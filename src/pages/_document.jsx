import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta http-equiv="X-UA-Compatible" content="IE=7" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
