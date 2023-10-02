import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { DetailedPiece, GetPiece, GetPieces } from "../../utils/piece-helper";
import { getSupabaseVotesForIssues } from "../server_utils";
import { getPiecesIssuesOnGithub } from "../utils";
import { VotingSectionClient } from "./VotingSectionClient";
import { cookies } from "next/headers";

export const VotingSectionServer = async () => {
    ;
    let githubIssues = await getPiecesIssuesOnGithub();
    //sort by how many issueIds have votes

    const pieces = await GetPieces();
    const detailedPieces: DetailedPiece[] = []
    if (pieces) {
        for (const piece of pieces) {
            const detailedPiece = await GetPiece(piece.name);
            if (detailedPiece) {
                detailedPieces.push(detailedPiece);
            }

        }
    }

    const supabase = createServerComponentClient({ cookies })
    const votes = await getSupabaseVotesForIssues(supabase);
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