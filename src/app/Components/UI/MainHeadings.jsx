import React from 'react'

const MainHeadings = ({
    Heading,
    Subheading,
    Description,
    maxWidth='40rem',
}) => {
    return (
        <div>
            <h3 className="uppercase tracking-wide Secondary-color font-semibold text-base  md:text-[18px] mb-3 inline-flex items-center gap-3">
                <svg width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="3" fill="#0065EC" />
                </svg>
                {Heading}
            </h3>

            <h2 className="text-[24px] md:text-[44px] lg:text-[35px] xl:text-[44px] font-semibold Primary-color mb-5 leading-tight xl:max-w-[45rem]">
                {Subheading}
            </h2>
            
            <div
                dangerouslySetInnerHTML={{
                    __html: Description
                }}
                className={`paragraph-color text-[17px] mb-8 max-w-[50rem]`} 
                // style={{ maxWidth: maxWidth }}
                />
        </div>
    )
}

export default MainHeadings
