import Image from "next/image";
import { ApLink } from "./MyLink";
export default function Footer() {
  return (
    <footer className=" lg:text-left   text-[#C3C3C3]  bg-[#000000]">
      <div className="px-4 lg:px-0 flex items-center h-[1px]">
        <div className="w-full border-[#242424] border-solid border-t">

        </div>
      </div>
      <div className="flex container mx-auto px-4 lg:px-0 flex-wrap border-solid pb-[80px] pt-[40px] ">
        <div className="flex flex-col gap-4 basis-full lg:basis-[initial] lg:mr-[150px] mb-[80px] lg:mb-0">

          <ApLink className="text-center lg:text-left" href="/">
            <Image
              src="https://cdn.activepieces.com/brand/full-logo-white.svg"
              alt="Activepieces Logo"
              width={215}
              height={35}
              className="w-[152px] h-[25px] lg:w-[215px] inline lg:h-[35px]"
            />
            <div className="text-white py-4">
              ©{new Date().getFullYear()} Activepieces, Inc.
            </div>
          </ApLink>
        </div>

        <nav className="text-lg  flex flex-wrap justify-center  gap-[118px] lg:gap-[180px]">
          <div>
            <div className="font-bold mb-[35px] text-white">
              Product
            </div>
            <div className="flex flex-col gap-[25px]">
              <ApLink className="hover:text-white" href="/features">Features </ApLink>
              <ApLink className="hover:text-white" href="/pricing">Pricing</ApLink>
              <ApLink className="hover:text-white" href="/pieces">Pieces</ApLink>
              <ApLink className="hover:text-white" href="/pieces-roadmap">Pieces Roadmap</ApLink>
            </div>

          </div>


          <div>
            <div className="font-bold mb-[35px] text-white">
              Open Source
            </div>
            <div className="flex flex-col gap-[25px]">
              <ApLink className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://github.com/activepieces/activepieces">GitHub </ApLink>
              <ApLink className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://www.activepieces.com/docs/developers/overview">Contribute</ApLink>
              <ApLink className="hover:text-white" href="https://github.com/activepieces/activepieces/blob/main/LICENSE" target="_blank" rel="noopener noreferer">MIT License</ApLink>
            </div>

          </div>
          <div>
            <div className="font-bold mb-[35px] text-white">
              Resources
            </div>
            <div className="flex flex-col gap-[25px]">
              {/* <ApLink className="hover:text-white" href="/blog?category=tutorials" target="_blank" rel="noopener noreferer">Tutorials</ApLink> */}
              <ApLink className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://www.activepieces.com/docs/">Docs </ApLink>
              <ApLink className="hover:text-white" href="/blog">Blog</ApLink>
            </div>

          </div>
          <div>
            <div className="font-bold mb-[35px] text-white">
              Get Help
            </div>
            <div className="flex flex-col gap-[25px]">
              {/* <ApLink className="hover:text-white" href="typeformURL" target="_blank" rel="noopener noreferer">Support</ApLink> */}
              <ApLink className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://community.activepieces.com/">Community </ApLink>
              <ApLink className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://discord.com/invite/2jUXBKDdP8">Discord </ApLink>
              <ApLink className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://status.activepieces.com/">System Status</ApLink>
            </div>

          </div>
        </nav>


      </div>
      <div className="px-4 lg:px-0 flex items-center h-[1px]">
        <div className="w-full border-[#242424] border-solid border-t">

        </div>
      </div>
      <div className="px-4 lg:px-0 flex items-center h-[1px]">
        <div className="w-full border-[#242424] border-solid border-t">
        </div>
      </div>
      <div className="mx-auto container  flex-wrap items-center px-4 lg:px-0 flex justify-center lg:justify-between py-[40px] ">
        <div className="flex items-center text-lg gap-[10px] text-white ">
          Backed by <Image src="/Y_Combinator.svg" height={40.3} width={140} className="w-[140px] h-auto" alt="Y Combinator"></Image>
        </div>
        <div className="flex gap-[15px] w-[210px] flex-wrap md:w-[initial] justify-center lg:justify-start mt-[40px] lg:mt-0">
          <ApLink className="hover:text-white" href="/privacy">Privacy</ApLink>
          <div>-</div>
          <ApLink className="hover:text-white" href="/terms">Terms</ApLink>
          <div>-</div>
          <ApLink className="hover:text-white" href="/google-api-disclosure">Google API Disclosure</ApLink>
        </div>
      </div>

    </footer>
  );
}
