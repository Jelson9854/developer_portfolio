import NavBar from '@/component/NavBar';
import '@/styles/globals.css'
import {Cormorant_Garamond} from 'next/font/google'
import Head from 'next/head';
import Footer from '@/component/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: "--font-cormo",
  weight: "500",
});


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${cormorant.variable} font-cormo bg-light w-full min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  </>
  );
}


