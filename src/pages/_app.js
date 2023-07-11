import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from "gtag"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-QGNX4Z4Z06"></Script>
          <Script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-QGNX4Z4Z06');
            `}
      </Script>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

<script type="text/javascript" id="zsiqchat"></script>