import { Metadata } from "next";
import { GetPieces } from "../../utils/piece-helper";
import Link from "next/link";
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
export const metadata: Metadata = {
    title: 'Activepieces - Find apps',
    icons: "/favicon.ico",

}

export default async function FindAppsPage() {
    const pieces = (await GetPieces())
    return (
        <main className="bg-white py-[80px]">
            <section className="container mx-auto px-4 lg:px-0">
                <h1 className="text-h2-sm text-center text-black lg:text-h2-lg">
                    Browse all apps
                </h1>
                <div className="flex gap-6 text-black  lg:text-h4-sm justify-center  mt-[20px] ">
                    {alphabet.map((letter, idx) => <Link key={idx} href={"/find-apps/" + letter.toLowerCase()}>{letter} </Link>)}
                </div>

                <ul className="columns-1 md:columns-2 lg:columns-4 text-black text-h5-sm mt-[40px]">
                    {pieces.map((piece, idx) => <li key={idx} className="underline"> <Link href={"/pieces/" + piece.name}>{piece.displayName}</Link></li>)}
                </ul>
            </section>

        </main>
    )
}