'use client';
import Image from 'next/image'
import { useState } from 'react';


const FAQs: { question: string, answer: string }[] = new Array(5).fill({
    question: "Artificial intelligence: Computer systems that can perform tasks that typically require human intelligence.",
    answer: "Activepieces is an open core software, you can self host it on your machine for free. Our cloud version is built on this core but has more features."
})
export const FAQsSection = () => {
    const [questionsExpanded, setQuestionExpanded] = useState(new Array(FAQs.length).fill(false));
    return <>
        <section className=" bg-white  px-4 lg:px-0 pb-[80px]">
            <div className='container mx-auto'>
                <h2 className="text-[50px] mb-[80px] lg:text-[80px] font-bold text-center">
                    FAQs
                </h2>
                <ul className='max-w-[958px] mx-auto'>
                    {
                        FAQs.map((faq, idx) => (

                            <li className="cursor-pointer md:gap-[42px] text-black text-[22px] text-black md:text-3xl font-bold leading-9 tracking-wide  font-bold leading-relaxed tracking-wide" key={idx}>
                                <div className='flex gap-[25px] '>
                                    <Image src="/chevron_black.svg" width={15} height={25} alt='chevron' className='md:w-[15px]  rotate-90 opacity-70'></Image>
                                    {faq.question}
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