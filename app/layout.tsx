import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['700', '400'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body className={lato.className + " bg-no-repeat bg-black bg-cover bg-center"} >

        <Navbar></Navbar>

        {children}

        <Footer></Footer>
      </body>


    </html>
  )
}