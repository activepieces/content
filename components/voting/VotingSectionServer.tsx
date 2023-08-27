import { DetailedPiece, GetPiece, GetPieces } from "../../utils/piece-helper";
import { getSupabaseVotes } from "../server_utils";
import { getPiecesIssuesOnGithub } from "../utils";
import { VotingSectionClient } from "./VotingSectionClient";

export const VotingSectionServer = async () => {
    const votes = await getSupabaseVotes();
    let githubIssues = await getPiecesIssuesOnGithub();
    //sort by how many issueIds have votes

    const pieces = await GetPieces();
    const detailedPieces: DetailedPiece[] = []
    for (const piece of pieces) {
        const detailedPiece = await GetPiece(piece.name);
        detailedPieces.push(detailedPiece);
    }
    if (votes === null) {
        throw Error("Votes are null")
    }
    githubIssues = githubIssues.sort((a, b) => {
        const aVotes = votes.filter(v => v.issueId == a.id).length;
        const bVotes = votes.filter(v => v.issueId == b.id).length;
        if (aVotes > bVotes) {
            return -1;
        }
        if (aVotes < bVotes) {
            return 1;
        }
        return 0;
    });
    return <>
        <VotingSectionClient issues={githubIssues} votes={votes} pieces={detailedPieces}></VotingSectionClient>
    </>
}