import Link from "next/link"

const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
const popularStuff = [
    // {
    //     title: "Popular categories",
    //     items: [
    //         {
    //             title: "Artificial Intelligence",
    //             link: ""
    //         },
    //         {
    //             title: "Marketing Automation",
    //             link: ""
    //         },
    //         {
    //             title: "CRM",
    //             link: ""

    //         },
    //         {
    //             title: "File storage",
    //             link: ""

    //         },
    //         {
    //             title: "Email",
    //             link: ""
    //         },
    //         {
    //             title: "Calendar",
    //             link: ""
    //         }
    //     ],
    //     separator: true
    // },
    {
        title: "Popular apps",
        items: [
            { title: "Github", link: "/pieces/github" },
            { title: "OpenAI", link: "/pieces/openai" },
            { title: "Pipedrive", link: "/pieces/pipedrive" },
            { title: "Email", link: "/pieces/imap" },
            { title: "Typeform", link: "/pieces/typeform" },
            { title: "Stripe", link: "/pieces/stripe" },
            { title: "Google Sheets", link: "/pieces/google-sheets" },
            { title: "Spotify", link: "/pieces/spotify" },
        ],
        separator: true
    },
    {
        title: "Popular reads",
        items: [
            {
                title: "Best Zapier Competitors",
                link: "https://activepieces.com/blog/best-zapier-competitors-and-alternatives"
            },
            {
                title: "Best Workato Alternatives",
                link: "/blog/top-workato-alternatives-and-competitors"
            },
            {
                title: "Automate Blog with AI",
                link: "https://activepieces.com/blog/automate-blog-writing-with-ai-a-step-by-step-guide-using-openai"
            }
        ],
        separator: false
    }

]

export const PiecesDictionarySection = () => {
    return <section className="bg-[#000000] py-[80px] px-4 lg:px-0 ">
        <div className="container mx-auto">
            <div className="flex flex-col gap-[40px] divide-y lg:gap-0 lg:flex-row lg:divide-x lg:divide-y-0 divide-[#37383D] flex-wrap lg:flex-nowrap">
                {
                    popularStuff.map((popularThing, idx) => {
                        return <div key={idx} className={"flex flex-col text-white gap-[35px] " + (idx === 0 ? "lg:pr-[80px]" : "lg:px-[80px] py-[40px] lg:py-0")}>
                            <div className="text-h5-sm font-bold">
                                {popularThing.title}
                            </div>
                            {
                                popularThing.separator && <div className="flex max-w-[320px] gap-[18px] text-[18px] leading-[22px] flex-wrap">
                                    {
                                        popularThing.items.map((item, idx) => {
                                            return <Link key={idx} href={item.link} className="flex gap-[18px]" target="_blank" rel="noopener noreferer">{item.title} {idx === popularThing.items.length - 1 ? "" : <div> •</div>}</Link>
                                        })
                                    }
                                </div>
                            }

                            {
                                !popularThing.separator && <div className="flex-col flex max-w-[320px] gap-[18px] text-[18px] leading-[22px]">
                                    {
                                        popularThing.items.map((item, idx) => {
                                            return <Link key={idx} href={item.link} target="_blank" rel="noopener noreferer">{item.title} </Link>
                                        })
                                    }
                                </div>
                            }

                        </div>


                    })
                }
            </div>
            <div className="text-h5-sm font-bold text-white mt-[50px] mb-[35px]">
                Pieces by name
            </div>
            <div className="text-[18px] leading-[22px] text-white flex gap-3 flex-wrap">
                {
                    alphabet.map((letter, idx) => { return <Link rel="noopener noreferer" target="_blank" key={idx} className="flex flex-wrap gap-3" href={"/find-apps/" + letter.toLowerCase()}>{letter} {idx === alphabet.length - 1 ? "" : <div>-</div>} </Link> })
                }
            </div>

        </div>

    </section>
}