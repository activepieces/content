
import { Metadata } from "next";
import { VotingPageMainSection } from "../../components/voting/VotingMainSection";
import { VotingSectionServer } from "../../components/voting/VotingSectionServer";
export const dynamic = 'force-dynamic'
export async function generateMetadata(): Promise<Metadata> {
  const title = "Request a piece - Activepieces";
  const description = "Vote for/suggest apps you would like to automate with Activepieces, the no-code business automation tool for all your work"
  return {
    title: title,
    description: description,
    icons: "/favicon.ico",
    openGraph: {
      title: title,
      description: description,
      siteName: "Activepieces",
      images: [
        {
          url: "https://www.activepieces.com/meta1.png",
          width: 1200,
          height: 630,
          alt: "Activepieces",
        },
      ],
      url: "https://www.activepieces.com",
    }
  };
}
export default function PiecesVoting() {
  return <>
    <VotingPageMainSection></VotingPageMainSection>
    <VotingSectionServer></VotingSectionServer>
  </>
}