import { Metadata } from "next";
import { GetPieces } from "../../utils/piece-helper";
import { allPiecesSort, corePieces } from "../../components/utils";
import { ApLink } from "../../components/MyLink";
import { redirect } from "next/navigation";
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
export const metadata: Metadata = {
    title: 'All apps - Connect your apps with Activepieces',
    icons: "/favicon.ico",
    openGraph: {
        title: `All apps starting - Connect your apps with Activepieces`,
        description: `Explore all the apps on Activepieces. Connect hundreds of apps to automate your business without writing code.`,
        siteName: "Activepieces",
        images: [
            {
                url: "https://www.activepieces.com/meta1.png",
                width: 1200,
                height: 630,
                alt: "Activepieces",
            },
        ],
        url: "https://www.activepieces.com/",
    }
}

export default async function FindAppsPage() {
    const pieces = (await GetPieces());
    if (!pieces) {
        redirect("/404");
    }
    const allPieces = [...pieces, ...corePieces].sort(allPiecesSort);

    return (
        <main className="bg-white py-[80px] min-h-[80vh]">
            <section className="container mx-auto px-4 lg:px-0">
                <h1 className="text-h2-sm text-center text-black lg:text-h2-lg">
                    Browse all apps
                </h1>
                <div className="flex gap-6 text-black  lg:text-h4-sm justify-center flex-wrap  mt-[20px] ">
                    {alphabet.map((letter, idx) => <ApLink key={idx} href={"/find-apps/" + letter.toLowerCase()}>{letter} </ApLink>)}
                </div>

                <ul className="columns-1 md:columns-2 lg:columns-4 text-black text-h5-sm mt-[40px]">
                    {allPieces.map((piece, idx) => <li key={idx} className="underline">
                        {
                            piece === "webhook" ? <ApLink href={`/pieces/webhook`}>Webhook</ApLink> :
                                piece === "loops" ? <ApLink href={`/pieces/loops`}>Loops</ApLink> :
                                    piece === "branches" ? <ApLink href={`/pieces/branches`}>Branches</ApLink> :
                                        <ApLink href={`/pieces/${piece.name.replace(
                                            "@activepieces/piece-",
                                            ""
                                        )}?`} > {piece.displayName}</ApLink>
                        }

                    </li>)}
                </ul>
            </section>

        </main >
    )
}