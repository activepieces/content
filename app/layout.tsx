import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import localFont from 'next/font/local'

const exodus = localFont({
  src: '../public/EudoxusSans-Medium.woff',
  display: 'swap',
})
export default function RootLayout({ children }:  { children: React.ReactNode }) {
  return (
    <html lang="en">
    
      <body  className={exodus.className+" bg-no-repeat bg-black bg-cover bg-center"} >
    
      <Navbar></Navbar>
     
        {children}
        
       <Footer></Footer>
       </body>
      
    
    </html>
  )
}