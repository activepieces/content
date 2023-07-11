
'use client';

import { useRef, useState } from "react";
import { PieceBase } from "../../utils/piece-helper";
import PieceLogo from "./PieceLogo";

const PiecesList = ( {pieces} : {pieces:PieceBase[]} ) => {
    const searchInput = useRef<HTMLInputElement>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredPieces = pieces.filter((piece) =>
    piece.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
      <div className="max-w-screen-xl mx-auto px-1">
    <div className=" flex flex-col   gap-10 my-[100px] ">
       <div className="flex justify-center">
       <div className="flex  justify-center w-full gap-0 h-[56px] flex-row-reverse">
      <input
        type="text"
        placeholder="Search for apps"
        className="peer w-full py-2 pr-2 rounded-r-md border-r border-y border-gray-300 focus:outline-none focus:border-blue-500"
        value={searchTerm}
        ref={searchInput}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       <div onClick={()=>searchInput.current?.focus()} className="bg-white cursor-pointer  px-2 rounded-l-md border-l border-y border-gray-300  peer-focus:outline-none peer-focus:border-blue-500 flex flex-items-center">
          <img src="search.svg" alt="search for pieces" width={'30px'} height={'30px'}/>
      </div>
      </div>
       </div>
     
       
    
      <div className="flex  flex-wrap">
      {filteredPieces.length> 0? filteredPieces.map((piece, i) => {
         return (
           <div
             className="p-5 basis-full md:basis-1/3 h-[110px] rounded-lg text-center cursor-pointer hover:bg-whiteCard-100 "
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
       }) : <div className="text-center text-gray-400 basis-full">No pieces found</div>}
      </div>
     </div> 
      </div>
    
    );
  };
  export default PiecesList;



