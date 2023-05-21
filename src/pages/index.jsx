import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home page Sun LyHuor</title>
      </Head>
      <section>
        <h1>Home Page</h1>
      </section>
      
    </main>
  )
}
