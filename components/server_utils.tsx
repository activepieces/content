
'use server'
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { IssueVotes } from "./utils";



export const getSupabaseVotesForIssues = async (supabase: SupabaseClient) => {

    const { error, data } = (await supabase.rpc('get_issues_votes'));
    if (error) { console.error(error); }
    if (data === null) {
        throw Error("votes are null, make sure your credentials are correct");
    }
    const user = (await (supabase.auth.getUser()));
    if (user.data.user) {
        const userVotes = (await supabase.from('voting').select('*', { count: 'exact' }).eq('userId', user.data.user.id));
        if (userVotes.error) { console.error(userVotes.error); }
        if (userVotes.data) {

            const result = data.map((d: { vote_count: number, issue_id: string }) => {
                return {
                    ...d,
                    userVoted: userVotes.data.find((v: { issueId: string }) => v.issueId === d.issue_id) ? true : false
                }
            })
            return result as IssueVotes[];

        }
    }
    return data as IssueVotes[];

}
