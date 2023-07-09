'use client';
import { useEffect, useState } from "react";
import { GetPieces, PieceBase } from "../../utils/piece-helper";
import Image from "next/image";
import PieceLogo from "../../components/pieces/PieceLogo";



export function Index() {
  const [BasePieces, setBasePieces] = useState<PieceBase[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    GetPieces().then((pieces) => {
      setBasePieces(pieces);
    });
  }, []);

  const filteredPieces = BasePieces.filter((piece) =>
    piece.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div className="max-w-[800px] mx-auto">
        <div className="m-5">
          <input
            type="text"
            placeholder="Search for apps"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="h-full overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 m-5">
          {filteredPieces.map((piece, i) => {
            return (
              <div
                className="p-5 rounded-lg text-center cursor-pointer hover:bg-whiteCard-100"
                key={piece.displayName}
                onClick={() => {
                  window.location.href = `/pieces/${piece.name.replace(
                    "@activepieces/piece-",
                    ""
                  )}?version=${piece.version}`;
                }}
              >
                <div className="flex flex-row items-center">
                  <PieceLogo pieceLogoUrl={piece.logoUrl} size={40} />
                  <p className="ml-4 text-base ">{piece.displayName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
