import '@/css/tailwind.css'
  
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { AnimateSharedLayout } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (


    <AnimateSharedLayout>
  
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  </AnimateSharedLayout>



  )
}
