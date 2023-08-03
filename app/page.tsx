
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


export const metadata: Metadata = {
  title: 'Activepieces - Home',
  icons: "/favicon.ico",
}



export default async function Home() {
  const pieces = await GetPieces();
  const detailedPieces: DetailedPiece[] = [];
  for (const p of pieces) {
    detailedPieces.push(await GetPiece(p.name));
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