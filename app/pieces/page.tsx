
import { Metadata } from "next";
import { GetPieces } from "../../utils/piece-helper";
import PiecesList from "../../components/pieces/List";

export const metadata: Metadata = {
  title: 'Activepieces - Pieces'
}

export async function  PiecesPage() {
  const pieces = await GetPieces();
  return (
    <div className="flex justify-center justify-items-center content-center	flex-col bg-white">
    <div className="bg-[url('/banner.svg')] bg-no-repeat bg-[-620px] sm:bg-[0%_0%] md:bg-[-360px] lg:bg-[0%_0%]   bg-cover xl:bg-center text-white">
    <section className="h-[305px] flex flex-col justify-center gap-5 mx-auto md:mx-[20%] w-[200px] md:w-[500px] text-center md:text-left lg:w-[800px]">
    <h1 className="text-2xl  md:text-4xl lg:text-6xl font-bold">
    Explore connectors
    </h1>
    <h3 className="text-white max-w-[425px] md:max-w-[450px] lg:max-w-[715px] text-[18px] md:text-[22px] font-normal leading-loose tracking-wide">
     Activepieces have a lot of app connectors that can help you connect your product with others and move the data most easily.
    </h3>
    </section>
   
    </div>

    <PiecesList pieces={pieces} />
    </div>
  );
}

export default PiecesPage;
