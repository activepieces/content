import Link from "next/link";

export const SuccessfullIssueSubmissionSection = ({ setShowSuccessfulSubmissionSection, toggleRequestAPieceSection }: { setShowSuccessfulSubmissionSection: (show: boolean) => void, toggleRequestAPieceSection: (show: boolean) => void }) => {
    return (<>
        <div className="w-full absolute -top-[105px] lg:-top-[210px] flex items-center justify-center">
            <svg className="w-[127px] h-[127px] lg:w-[200px] lg:h-[200px] " viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 0C155.19 0 200 44.81 200 100C200 155.19 155.19 200 100 200C44.81 200 0 155.19 0 100C0 44.81 44.81 0 100 0Z" fill="#4BAF50" />
                <path d="M40.2981 110.496L80.791 141.896L154.845 65.3251" stroke="white" strokeWidth="10.4156" strokeLinecap="round" />
            </svg>

        </div>


        <div className="flex flex-col gap-10 lg:gap-20  items-center my-12 w-full lg:my-25">
            <div className="text-black text-center w-[22.375rem] lg:w-[40.3125rem]  ">
                <div className="text-page-title-sm lg:text-page-title-lg mb-10">
                    Thank you for your request
                </div>
                <div className="text-xl font-normal">
                    We will check it as soon as possible.
                </div>
            </div>
            <div className="w-[22.375rem] lg:w-[40.3125rem]  flex flex-col gap-5 lg:flex-row text-h6-sm lg:text-h6-lg items-center justify-center font-bold  text-center">
                <button onClick={() => {
                    setShowSuccessfulSubmissionSection(false);
                    toggleRequestAPieceSection(true)
                }} className="bg-black text-white rounded overflow-hidden p-5 w-full lg:w-auto">New request</button>
                <Link href="/" className="bg-white text-black border border-solid border-black rounded overflow-hidden p-5 w-full lg:w-auto whitespace-nowrap">Go to homepage</Link>
            </div>
        </div>
    </>)
}