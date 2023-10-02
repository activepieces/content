import { GitHubIssue, IssueVotes } from "../utils";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { ApLink } from "../MyLink";

export const SimilarIssues = (props: { issues: GitHubIssue[], search: string, vote: (issueId: string, userState: User | null) => void, userState: User | null, votes: IssueVotes[], setNoSimilarIssues: (none: boolean) => void }) => {
    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
        console.log('search ' + props.search);
        setShowMore(false);
        props.setNoSimilarIssues(props.issues.filter((issue) => issue.title.toLowerCase().includes(props.search.toLowerCase())).length === 0)
        console.log('search ' + props.issues.filter((issue) => issue.title.toLowerCase().includes(props.search.toLowerCase())).length);
    }, [props.search])
    return <>
        {
            props.issues.filter((issue) => issue.title.toLowerCase().includes(props.search.toLowerCase())).length > 0 && <>
                <div className="text-black text-h6-sm lg:text-h6-lg !font-bold mb-10">
                    Similar Requests
                </div>
                <div className="flex flex-col divide-y divide-y-solid  divide-y-white divide-y-opacity-30 ">
                    {props.issues.filter((issue) => issue.title.toLowerCase().includes(props.search.toLowerCase())).slice(0, showMore ? undefined : 10).map((issue, index) => {
                        return <div key={index + "similar"} className="flex gap-5 py-8 items-center">
                            <button onClick={() => props.vote(issue.id, props.userState)} className=" min-w-[3.5625rem] divide-solid flex flex-col items-center justify-center border border-solid border-[black] border-opacity-[38%] rounded overflow-hidden gap-[0.375rem] px-3 py-2">
                                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.16636 0L0.878906 7.28745L2.59146 9L8.16636 3.43725L13.7413 9L15.4538 7.28745L8.16636 0Z"
                                        className={props.userState && props.votes.find(v => v.issue_id == issue.id && v.userVoted) ? 'fill-primary' : 'fill-black'}
                                        fillOpacity={props.userState && props.votes.find(v => v.issue_id == issue.id && v.userVoted) ? "0.85" : "0.38"} />
                                </svg>
                                <div className="h-5-sm text-black font-semibold">
                                    {props.votes.find(v => v.issue_id == issue.id)?.vote_count ?? 0}
                                </div>

                            </button>
                            <ApLink href={"https://github.com/activepieces/activepieces/issues/" + issue.number} rel="noopener noreferer" target="_blank" className="flex flex-col gap-4 text-h6-sm  lg:text-h4-sm ">
                                <div className="text-black font-semibold ">
                                    {issue.title}
                                </div>
                                <div className="text-black text-opacity-60 font-normal">
                                    Requested on {issue.created_at && new Date(issue.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </div>
                                <div className={issue.assignees.length > 0 ? (issue.state === "open" ? "text-[#AC44B5] font-normal" : "text-[#258D3C] font-normal") : "text-black text-opacity-60 font-normal"}>
                                    {issue.assignees.length > 0 ? (issue.state === "open" ? "In Progress" : "Completed") : "Requested"}
                                </div>
                            </ApLink>
                        </div>

                    })}

                </div>
                {!showMore && props.issues.filter((issue) => issue.title.toLowerCase().includes(props.search.toLowerCase())).length > 10 &&
                    <div className="flex items-center justify-center">
                        <button onClick={() => setShowMore(true)} className="text-black  text-h6-sm  lg:text-h4-s justify-center items-center border border-black border-solid   font-bold flex p-5 rounded">Load more</button>
                    </div>
                }
            </>
        }



    </>
}