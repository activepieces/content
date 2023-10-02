import posthog from "posthog-js";
import { ApLink } from "./MyLink";

export const CokkieConsent = (props: { show: boolean, setShow: (show: boolean) => void }) => {
    const acceptCookies = () => {
        posthog.opt_in_capturing();
    };

    const declineCookies = () => {
        posthog.opt_out_capturing();
    }
    if (props.show) {
        return <>
            <div className="fixed left-0 right-0 bottom-[10px] w-full  text-h6-sm  flex text-white bg-[#28282B] rounded-md overflow-hidden container flex-col lg:flex-row mx-auto justify-between items-center p-4  ">
                <div className="text-center lg:text-left mb-2 lg:mb-0">
                    This website uses cookies to ensure you get the best experience on our website. <ApLink href="/privacy" className="text-primary-medium ">Learn more</ApLink>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => { props.setShow(false); localStorage.setItem('cookie_consent', 'true'); declineCookies() }} className="text-h6-sm  rounded text-center px-2 py-1 ">
                        Decline
                    </button>
                    <button onClick={() => { props.setShow(false); localStorage.setItem('cookie_consent', 'true'); acceptCookies() }} className="text-h6-sm bg-primary rounded text-center px-2 py-1 ">
                        Accept
                    </button>
                </div>

            </div>
        </>
    }
    return null
}