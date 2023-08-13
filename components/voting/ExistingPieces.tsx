import { useEffect, useState } from "react";
import { DetailedPiece } from "../../utils/piece-helper";
import Link from "next/link";
import Image from "next/image";
export const ExisttingPieces = (props: { pieces: DetailedPiece[], search: string, setNoExistingPieces: (none: boolean) => void }) => {
    const [suggestedPieces, setSuggestedPiece] = useState<{ displayName: string, logoUrl: string, pieceName: string }[]>([]);
    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
        setShowMore(false)
        const matchingPieceDisplayName = props.pieces.filter((piece) => piece.displayName.toLowerCase().includes(props.search.toLowerCase())).map((piece) => {
            return {
                displayName: piece.displayName, logoUrl: piece.logoUrl, pieceName: piece.name.replace(
                    "@activepieces/piece-",
                    ""
                )
            }
        });
        const matchingActionDisplayName = props.pieces.map((piece) =>
            Object.keys(piece.actions).
                filter((actionKey) => piece.actions[actionKey].displayName.toLowerCase().includes(props.search.toLowerCase()))
                .map((actionKey) => {
                    return {
                        displayName: piece.actions[actionKey].displayName, logoUrl: piece.logoUrl, pieceName: piece.name.replace(
                            "@activepieces/piece-",
                            ""
                        )
                    }
                }));
        const matchingTriggerDisplayName = props.pieces.map((piece) =>
            Object.keys(piece.triggers)
                .filter((triggerKey) => piece.triggers[triggerKey].displayName.toLowerCase().includes(props.search.toLowerCase()))
                .map((triggerKey) => {
                    return {
                        displayName: piece.triggers[triggerKey].displayName, logoUrl: piece.logoUrl, pieceName: piece.name.replace(
                            "@activepieces/piece-",
                            ""
                        )
                    }
                })
        );
        setSuggestedPiece([...matchingPieceDisplayName, ...matchingActionDisplayName, ...matchingTriggerDisplayName].flat());
        props.setNoExistingPieces([...matchingPieceDisplayName, ...matchingActionDisplayName, ...matchingTriggerDisplayName].flat().length === 0)
    }, [props.search])

    return <>
        {
            suggestedPieces.length > 0 && <>
                <div className="text-black text-h6-sm lg:text-h6-lg !font-bold mb-10">
                    Existing Pieces
                </div>
                <div className="flex flex-wrap gap-5 items-center mb-10">
                    {
                        suggestedPieces.slice(0, showMore ? undefined : 20).map((piece, index) => {
                            return <Link href={`/pieces/${piece.pieceName}`}
                                key={index + "-existing-piece"}
                                target="_blank" rel="noreferer nopener"
                                className="border border-solid border-[#B2B2B2] rounded py-2 px-3 text-black text-xl font-bold flex gap-4 ">
                                <Image alt={piece.displayName} height={30} width={30} src={piece.logoUrl} className="object-contain" ></Image>
                                {piece.displayName}
                            </Link>

                        })
                    }
                    {showMore || suggestedPieces.length <= 20 ? null : <button onClick={() => setShowMore(true)} className="border border-solid border-[#B2B2B2] rounded py-2 px-3 text-black text-xl font-bold flex gap-4 ">
                        ...more
                    </button>}
                </div>
            </>
        }


    </>

}