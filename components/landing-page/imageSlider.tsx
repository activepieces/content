import Image from "next/image";
import vmware from './slider-images/vmware.svg';
import swile from './slider-images/swile.svg';
import pipefy from './slider-images/pipefy.svg';
import sequoia from './slider-images/sequoia.svg';
import spotify from './slider-images/spotify.svg';
const supportedPieces = [
  vmware,
  swile,
  pipefy,
  sequoia,
  spotify
];

const repeatedPieces = Array.from({ length: 8 }, () => supportedPieces).flat();


const ImageSlider = () => {

  return (
    <div className="flex relative w-full h-[30px] lg:h-[60px]  overflow-hidden">
      <div
        className="flex absolute image-slider gap-[25px] lg:gap-[50px] items-center"
      >
        {repeatedPieces.map((piece, index) => (
          <div
            key={index}
          >
            <Image src={piece} alt="Integration logo" className="h-[30px] lg:h-[60px]" style={{
              objectFit: "contain",

            }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
