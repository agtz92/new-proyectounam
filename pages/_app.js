import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import "@/styles/globals.css"
import Script from "next/script"
import { Inter } from "next/font/google"

// Variable font: one file covers every weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={inter.className}>
        <Nav />
        <main id="contenido">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>

      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-0529X1RN3D"
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0529X1RN3D');
        `}
      </Script>
      <Script
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7182528185795867"
        crossOrigin="anonymous"
      />
    </>
  )
}
