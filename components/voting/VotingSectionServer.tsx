import { getPiecesIssuesOnGithub, getSupabaseVotes } from "../utils";
import { VotingSectionClient } from "./VotingSectionClient";

export const VotingPageVotingSection = async () => {

    const githubIssues = await getPiecesIssuesOnGithub();
    const votes = await getSupabaseVotes();
    if (votes === null) {
        throw Error("Votes are null")
    }
    return <>
        <VotingSectionClient issues={githubIssues} votes={votes}></VotingSectionClient>
    </>
}