
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Tables } from "./supabase";
export const getSupabaseVotes = async () => {
    const supabase = createServerComponentClient({ cookies })
    const { data }: { data: Tables<'voting'>[] | null } = await supabase.from('voting').select('*')
    return data;

}