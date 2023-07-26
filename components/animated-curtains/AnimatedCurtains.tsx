
import Image from 'next/image';

export const AnimatedCurtains = () => {
    const arrayOfCurtains = new Array(10).fill(0).map((_, i) => i + 1);




    return <>
        <div className="curtains-animation h-[36px] w-full transition-none ">
            {/* I did this so all images are loaded on component load */}
            {
                arrayOfCurtains.map((_, i) => <Image key={i} src={`/curtains/curtains_${_}.svg`} width={1440} height={36} alt="curtains" className='hidden'></Image>)
            }

        </div>


    </>
}