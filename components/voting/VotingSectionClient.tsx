'use client'
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Tables } from "../supabase"
import { GitHubIssue } from "../utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
    overlay: {
        background: 'rgba(17, 17, 17, 0.3)',
    }
};

const cachedVotedForIssueId = 'issueToVote'
export const VotingSectionClient = (props: { votes: Tables<'voting'>[], issues: GitHubIssue[] }) => {
    const [votes, setVotes] = useState<Tables<'voting'>[]>(props.votes);
    const [userState, setUser] = useState<User | null>(null);
    const [showDialog, setShowDialog] = useState(false);
    const supabase = createClientComponentClient()
    const login = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: "http://localhost:1234/request-a-piece"
            }
        })

    }

    const vote = async (issueId: string, user: User | null) => {
        if (!user) {
            localStorage.setItem(cachedVotedForIssueId, issueId.toString())
            setShowDialog(true)
            return;
        }
        if (user && !votes.find(v => v.issueId == issueId && v.userId === user.id)) {
            await supabase.from('voting').insert({ issueId: issueId, userId: user?.id })
            setVotes([...votes, { issueId: issueId, userId: user.id, created_at: new Date().toISOString() }])
        }
    }

    useEffect(() => {
        const getUser = async () => {
            const authUser = await supabase.auth.getUser();
            if (authUser.data.user?.id) {
                setUser(authUser.data.user);
                const issueToVote = localStorage.getItem(cachedVotedForIssueId);
                if (issueToVote) {
                    vote(issueToVote, authUser.data.user);
                    localStorage.removeItem(cachedVotedForIssueId);
                }
            }
        }
        getUser();
    }, [])


    return <>
        <section className="bg-white px-4 py-10 lg:px-0 lg:py-25 ">
            <div className="container mx-auto flex gap-[1.875rem] flex-wrap items-center">
                <form className="p-6 lg:max-h-[41.7578rem] lg:min-h-[41.7578rem] lg:p-9 bg-[#FAF1EC] text-black border border-solid border-[#B2B2B2] rounded  w-full lg:w-[406.67px] ">
                    <div className="text-h4-sm mb-5 lg:text-h4-lg lg:mb-10">
                        Request for a piece
                    </div>
                    <div className="text-h6-sm lg:text-h6-lg font-normal mb-5 lg:mb-10">
                        Let us know what piece will make your automation better.
                    </div>
                    <div className="text-h6-sm lg:text-h6-lg bg-white font-normal rounded overflow-hidden p-5 border border-solid border-black  mb-5 ">
                        <input required placeholder="Title" className="focus:outline-none bg-white w-full" ></input>
                    </div>
                    <div className="h-[14.5rem] mb-5">
                        <div className="text-h6-sm lg:text-h6-lg bg-white font-normal p-5 border rounded overflow-hidden border-solid border-black    ">
                            <textarea placeholder="Description" rows={3} className="focus:outline-none bg-white w-full max-h-[11.5625rem] min-h-[4.375rem]" ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="bg-black text-white text-h4-sm w-full text-center rounded  p-5 lg:w-auto">Post</button>
                    </div>

                </form>
                <div className="text-black border border-solid border-[#B2B2B2] rounded lg:max-h-[41.7578rem] lg:min-h-[41.7578rem] w-full lg:w-[406.67px] bg-white overflow-hidden ">
                    <div className="text-h5-sm lg:text-h3-sm bg-[#ECF2FA] p-5 lg:p-6 border-b border-solid border-[#B2B2B2]">
                        Requested
                    </div>
                    <div className="thin-scrollbars overflow-y-auto max-h-[36.5625rem] min-h-[36.5625rem] px-6 ">
                        <div className="flex flex-col divide-y divide-y-solid  divide-y-white divide-y-opacity-30 ">
                            {props.issues.filter(issue => issue.state === "open" && issue.assignees.length === 0).map((issue, index) => {
                                return <div key={index + "requested"} className="flex gap-5 py-8 items-center">
                                    <button onClick={() => vote(issue.id, userState)} className=" min-w-[3.5625rem] divide-solid flex flex-col items-center justify-center border border-solid border-[black] border-opacity-[38%] rounded overflow-hidden gap-[0.375rem] px-3 py-2">
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.16636 0L0.878906 7.28745L2.59146 9L8.16636 3.43725L13.7413 9L15.4538 7.28745L8.16636 0Z" fill="black" fillOpacity="0.38" />
                                        </svg>
                                        <div className="h-5-sm text-black font-semibold">
                                            {votes.filter(v => v.issueId == issue.id).length}
                                        </div>

                                    </button>
                                    <Link href={"https://github.com/activepieces/activepieces/issues/" + issue.number} rel="noopener noreferer" target="_blank" className="flex flex-col gap-4 text-h6-sm  lg:text-h4-sm ">
                                        <div className="text-black font-semibold ">
                                            {issue.title}
                                        </div>
                                        <div className="text-black text-opacity-60 font-normal">
                                            Requested at {issue.created_at && new Date(issue.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </div>
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
                    <div className="thin-scrollbars overflow-y-auto lg:max-h-[36.5625rem] lg:min-h-[36.5625rem] px-6 ">
                        <div className="flex flex-col divide-y divide-y-solid  divide-y-white divide-y-opacity-30 ">
                            {props.issues.filter(issue => issue.state === "open" && issue.assignees.length > 0).map((issue, index) => {
                                return <Link key={index + "inprogress"} href={"https://github.com/activepieces/activepieces/issues/" + issue.number} rel="noopener noreferer" target="_blank" className="flex gap-5 py-8 items-center">
                                    <div className="flex flex-col gap-4 text-h6-sm  lg:text-h4-sm ">
                                        <div className="text-black font-semibold ">
                                            {issue.title}
                                        </div>
                                        <div className="text-black text-opacity-60 font-normal">
                                            Requested at {issue.created_at && new Date(issue.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </div>
                                    </div>
                                </Link>

                            })}
                        </div>

                    </div>
                </div>
            </div>
            <Modal
                style={customStyles}
                isOpen={showDialog}
            >
                <div className="bg-white rounded overflow-hidden px-7 w-[22.375rem] lg:w-[31.25rem] py-8">
                    <div className="flex items-center justify-between text-h5-sm lg:text-h3-sm pb-[3.4375rem]">
                        Log in to request a piece  <svg className="cursor-pointer" onClick={() => setShowDialog(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z" fill="black" fillOpacity="0.6" />
                        </svg>

                    </div>
                    <button onClick={login} className="flex items-center w-full justify-center bg-white border border-solid border-black rounded gap-6 p-4 text-black text-h4-sm font-semibold" >
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1711_67343)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M25 12.7841C25 11.8977 24.9205 11.0455 24.7727 10.2273H13V15.0625H19.7273C19.4375 16.625 18.5568 17.9489 17.233 18.8352V21.9716H21.2727C23.6364 19.7955 25 16.5909 25 12.7841Z" fill="#4285F4" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 25C16.375 25 19.2046 23.8807 21.2728 21.9716L17.233 18.8352C16.1137 19.5852 14.6819 20.0284 13 20.0284C9.74436 20.0284 6.98868 17.8295 6.00573 14.875H1.82959V18.1136C3.88641 22.1989 8.11368 25 13 25Z" fill="#34A853" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.00568 14.875C5.75568 14.125 5.61364 13.3239 5.61364 12.5C5.61364 11.6761 5.75568 10.875 6.00568 10.125V6.88635H1.82955C0.982954 8.57385 0.5 10.4829 0.5 12.5C0.5 14.517 0.982954 16.4261 1.82955 18.1136L6.00568 14.875Z" fill="#FBBC05" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 4.97159C14.8353 4.97159 16.483 5.60227 17.7785 6.84091L21.3637 3.25568C19.1989 1.23864 16.3694 0 13 0C8.11368 0 3.88641 2.80114 1.82959 6.88636L6.00573 10.125C6.98868 7.17045 9.74436 4.97159 13 4.97159Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1711_67343">
                                    <rect width="25" height="25" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        Login with Google
                    </button>
                </div>
            </Modal>

        </section></>
}