'use client'
import 'react-tooltip/dist/react-tooltip.css'
import Image from 'next/image'
import { Arrow } from '../arrow'
import Link from 'next/link'
import { PieceBase } from '../../utils/piece-helper'
import { Tooltip } from 'react-tooltip'
export const PiecesCarousel = (props: { pieces: PieceBase[] }) => {
    return <section className="bg-white bg-[url('/pieces_features_section_bg.svg')] bg-cover     px-4 lg:px-0 py-[100px] lg:py-[150px] overflow-hidden">
        <div className="container mx-auto ">
            <div className='flex flex-col items-center gap-3 lg:gap-8 text-black'>
                <Image alt='planet' src="/planet.svg" height={85.015} width={142.038} className='h-[85.015px] w-[142.038px] '></Image>
                <div className='text-center text-h4-lg  lg:text-h2-lg'>
                    {props.pieces.length} pieces and growing
                </div>
                <div className='text-center text-h5-sm  lg:text-h4-sm  !font-normal max-w-[636px] '>
                    Connect your favorite marketing, sales and operational apps together and save several hours a week
                </div>
            </div>
        </div>
        <div className=' lg:my-[80px] my-[40px]  pieces-image-slider'>
            <div className='flex gap-4'>
                {
                    props.pieces.map((piece, idx) => {
                        return <>
                            <Link id={"piece-" + idx} key={idx} href={`/pieces/${piece.name.replace(
                                "@activepieces/piece-",
                                ""
                            )}`} className='flex items-center p-4 lg:p-6 rounded-xl bg-white border border-solid border-[#D3D3D3] hover:border-black hover:-translate-y-1 hover:scale-[1.1] transition-transform '>
                                <Image loading="eager" src={piece.logoUrl} alt={piece.displayName} width={92} height={92} className='h-[67px] w-[67px] lg:w-[92px] lg:h-[92px] object-contain' ></Image>
                            </Link>
                            <Tooltip
                                anchorSelect={"#piece-" + idx}
                                content={piece.displayName}
                                place={"bottom"}
                                className='rounded !bg-black !px-3 !py-3 !bg-opacity-60'
                                noArrow={true}
                            />
                        </>
                    })
                }
            </div>

        </div>
        <div className='container mx-auto flex items-center justify-center'>
            <Link href="/pieces" className='text-h6-sm lg:text-h4-lg font-bold flex gap-4 lg:gap-5 items-center justify-center'>
                Explore all pieces <Arrow className='fill-black  w-[20.67px] h-[10.34px] lg:w-[33.33px] lg:h-[16.67px]' ></Arrow>
            </Link>
        </div>
    </section>
}