import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="text-center lg:text-left container mx-auto px-4 text-gray-200  py-20 lg:py-10 ">
      <div className="flex justify-between flex-wrap border-b border-solid border-[#242424] pb-4">
        <div className="flex flex-col gap-4 basis-full lg:basis-[initial]">
          <Link href="/">
            <Image
              src="https://cdn.activepieces.com/brand/full-logo-white.svg"
              alt="Activepieces Logo"
              width={215}
              height={35}
              className="w-[152px] h-[25px] lg:w-[215px] inline lg:h-[35px]"
            />
          </Link>
          <div >
            <p className="text-lg text-[#ffffffb3]">
              Open source, free and self-hosted no-code business automation tool.
            </p>
            <p className="text-lg text-[#ffffffb3]">
              The open source alternative to Zapier.
            </p>
          </div>
          <Link href='https://discord.com/invite/2jUXBKDdP8' className="text-green underline mt-4">
            Join our Discord Community
          </Link>

        </div>
        <aside className=" basis-full lg:basis-[initial]">
          <nav className="flex flex-col gap-1 lg:gap-2  text-lg mt-9">
            <Link href='https://www.activepieces.com/terms8' className="text-white underline ">
              Terms of Service
            </Link>
            <Link href='https://www.activepieces.com/privacy' className="text-white underline">
              Privacy Policy
            </Link>
            <Link href='https://www.activepieces.com/google-api-discloure' className="text-white underline ">
              Google API Disclousure
            </Link>
            <div id="spacer1">
              &nbsp;
            </div>


            <Link href='https://www.activepieces.com/blog/best-zapier-competitors-and-alternatives' className="text-white underline ">
              Best Zapier competitors
            </Link>
            <Link href='https://www.activepieces.com/blog/top-workato-alternatives-and-competitors' className="text-white underline">
              Best Workato alternatives
            </Link>
            <Link href='https://www.activepieces.com/blog/automate-blog-writing-with-ai-a-step-by-step-guide-using-openai' className="text-white underline ">
              Automate Blog with AI
            </Link>
          </nav>

        </aside>

      </div>
      <div className="text-[#ffffffb3] pt-4">
        ©2023 <b>Activepieces, Inc.</b> All rights reserved.
      </div>
    </footer>
  );
}
