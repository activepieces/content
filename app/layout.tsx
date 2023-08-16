import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GithubStickyWidget } from '../components/GithubStickyWidget'
import '../styles/globals.css'
import { Lato } from 'next/font/google'
import { PHProvider, PostHogPageview } from './providers'
import { Suspense } from 'react'
import Script from 'next/script'
import { getStars } from '../components/utils'
import { CokkieConsent } from '../components/CookieConsent'


const lato = Lato({ subsets: ['latin'], weight: ['700', '400', '300', '100'], variable: '--font-inter', display: 'swap', adjustFontFallback: false },)
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const stars = await getStars();
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-BL60V50BXE" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-BL60V50BXE');
        `}
      </Script>
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className={lato.className + "  relative bg-no-repeat bg-black bg-cover bg-center"} >

          <Navbar stars={stars}></Navbar>

          {children}

          <Footer></Footer>
          <GithubStickyWidget stars={stars}></GithubStickyWidget>

        </body>
      </PHProvider>
    </html>
  )
}