import Image from 'next/image'
const screenshotsDimensions = [
    {
        height: 220,
        width: 153,
        className: 'w-[220px] h-[153px] hidden lg:block'
    },
    {
        height: 220,
        width: 239,
        className: 'lg:w-[220px] lg:h-[239px] w-[109px] h-[106px] '
    },
    {
        height: 253,
        width: 289,
        className: 'w-[124px] h-[150px] lg:w-[253px] lg:h-[289px]  '
    },
    {
        height: 220,
        width: 239,
        className: 'h-[113px] w-[108px] lg:w-[220px] lg:h-[239px] '
    },
    {
        height: 220,
        width: 153,
        className: 'w-[220px] h-[153px] hidden lg:block '
    },
]

export const ScreenshotsSection = () => {

    return (<div className="flex gap-3 lg:gap-6  justify-center items-end">
        {
            screenshotsDimensions.map((dimensions, idx) => (
                <Image key={'screenshot'+idx} src={`/screenshots/screenshot_${idx + 1}.svg`} height={dimensions.height} width={dimensions.width} className={dimensions.className} alt={`screenshot_${idx + 1}`}></Image>))
        }
    </div>)
}