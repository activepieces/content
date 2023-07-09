
import { Metadata } from "next";
import Image from "next/image";
import { GetPieces } from "../../utils/piece-helper";
import PiecesList from "../../components/pieces/List";

export const metadata: Metadata = {
  title: 'Activepieces - Pieces'
}

export async function  PiecesPage() {
  const pieces = await GetPieces();
  return (
    <div className="flex justify-center justify-items-center content-center	flex-col bg-white">
      <div>
        <Image
          src="/banner.svg"
          alt="Pieces Banner"
          width={100}
          height={100}
          className="block w-full"
        />
      </div>
    <PiecesList pieces={pieces} />
    </div>
  );
}

export default PiecesPage;
