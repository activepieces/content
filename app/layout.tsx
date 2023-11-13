import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GithubStickyWidget } from '../components/GithubStickyWidget'
import '../styles/globals.css'
import { Lato } from 'next/font/google'
import { Suspense } from 'react'
import Script from 'next/script'
import { getStars } from '../components/utils'
import { CokkieConsent } from '../components/CookieConsent'


const lato = Lato({ subsets: ['latin'], weight: ['700', '400', '300', '100'], variable: '--font-inter', display: 'swap', adjustFontFallback: false },)
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const stars = await getStars();
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TR47MDDQ');
            `,
          }}
        />

        <Script async src="https://tally.so/widgets/embed.js" />
      </head>
        <body className={lato.className + "  relative bg-no-repeat bg-black bg-cover bg-center"} >
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TR47MDDQ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          />

          <Navbar stars={stars}></Navbar>

          {children}

          <Footer></Footer>
          <GithubStickyWidget stars={stars}></GithubStickyWidget>

        </body>
      {/*</PHProvider>*/}
    </html>
  )
}