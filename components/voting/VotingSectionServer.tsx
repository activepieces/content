import { DetailedPiece, GetPiece, GetPieces } from "../../utils/piece-helper";
import { getPiecesIssuesOnGithub, getSupabaseVotes } from "../utils";
import { VotingSectionClient } from "./VotingSectionClient";

export const VotingSectionServer = async () => {

    const githubIssues = await getPiecesIssuesOnGithub();
    const votes = await getSupabaseVotes();
    const pieces = await GetPieces();
    const detailedPieces: DetailedPiece[] = []
    for (const piece of pieces) {
        const detailedPiece = await GetPiece(piece.name);
        detailedPieces.push(detailedPiece);
    }
    if (votes === null) {
        throw Error("Votes are null")
    }
    return <>
        <VotingSectionClient issues={githubIssues} votes={votes} pieces={detailedPieces}></VotingSectionClient>
    </>
}