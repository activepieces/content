import Image from "next/image";
import React from "react";

interface PieceLogoProps {
  pieceLogoUrl: string;
  size: number;
}

const PieceLogo = ({ pieceLogoUrl, size }: PieceLogoProps) => {
  return (
    <div className="bg-white rounded-md border border-outline flex justify-center items-center" style={{ width: `${size}px`, height: `${size}px` }}>
      <Image
        src={pieceLogoUrl}
        alt="Description of image"
        width={size - 24}
        height={size- 24}
      />
    </div>
  );
};

export default PieceLogo;
