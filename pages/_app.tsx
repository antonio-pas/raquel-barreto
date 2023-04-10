import { Inter } from '@next/font/google';
import '@/styles/globals.css'
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import type { AppProps } from 'next/app'
import NavbarItem from '@/components/NavbarItem';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Raquel Barreto</title>
        <meta name="description" content="Raquel Barreto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={inter.className}>
        <Navbar>
          <NavbarItem link="/">
            raquel barreto
          </NavbarItem>
          <NavbarItem link="/about" underline>
            shows
          </NavbarItem>
        </Navbar>
      </nav>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

