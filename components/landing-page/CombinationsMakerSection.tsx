import Image from 'next/image'
import { DetailedPiece, GetPiece, GetPieces } from '../../utils/piece-helper';
import CombinationsCreator from './CombinationsCreator';


const CombinationsMakerSection = async () => {

    const pieces = await GetPieces();
    if (!pieces) return (<></>);
    const piecesWithTriggers = pieces.filter(piece => piece.triggers > 0);
    const piecesWithActions = pieces.filter(piece => piece.actions > 0);
    const triggersPieces: DetailedPiece[] = []
    const actionsPieces: DetailedPiece[] = [];
    for (const p of piecesWithTriggers) {
        const rp = await GetPiece(p.name);
        if (rp) { triggersPieces.push(rp); }
    }
    for (const p of piecesWithActions) {
        const rp = await GetPiece(p.name);
        if (rp) { actionsPieces.push(rp); }
    }

    return (
        <>
            <section style={{ backgroundColor: '#0B0B0D' }} className="bg-[url('/combinations_bg.svg')] px-4 min-[1320px]:px-0 bg-cover bg-left-center bg-no-repeat py-[50px] min-[1320px]:py-[150px]">
                <div className="container mx-auto md:justify-center min-[1320px]:justify-start md:items-left flex gap-[80px] min-[1320px]:flex-nowrap flex-wrap">
                    <div className='flex flex-col gap-[40px] md:gap-[60px]'>
                        <div className='flex flex-col items-start md:items-center min-[1320px]:items-start'>
                            <div className='text-h6-sm min-[1320px]:text-h6-lg text-white flex rounded-full bg-black border border-solid border-[#FFCC4D] border-opacity-40 min-[1320px]:px-[25px] min-[1320px]:py-[20px] px-[20px] py-[15px]'>
                                Automate your work in &nbsp;<div className='text-[#FFCC4D]'>15 seconds</div>
                            </div>
                        </div>

                        <h2 style={{ textShadow: '2px 2px 5px #000' }} className="text-white text-[50px] font-bold min-[1320px]:text-[80px] md:mx-auto md:text-center relative min-[1320px]:mx-0 min-[1320px]:text-left max-w-[355px] min-[1320px]:max-w-[565px] z-[1]">
                            Infinite possibilities with your favorite apps
                            <Image alt='planet' src="/planet.svg" height={85.015} width={142.038} className='absolute w-[80px] h-[51.043px] md:h-[85.015px] md:w-[142.038px] top-[10px] right-[95px] md:-right-[140px] md:top-[25px] min-[1320px]:right-[155px] z-[-1]'></Image>
                        </h2>
                    </div>
                    <CombinationsCreator actionPieces={actionsPieces} triggerPieces={triggersPieces}></CombinationsCreator>

                </div>
            </section>
        </>
    );
}
export default CombinationsMakerSection;