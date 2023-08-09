import { getPiecesIssuesOnGithub } from "../utils"

export const VotingPageVotingSection = async () => {
    const issues = await getPiecesIssuesOnGithub();
    console.log(issues.length);
    return <section className="bg-white px-4 py-10 lg:px-0 lg:py-25">
        <div className="container mx-auto flex gap-[1.875rem] flex-wrap items-center">
            <div className="p-6 lg:p-9 bg-[#FAF1EC] text-black border border-solid border-[#B2B2B2] rounded  w-full lg:w-[406.67px] lg:text-left">
                <div className="text-h4-sm mb-5 lg:text-h4-lg lg:mb-10">
                    Request for a piece
                </div>
                <div className="text-h6-sm lg:text-h6-lg font-normal mb-5 lg:mb-10">
                    Let us know what piece will make your automation better.
                </div>
                <div className="text-h6-sm lg:text-h6-lg bg-white font-normal rounded overflow-hidden p-5 border border-solid border-black  mb-5 ">
                    <input placeholder="Title" className="focus:outline-none bg-white w-full" ></input>
                </div>
                <div className="text-h6-sm lg:text-h6-lg bg-white font-normal p-5 border rounded overflow-hidden border-solid border-black  mb-14 lg:mb-30">
                    <textarea placeholder="Description" rows={3} className="focus:outline-none bg-white w-full min-h-[70px]" ></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="bg-black text-white text-h4-sm w-full text-center rounded  p-5 lg:w-auto">Post</button>
                </div>

            </div>
        </div>
    </section>
}