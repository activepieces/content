'use server'

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { GithubCreateIssueRequest } from "../utils";



export async function createIssueAction(issue: GithubCreateIssueRequest) {
    const supabase = createServerActionClient({ cookies })
    const user = await supabase.auth.getUser();
    if (user.error || user.data === null) {
        throw Error("User not logged in")
    }

    const response = await fetch("https://cloud.activepieces.com/api/v1/webhooks/Xiw53fa6hjA1fIoh29ECR/sync", { method: "POST", body: JSON.stringify(issue), headers: { "Content-Type": "application/json" } });
    const notifyDiscrod = await fetch("https://cloud.activepieces.com/api/v1/webhooks/UQUIwoTLJO3RJb17ZtAze", { method: "POST", body: JSON.stringify(issue), headers: { "Content-Type": "application/json" } });
    return response.json();
}


export async function createVoteAction(issueid:string) {
    const supabase = createServerActionClient({ cookies })
    const user = await supabase.auth.getUser();
    if (user.error || user.data === null) {
        throw Error("User not logged in")
    }
    await supabase.from('voting').insert({ issueId: issueid, userId: user.data.user.id });
    return { success: true };
 }
