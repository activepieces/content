import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className=" lg:text-left   text-[#C3C3C3]  bg-[#000000]">
      <div className="px-4 lg:px-0 flex items-center h-[1px]">
        <div className="w-full border-[#242424] border-solid border-t">

        </div>
      </div>
      <div className="flex container mx-auto px-4 lg:px-0 flex-wrap border-solid pb-[80px] pt-[40px] ">
        <div className="flex flex-col gap-4 basis-full lg:basis-[initial] lg:mr-[150px] mb-[80px] lg:mb-0">

          <Link className="text-center lg:text-left" href="/">
            <Image
              src="https://cdn.activepieces.com/brand/full-logo-white.svg"
              alt="Activepieces Logo"
              width={215}
              height={35}
              className="w-[152px] h-[25px] lg:w-[215px] inline lg:h-[35px]"
            />
            <div className="text-white pt-4">
              ©{new Date().getFullYear()} Activepieces, Inc.
            </div>
          </Link>
        </div>

        <nav className="text-lg  flex flex-wrap justify-center  gap-[118px] lg:gap-[180px]">
          <div>
            <div className="font-bold mb-[35px] text-white">
              Product
            </div>
            <div className="flex flex-col gap-[25px]">
              <Link className="hover:text-white" href="/features">Features </Link>
              <Link className="hover:text-white" href="/pricing">Pricing</Link>
              <Link className="hover:text-white" href="/pieces">Pieces</Link>
            </div>

          </div>


          <div>
            <div className="font-bold mb-[35px] text-white">
              Open source
            </div>
            <div className="flex flex-col gap-[25px]">
              <Link className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://github.com/activepieces/activepieces">Github </Link>
              <Link className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://www.activepieces.com/docs/developers/overview">Contribute</Link>
              <Link className="hover:text-white" href="https://github.com/activepieces/activepieces/blob/main/LICENSE" target="_blank" rel="noopener noreferer">MIT License</Link>
            </div>

          </div>
          <div>
            <div className="font-bold mb-[35px] text-white">
              Resources
            </div>
            <div className="flex flex-col gap-[25px]">
              {/* <Link className="hover:text-white" href="/blog?category=tutorials" target="_blank" rel="noopener noreferer">Tutorials</Link> */}
              <Link className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://www.activepieces.com/docs/">Docs </Link>
              <Link className="hover:text-white" href="/blog">Blog</Link>
            </div>

          </div>
          <div>
            <div className="font-bold mb-[35px] text-white">
              Get Help
            </div>
            <div className="flex flex-col gap-[25px]">
              {/* <Link className="hover:text-white" href="typeformURL" target="_blank" rel="noopener noreferer">Support</Link> */}
              <Link className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://discord.com/invite/2jUXBKDdP8">Discord </Link>
              <Link className="hover:text-white" target="_blank" rel="noopener noreferer" href="https://status.activepieces.com/">System Status</Link>
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
          Backed by <Image src="/Y_Combinator.svg" height={40.3} width={140} alt="Y Combinator"></Image>
        </div>
        <div className="flex gap-[15px] w-[210px] flex-wrap md:w-[initial] justify-center lg:justify-start mt-[40px] lg:mt-0">
          <Link className="hover:text-white" href="/privacy">Privacy</Link>
          <div>-</div>
          <Link className="hover:text-white" href="/terms">Terms</Link>
          <div>-</div>
          <Link className="hover:text-white" href="/google-api-disclosure">Google API Disclosure</Link>
        </div>
      </div>

    </footer>
  );
}
