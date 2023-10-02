import Link from "next/link";
import { GitHubIssue, IssueVotes } from "../utils";
import { User } from "@supabase/supabase-js";


export const RequestedAndInProgressIssues = (props: { issues: GitHubIssue[], search: string, showEmptyResult: boolean, votes: IssueVotes[], userState: User | null, vote: (issueId: string, userState: User | null) => void }) => {

    return <>
        {
            !props.search && <>
                <div className="text-black border border-solid border-[#B2B2B2] rounded max-h-[41.7578rem] min-h-[41.7578rem]   lg:max-h-[41.7578rem] lg:min-h-[41.7578rem] w-full lg:w-[406.67px] bg-white overflow-hidden ">
                    <div className="text-h5-sm lg:text-h3-sm bg-[#ECF2FA] p-5 lg:p-6 border-b border-solid border-[#B2B2B2]">
                        Requested
                    </div>
                    <div className="thin-scrollbars overflow-y-auto max-h-[36.5625rem] min-h-[36.5625rem] px-6 overflow-x-hidden">
                        <div className="flex flex-col divide-y divide-y-solid  divide-y-white divide-y-opacity-30 ">
                            {props.issues.filter(issue => issue.state === "open" && issue.assignees.length === 0).map((issue, index) => {
                                return <div key={index + "requested"} className="flex gap-5 py-8 items-center">
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
                                    <Link href={"https://github.com/activepieces/under-review/issues/" + issue.number} rel="noopener noreferer" target="_blank" className="flex flex-col gap-4 text-h6-sm  lg:text-h4-sm ">
                                        <div className="text-black font-semibold ">
                                            {issue.title}
                                        </div>
                                        <div className="text-black text-opacity-60 font-normal ">
                                            Requested on {issue.created_at && new Date(issue.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}

                                        </div>
                                        {
                                            issue.labels.find(l => l.name === "blocked") && <div className="flex">
                                                <div className="rounded-full bg-danger-dark text-h6-sm text-white !font-bold flex items-center justify-center px-2 ">
                                                    blocked
                                                </div>
                                            </div>
                                        }

                                    </Link>
                                </div>

                            })}
                        </div>

                    </div>
                </div>
                <div className="text-black border border-solid border-[#B2B2B2] rounded max-h-[41.7578rem] min-h-[41.7578rem] w-full lg:w-[406.67px] bg-white overflow-hidden ">
                    <div className="text-h5-sm lg:text-h3-sm bg-[#F9ECFA] p-5 lg:p-6 border-b border-solid border-[#B2B2B2]">
                        In Progress
                    </div>
                    <div className="thin-scrollbars overflow-y-auto  lg:max-h-[36.5625rem] lg:min-h-[36.5625rem] px-6 ">
                        <div className="flex flex-col divide-y divide-y-solid  divide-y-white divide-y-opacity-30 ">
                            {props.issues.filter(issue => issue.state === "open" && issue.assignees.length > 0).map((issue, index) => {
                                return <Link key={index + "inprogress"} href={"https://github.com/activepieces/under-review/issues/" + issue.number} rel="noopener noreferer" target="_blank" className="flex gap-5 py-8 items-center">
                                    <div className="flex flex-col gap-4 text-h6-sm  lg:text-h4-sm ">
                                        <div className="text-black font-semibold ">
                                            {issue.title}
                                        </div>
                                        <div className="text-black text-opacity-60 font-normal">
                                            Requested on {issue.created_at && new Date(issue.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </div>
                                    </div>
                                </Link>

                            })}
                        </div>

                    </div>
                </div>
            </>
        }
        {
            props.showEmptyResult && <>
                <div className="text-black border max-h-[41.7578rem] min-h-[41.7578rem]  w-full border-solid border-[#B2B2B2] rounded lg:max-h-[41.7578rem] lg:min-h-[41.7578rem] lg:w-[406.67px] bg-white overflow-hidden ">
                    <div className="text-h5-sm lg:text-h3-sm bg-[#ECF2FA] p-5 lg:p-6 border-b border-solid border-[#B2B2B2]">
                        Requested
                    </div>
                    <NewRequestNote></NewRequestNote>
                </div>
                <div className="text-black border border-solid border-[#B2B2B2] w-full rounded max-h-[41.7578rem] min-h-[41.7578rem]  lg:w-[406.67px] bg-white overflow-hidden ">
                    <div className="text-h5-sm lg:text-h3-sm bg-[#F9ECFA] p-5 lg:p-6 border-b border-solid border-[#B2B2B2]">
                        In Progress
                    </div>
                    <NewRequestNote></NewRequestNote>


                </div>
            </>
        }
    </>

}

const NewRequestNote = () => {

    return <div className="thin-scrollbars overflow-y-auto lg:max-h-[36.5625rem] lg:min-h-[36.5625rem] px-6 flex flex-col h-full text-center   items-center justify-center ">

        <div className="text-xl  text-[#00000099] font-bold w-[238px] mb-5">
            Exclusive Opportunity
        </div>
        <div className="text-h5-sm text-[#0000004d] font-normal  w-[238px]">
            Be the first to request custom pieces built by us!
        </div>
    </div>


}
