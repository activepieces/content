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
    return response.json();
}