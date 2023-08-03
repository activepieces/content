import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GithubStickyWidget } from '../components/GithubStickyWidget'
import '../styles/globals.css'
import { Lato } from 'next/font/google'
const getStars = async () => {
  try {
    const repo = await fetch("https://api.github.com/repos/activepieces/activepieces", {
    });
    const repoData = await repo.json();
    const stars = repoData.stargazers_count;
    return stars;
  } catch (ex) {
    return 0;
  }

}
const lato = Lato({ subsets: ['latin'], weight: ['700', '400', '300', '100'] })
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const stars = await getStars();
  return (
    <html lang="en">

      <body className={lato.className + "relative bg-no-repeat bg-black bg-cover bg-center"} >

        <Navbar stars={stars}></Navbar>

        {children}

        <Footer></Footer>
        <GithubStickyWidget stars={stars}></GithubStickyWidget>
      </body>


    </html>
  )
}