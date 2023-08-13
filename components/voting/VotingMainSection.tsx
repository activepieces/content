import { AnimatedCurtains } from "../animated-curtains/AnimatedCurtains"

export const VotingPageMainSection = () => {
    return <>
        <section className="bg-black ">
            <div className="container mx-auto px-4 py-10  lg:px-0 lg:py-25">
                <div id="requestPiece" className="w-[22.375rem] lg:w-[38.875rem] mx-auto text-white text-center">
                    <div className="text-page-title-sm lg:text-page-title-lg mb-10 ">
                        Request <br className="block lg:hidden"></br>
                        a piece
                    </div>
                    <div className="text-h6-sm lg:text-h6-lg font-normal">
                        {" Draw the path to our 50+ open source contributors by telling them which pieces you'd like to see next"}
                    </div>
                </div>

            </div>
            <AnimatedCurtains id="publicVotingCurtains"></AnimatedCurtains>
        </section>
    </>
}
