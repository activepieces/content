
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Tables } from "./supabase";
export const getSupabaseVotes = async () => {
    const supabase = createServerComponentClient({ cookies })
    const { error, count } = await supabase.from('voting').select('*', { count: 'exact' }).limit(1).single();
    console.log(count);
    console.log(error);
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
    console.log("number of votes:" + fullData?.length)
    return fullData;

}
