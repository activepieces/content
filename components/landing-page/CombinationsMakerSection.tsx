import Image from 'next/image'
import { DetailedPiece, GetPiece, GetPieces } from '../../utils/piece-helper';
import CombinationsCreator from './CombinationsCreator';


const CombinationsMakerSection = async () => {

    const pieces = await GetPieces();
    const piecesWithTriggers = pieces.filter(piece => piece.triggers > 0);
    const piecesWithActions = pieces.filter(piece => piece.actions > 0);
    const triggersPieces: DetailedPiece[] = []
    const actionsPieces: DetailedPiece[] = [];
    for (const p of piecesWithTriggers) {
        triggersPieces.push(await GetPiece(p.name));
    }
    for (const p of piecesWithActions) {
        actionsPieces.push(await GetPiece(p.name));
    }

    return (
        <>
            <section style={{ backgroundColor: '#0B0B0D' }} className="bg-[url('/combinations_bg.svg')] px-4 lg:px-0  bg-cover  bg-left-center bg-no-repeat py-[50px] lg:py-[150px]">
                <div className="container mx-auto md:justify-center lg:justify-start md:items-left flex gap-[80px] lg:flex-nowrap flex-wrap">
                    <div className='flex flex-col gap-[40px] md:gap-[100px]'>
                        <div className='flex flex-col items-start md:items-center lg:items-start'>
                            <div className='text-h6-sm lg:text-h6-lg text-white flex rounded-full bg-black border border-solid border-[#FFCC4D] border-opacity-40 lg:px-[25px] lg:py-[20px] px-[20px] py-[15px] '>
                                Automate your work in &nbsp;<div className='text-[#FFCC4D]'>15 seconds</div>
                            </div>
                        </div>

                        <h2 className="text-white text-[50px] font-bold  lg:text-[80px] md:mx-auto md:text-center relative lg:mx-0 lg:text-left max-w-[355px] lg:max-w-[565px]">
                            Infinite possibilities with your favorite apps
                            <Image alt='planet' src="/planet.svg" height={85.015} width={142.038} className='absolute w-[80px] h-[51.043px] md:h-[85.015px] md:w-[142.038px]  top-[10px] right-[95px]  md:-right-[140px] md:top-[25px]  lg:right-[155px]'></Image>
                        </h2>

                    </div>
                    <CombinationsCreator actionPieces={actionsPieces} triggerPieces={triggersPieces}></CombinationsCreator>

                </div>
            </section>
        </>
    );
}
export default CombinationsMakerSection;