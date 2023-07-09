
'use client';

import { useState } from "react";
import { PieceBase } from "../../utils/piece-helper";
import PieceLogo from "./PieceLogo";

const PiecesList = ( {pieces} : {pieces:PieceBase[]} ) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredPieces = pieces.filter((piece) =>
    piece.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
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
    );
  };
  export default PiecesList;



