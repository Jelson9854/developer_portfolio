import NavBar from '@/component/NavBar';
import '@/styles/globals.css'
import {Cormorant_Garamond} from 'next/font/google'
import Head from 'next/head';

const corm = Cormorant_Garamond({
  subsets: ['cyrillic'],
  variable: "--font-corm",
  weight: '400',
  display: 'swap',
});


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${corm.variable} font-corm bg-light w-full min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  </>
  );
}


