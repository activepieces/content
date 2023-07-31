import Image from "next/image";


interface PieceLogoProps {
  pieceLogoUrl: string;
  size: number;
  imgClasses: string;
}

const PieceLogo = ({ pieceLogoUrl, size, imgClasses }: PieceLogoProps) => {
  return (
    <div className="bg-white rounded-lg p-2.5 border border-outline flex justify-center items-center" >
      <Image
        src={pieceLogoUrl}
        alt="Description of image"
        width={size}
        height={size}
        className={imgClasses}
      />
    </div>
  );
};

export default PieceLogo;
