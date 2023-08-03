import { FlowTemplate } from '@activepieces/shared';
import Image from 'next/image'
import TemplatesListItem from './TemplatesListItem';

const LeadsSection = (props: {
    templates: { template: FlowTemplate, piecesIcons: string[] }[]
}) => {


    return (<>
        <section className="bg-[#CCF3FF] py-[100px] lg:py-[160px] border-t border-solid border-black ">
            <div className='container mx-auto px-4 lg:px-0'>

                <div className='flex text-h2-sm lg:text-h2-lg flex-wrap gap-[20px] lg:gap-[10px] items-center '>
                    <div className='basis-full lg:basis-auto' >
                        <Image src="/two.svg" alt='one' width={39} height={41} className='w-[30px] h-[24px] lg:w-[43px] lg:h-[34px]'></Image>
                    </div>

                    Automate <br className='lg:hidden'></br> your leads journey
                </div>
                <div className='flex'>
                    <h2 className='text-black text-h6-sm lg:text-h6-lg mt-[20px] lg:mt-[40px] max-w-[958px] mb-[40px] lg:mb-[80px]'>
                        Connect your marketing channels with your sales operations. Add custom logic to score and nurture your leads in a few clicks.
                    </h2>
                </div>

                <div className='flex flex-col gap-[20px] lg:gap-[30px]'>
                    {
                        props.templates.map((stat, i) => (
                            <div key={i + 1} className='flex flex-col gap-[20px] lg:gap-[30px]'>
                                <TemplatesListItem baseColorClass='text-black fill-black' piecesIcons={stat.piecesIcons} template={stat.template}></TemplatesListItem>
                                {
                                    i !== props.templates.length - 1 ? <div className='border-b border-solid border-divider'></div> : null
                                }
                            </div>))
                    }
                </div>


            </div>

        </section >
    </>);
}
export default LeadsSection;