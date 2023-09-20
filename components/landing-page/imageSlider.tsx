import Image from "next/image";
import vmware from './slider-images/vmware.svg';
import pipefy from './slider-images/pipefy.svg';
import spotify from './slider-images/spotify.svg';
import un from './slider-images/un.svg';
import writer from './slider-images/writer.svg';
import browserStack from './slider-images/browserStack.svg';
import coinHouse from './slider-images/coinHouse.svg';
import retool from './slider-images/retool.svg';
import pipedrive from './slider-images/pipedrive.svg';
import samsung from './slider-images/samsung.svg';
import gainsight from './slider-images/gainsight.svg';
import digitalOcean from './slider-images/digitalOcean.svg';
import veeva from './slider-images/veeva.svg';
import sonder from './slider-images/sonder.svg';
import dhl from './slider-images/dhl.svg';
import dialog360 from './slider-images/dialog360.svg';
import secondWatch from './slider-images/secondWatch.svg';

const supportedCompanies = [
  { logo: pipefy, alt: 'pipefy' },
  { logo: spotify, alt: 'spotify' },
  { logo: un, alt: 'united nation' },
  { logo: writer, alt: 'Writer' },
  { logo: browserStack, alt: 'BrowserStack' },
  { logo: coinHouse, alt: 'CoinHouse' },
  { logo: retool, alt: 'retool' },
  { logo: pipedrive, alt: 'pipedrive' },
  { logo: samsung, alt: 'samsung' },
  { logo: gainsight, alt: 'gainSight' },
  { logo: digitalOcean, alt: 'digitalOcean' },
  { logo: veeva, alt: 'Veeva' },
  { logo: sonder, alt: 'Sonder' },
  { logo: dhl, alt: 'DHL' },
  { logo: dialog360, alt: '360 dialog' },
  { logo: secondWatch, alt: '2nd watch' },
  { logo: vmware, alt: 'vmware' },
];

const companies = Array.from({ length: 20 }, () => supportedCompanies).flat();


const ImageSlider = () => {

  return (
    <div className="flex relative w-full h-[30px] lg:h-[40px]  overflow-hidden">
      <div
        className="flex absolute image-slider gap-[25px] lg:gap-[60px] items-center"
      >
        {companies.map((company, index) => (
          <div
            key={index}
          >
            <Image height={40} loading="eager" src={company.logo} alt={company.alt} className="h-[30px] lg:h-[40px]  w-auto" style={{
              objectFit: "contain",

            }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
