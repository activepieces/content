import Image from "next/image";
import React from "react";

interface PieceLogoProps {
  pieceLogoUrl: string;
  size: number;
}

const PieceLogo = ({ pieceLogoUrl, size }: PieceLogoProps) => {
  return (
    <div className="bg-white rounded-lg p-2.5 border border-outline flex justify-center items-center" >
      <Image
        src={pieceLogoUrl}
        alt="Description of image"
        width={size}
        height={size}
      />
    </div>
  );
};

export default PieceLogo;
