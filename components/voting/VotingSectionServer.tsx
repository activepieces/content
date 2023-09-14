import { DetailedPiece, GetPiece, GetPieces } from "../../utils/piece-helper";
import { getSupabaseVotes, getSupabaseVotesForIssues } from "../server_utils";
import { getPiecesIssuesOnGithub } from "../utils";
import { VotingSectionClient } from "./VotingSectionClient";

export const VotingSectionServer = async () => {
    ;
    let githubIssues = await getPiecesIssuesOnGithub();
    //sort by how many issueIds have votes

    const pieces = await GetPieces();
    const detailedPieces: DetailedPiece[] = []
    for (const piece of pieces) {
        const detailedPiece = await GetPiece(piece.name);
        detailedPieces.push(detailedPiece);
    }
    const votes = await getSupabaseVotesForIssues();

    githubIssues = githubIssues.sort((a, b) => {
        const aVotes = votes.find(v => v.issue_id == a.id)?.vote_count ?? 0;
        const bVotes = votes.find(v => v.issue_id == b.id)?.vote_count ?? 0;
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