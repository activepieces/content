import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import localFont from 'next/font/local'

const exodus = localFont({
  src: [
    {
      path:'../public/EudoxusSans-Regular.woff2',
      weight:'400'
    },
    {
      path:'../public/EudoxusSans-Medium.woff',
      weight:'500'
    },
    {
      path:'../public/EudoxusSans-Bold.woff2',
      weight:'700'
    },
  ],
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