
import { Metadata } from "next";
import { GetPieces } from "../../utils/piece-helper";
import PiecesList from "../../components/pieces/List";
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'Activepieces - Pieces',
  icons: "/favicon.ico",
}

export default async function PiecesPage() {
  const pieces = await GetPieces();
  return (
    <div className="flex justify-center justify-items-center content-center	flex-col bg-white overflow-hidden">
      <div className="bg-[url('/banner.svg')] py-4 md:py-0 bg-no-repeat bg-[-720px] sm:bg-[0%_0%] md:bg-[-360px] lg:bg-[0%_0%]   bg-cover xl:bg-center text-white">
        <section className="h-[305px] flex flex-col mx-auto container justify-center gap-5 mx-auto  text-center md:text-left">
          <h1 className="text-2xl  md:text-4xl lg:text-6xl font-bold">
            Explore connectors
          </h1>
          <h3 className="text-white max-w-[425px] md:max-w-[450px] lg:max-w-[715px] text-[18px] md:text-[22px] font-normal leading-loose tracking-wide">
            Activepieces have a lot of app connectors that can help you connect your product with others and move the data most easily.
          </h3>
        </section>

      </div>

      <PiecesList pieces={pieces} />
      <Image
        src="/clouds.svg"
        alt="Clouds"
        width={1440}
        height={545}
        className="w-full -mt-[115px] -mb-[200px]"
      ></Image>

    </div>
  );
}


