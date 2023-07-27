'use client';
import Image from 'next/image'
import { useRef, useState } from 'react';


const FAQs: { question: string, answer: string }[] = new Array(5).fill({
    question: "Artificial intelligence: Computer systems that can perform tasks that typically require human intelligence.",
    answer: "You will be notified 30 days before your annual plan is set to renew. At this time, you can change the number of seats on your annual plan for the next year; otherwise, it will renew for the same number of seats again. You could also choose not to renew your annual plan, in which case all of your team editors would be paid monthly."
})
export const FAQsSection = () => {

    const [questionsExpanded, setQuestionExpanded] = useState(new Array(FAQs.length).fill(false));
    const answersRefs = new Array(FAQs.length).fill(useRef<HTMLDivElement | null>(null));
    return <>
        <section className=" bg-white  px-4 lg:px-0 pb-[80px]">
            <div className='container mx-auto'>
                <h2 className="text-[50px] mb-[80px] lg:text-[80px] font-bold text-center">
                    FAQs
                </h2>
                <ul className='max-w-[958px] mx-auto'>
                    {
                        FAQs.map((faq, idx) => (

                            <li onClick={() => {
                                const newState = [...questionsExpanded];
                                newState[idx] = !newState[idx];
                                setQuestionExpanded(newState);
                            }} className="cursor-pointer md:gap-[42px] select-none text-black text-[22px] text-black md:text-3xl font-bold leading-9 tracking-wide  font-bold leading-relaxed tracking-wide" key={idx}>
                                <div className='flex gap-[25px] '>
                                    <Image src="/chevron_black.svg" width={15} height={25} alt='chevron' className={(questionsExpanded[idx] ? "rotate-90 " : "rotate-0 ") + 'md:w-[15px] transition-all opacity-70'}></Image>
                                    {faq.question}
                                </div>
                                <div ref={answersRefs[idx]} style={{
                                    maxHeight: questionsExpanded[idx] ? answersRefs[idx].current?.scrollHeight : 0,
                                }} className='pl-[33px] text-base  md:text-[22px] font-normal leading-7 tracking-wide text-black mt-[25px] transition-all overflow-hidden'>
                                    {faq.answer}
                                </div>
                                {idx !== FAQs.length - 1 && <div className=" my-[40px] border border-black border-opacity-70"></div>}
                            </li>



                        ))
                    }
                </ul>
            </div>


        </section>

    </>
}