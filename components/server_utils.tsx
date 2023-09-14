
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Tables } from "./supabase";
import { IssueVotes } from "./utils";
export const getSupabaseVotes = async () => {
    const supabase = createServerComponentClient({ cookies })
    const { error, count } = await supabase.from('voting').select('*', { count: 'exact' }).limit(1).single();
    if (error) { console.log(error); }
    const countPerPage = 1000;
    let from = 0;
    let to = countPerPage;
    let fullData: Tables<'voting'>[] = [];
    if (count) {
        while (from < count) {
            const { data: newData }: { data: Tables<'voting'>[] | null } = await supabase.from('voting').select('*').range(from, to);
            fullData = fullData.concat(newData ?? []);
            from += countPerPage;
            to += countPerPage;
        }
    }
    return fullData;

}

export const getSupabaseVotesForIssues = async () => {
    const supabase = createServerComponentClient({ cookies })
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
