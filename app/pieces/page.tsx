
import { Metadata } from "next";
import { GetPieces } from "../../utils/piece-helper";
import PiecesList from "../../components/pieces/List";


export async function generateMetadata(): Promise<Metadata> {
  const title = "Connect hundreds of apps - Activepieces";
  const description = "Activepieces offers hundreds of apps to choose from to automate your work with. Including Google Sheets, ChatGPT, Asana, ClickUp, Slack, Discord, YouTube, Facebook Leads, and many more."
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


export default async function PiecesPage() {
  const pieces = await GetPieces();
  return (
    <div className="flex justify-center justify-items-center content-center	flex-col bg-white overflow-hidden">
      <div className="bg-[url('/banner.svg')] py-4 md:py-0 bg-no-repeat  sm:bg-[0%_0%] md:bg-[-360px]  bg-black  lg:bg-cover xl:bg-center text-white">
        <section className="h-[305px] flex items-center flex-col mx-auto container justify-center gap-5 mx-auto  text-center md:text-left">
          <h1 className="text-h1-lg text-center  md:text-6xl font-bold">
            Explore pieces
          </h1>
          <h3 className="text-white text-center max-w-[425px] md:max-w-[475px] lg:max-w-[730px] text-[18px] md:text-[22px] font-normal leading-loose tracking-wide">
            Build automations with your favorite apps including Slack, Airtable, Asana and many more. If you can think about it, you can automate it.
          </h3>
        </section>
      </div>
      <PiecesList pieces={pieces} />
    </div>
  );
}


