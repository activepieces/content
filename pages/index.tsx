import Image from "next/image";
import ImageSlider from "../components/imageSlider";

export const pieceLogoUrl = "https://cdn.activepieces.com/brand/logo.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={pieceLogoUrl}
          alt="Description of image"
          width={84}
          height={84}
        />
        <h1 className="text-5xl font-bold text-center mt-8 text-white max-w-[600px]">
          Open Source <br></br>Place Holder Page
        </h1>
        <p className="text-center mt-8 text-gray-200">
          Our mission is to make everyone more productive by automating their
          work.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-4 py-2 bg-primary text-white rounded-md">
            Get Started Free
          </button>
        </div>
      </div>
      <div className="mt-16"></div>
      <ImageSlider />
    </main>
  )
}
