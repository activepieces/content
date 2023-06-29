import { useEffect, useState } from "react";
import PieceLogo from "../../components/PieceLogo";
import { GetPiece, GetPieces, PieceBase } from "../../utils/piece-helper";
import Image from "next/image";

export function Index() {
  const [BasePieces, setBasePieces] = useState<PieceBase[]
  >([]);
  useEffect(() => {
    GetPieces().then((pieces) => {
      setBasePieces(pieces);
    });
  }, []);

  return (
    <div className="flex justify-center justify-items-center content-center	flex-col">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 m-5">
          {BasePieces.map((piece, i) => {
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
                  <PieceLogo pieceLogoUrl={piece.logoUrl} size={70} />
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
