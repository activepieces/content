
import { Metadata } from 'next';
import MainSection from '../components/landing-page/MainSection';
import OpenSourceSection from '../components/landing-page/OpenSourceSection';
import AiSection from '../components/landing-page/AiSection';
import LeadsSection from '../components/landing-page/LeadsSection';
import Productivity100XSection from '../components/landing-page/Productivity100XSection';
import CenterOfWorldSection from '../components/landing-page/CenterOfWorldSection';
import CombinationsMakerSection from '../components/landing-page/CombinationsMakerSection';
import { AutomateWithActivepieces } from '../components/animated-curtains/AutomateWithActivepieces';
import { ComparisionSection } from '../components/landing-page/ComparisonSection';
import { PiecesDictionarySection } from '../components/landing-page/PiecesDictionarySection';
import { DetailedPiece, GetPiece, GetPieces } from '../utils/piece-helper';
import { aiTemplates, generateTemplateFromDependencies, leadsTemplatesDeps, productivityTemplatesDeps } from '../components/flowTemplateGenerator';
import { redirect } from 'next/navigation';



export async function generateMetadata(): Promise<Metadata> {
  const title = "Activepieces - The open source business automation software - Zapier alternative";
  const description = "Automate your work with Activepieces for free. Trusted by thousands of users who run millions of automated tasks every month. The perfect alternative to Zapier that can be self-hosted or used on the cloud."

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



export default async function Home() {
  const pieces = await GetPieces();
  const detailedPieces: DetailedPiece[] = [];
  if (!pieces) { redirect("/404"); }
  for (const p of pieces) {
    const piece = await GetPiece(p.name);
    if (piece) {
      detailedPieces.push(piece);
    }
  }
  const leadsTemplates = leadsTemplatesDeps.map((t) => generateTemplateFromDependencies(t.description, detailedPieces, t.trigger, t.action));
  const productivityTemplates = productivityTemplatesDeps.map((t) => generateTemplateFromDependencies(t.description, detailedPieces, t.trigger, t.action));
  return (<>

    <MainSection></MainSection>
    <OpenSourceSection></OpenSourceSection>
    <AiSection templates={aiTemplates}></AiSection>
    <LeadsSection templates={leadsTemplates}></LeadsSection>
    <CenterOfWorldSection pieces={detailedPieces}></CenterOfWorldSection>
    <Productivity100XSection templates={productivityTemplates}></Productivity100XSection>
    <CombinationsMakerSection></CombinationsMakerSection>
    <ComparisionSection></ComparisionSection>
    <AutomateWithActivepieces></AutomateWithActivepieces>
    <PiecesDictionarySection></PiecesDictionarySection>
  </>

  )
}