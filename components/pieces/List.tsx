
'use client';

import { useRef, useState } from "react";
import { PieceBase } from "../../utils/piece-helper";
import PieceLogo from "./PieceLogo";
import Link from "next/link";

const PiecesList = ({ pieces }: { pieces: PieceBase[] }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllResults, setShowAllResults] = useState(false);
  const filteredPieces = pieces.filter((piece) =>
    piece.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const mapPieceToHTML = (pieces: PieceBase[]) => pieces.map((piece, i) => {
    return (
      <Link
        className="p-5 basis-full md:basis-1/3 h-[110px] rounded-lg text-center cursor-pointer hover:bg-whiteCard-100 "
        key={piece.displayName}
        href={`/pieces/${piece.name.replace(
          "@activepieces/piece-",
          ""
        )}?version=${piece.version}`}
      >
        <div className="flex flex-row items-center">
          <PieceLogo pieceLogoUrl={piece.logoUrl} size={40} />
          <p className="ml-4 text-h3-sm text-black font-bold ">{piece.displayName}</p>
        </div>
      </Link>
    );
  });
  const allFilteredPieces = () => <>{mapPieceToHTML(filteredPieces)}</>
  const first30FilteredPieces = () => <>{mapPieceToHTML(filteredPieces.slice(0, 30))}</>
  return (
    <div className="flex-col gap-4 flex justify-center items-center px-1 my-24">
      <div className=" flex flex-col container w-full  gap-10  mb-10">
        <div className="flex justify-center">
          <div className="flex  justify-center w-full gap-0 h-[56px] flex-row-reverse">
            <input
              type="text"
              placeholder="Search for pieces"
              className="peer w-full py-2 pr-2 rounded-r-md border-r border-y border-gray-300 focus:outline-none focus:border-blue-500"
              value={searchTerm}
              ref={searchInput}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowAllResults(false);
              }}
            />
            <div onClick={() => searchInput.current?.focus()} className="bg-white cursor-pointer  px-2 rounded-l-md border-l border-y border-gray-300  peer-focus:outline-none peer-focus:border-blue-500 flex flex-items-center">
              <img src="search.svg" alt="search for pieces" width={'30px'} height={'30px'} />
            </div>
          </div>
        </div>
        <div className="px-[25px] text-black">
          <div className="text-neutral-900 text-lg font-medium  tracking-wide">
            All pieces
          </div>
          <div className="mt-[20px] text-black text-opacity-60 text-lg font-normal tracking-wide">
            {(showAllResults ? "All" : "1-30") + " of " + filteredPieces.length + " available pieces"}
          </div>
        </div>
        <div className="flex  flex-wrap">
          {filteredPieces.length > 0 ? (filteredPieces.length > 30 ? (showAllResults ? allFilteredPieces() : first30FilteredPieces()) : allFilteredPieces())
            : <div className="text-center text-gray-400 basis-full">No pieces found</div>}
        </div>
      </div>
      {!showAllResults && filteredPieces.length > 0 ? <button className="leading-[38px]  text-center text-h4-lg transition-all py-5 px-[75px]  bg-black font-bold  border border-solid border-black rounded mb-5 text-white"
        onClick={() => setShowAllResults(true)}>
        Load more
      </button> : null}

    </div>

  );
};
export default PiecesList;



