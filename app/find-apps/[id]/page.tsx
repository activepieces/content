import { Metadata } from "next";

import Link from "next/link";
import { NavigationProps } from "../../../components/navigationProps";
import { GetPieces } from "../../../utils/piece-helper";
import { allPiecesSort, corePieces } from "../../../components/utils";
import { redirect } from "next/navigation";
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

export function generateMetadata(
    { params }: NavigationProps,
): Metadata {
    return {
        title: `All apps starting with ${params.id} - Connect your apps with Activepieces`,
        description: `Explore all apps that start with ${params.id} on Activepieces. Connect hundreds of apps to automate your business without writing code.`,
        icons: "/favicon.ico",
        openGraph: {
            title: `All apps starting with ${params.id} - Connect your apps with Activepieces`,
            description: `Explore all apps that start with ${params.id} on Activepieces. Connect hundreds of apps to automate your business without writing code.`,
            siteName: "Activepieces",
            images: [
                {
                    url: "https://www.activepieces.com/meta2.png",
                    width: 1200,
                    height: 630,
                    alt: "Activepieces",
                },
            ],
            url: "https://www.activepieces.com/",
        }
    };
}

export default async function FindAppsPage({ params }: NavigationProps) {
    const pieces = (await GetPieces());
    if (!pieces) {
        redirect("/404")
    }
    const allPieces = [...pieces, ...corePieces].sort(allPiecesSort);
    const filteredPieces = allPieces
        .filter((piece) => params.id ? (typeof piece === "string" ? piece.startsWith(params?.id.toLowerCase()) : piece.displayName.toLowerCase().startsWith(params?.id.toLowerCase())) : true);
    return (
        <main className="bg-white py-[80px] min-h-[80vh]">
            <section className="container mx-auto px-4 lg:px-0">
                <h1 className="text-h2-sm text-center text-black lg:text-h2-lg">
                    {`Browse apps starting with ${params.id.toUpperCase()}`}
                </h1>
                <div className="flex gap-6 text-black  flex-wrap lg:text-h4-sm justify-center  mt-[20px] ">
                    {alphabet.map((letter, idx) => <Link key={idx} href={"/find-apps/" + letter.toLowerCase()}>{letter} </Link>)}
                </div>

                <ul className="columns-1 md:columns-2 lg:columns-4 text-black text-h5-sm mt-[40px]">
                    {filteredPieces.map((piece, idx) => <li key={idx} className="underline">
                        {
                            piece === "webhook" ? <Link href={`/pieces/webhook`}>Webhook</Link> :
                                piece === "loops" ? <Link href={`/pieces/loops`}>Loops</Link> :
                                    piece === "branches" ? <Link href={`/pieces/branches`}>Branches</Link> :
                                        <Link href={`/pieces/${piece.name.replace(
                                            "@activepieces/piece-",
                                            ""
                                        )}?`} > {piece.displayName}</Link>
                        }
                    </li>)}
                </ul>
                {pieces.length === 0 && <div className="text-h5-sm text-center text-black "> No apps found </div>}
            </section>

        </main>
    )
}