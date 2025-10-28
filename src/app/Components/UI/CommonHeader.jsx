import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const CommonHeader = ({
    Heading,
    subHeading,
    breadcrumbItems,
    Breadcrumb,
    BreadcrumbLink
}) => {
    return (
        <div className="">
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className="text-[24px] md:text-[34px] font-semibold Primary-color">
                        {Heading}
                    </h1>
                    {/* Breadcrumb */}
                    <div className='sm:block hidden'>
                        <nav className="text-xs md:text-sm" aria-label="Breadcrumb">
                            <ol className="flex space-x-2 text-[#334486]">
                                <li className="flex items-center">
                                    <Link href="/" className="text-[#0065EC]">Home</Link>
                                    <span className="mx-1 text-[#EEEEEE]">
                                        <IoIosArrowForward />
                                    </span>
                                </li>
                                {(breadcrumbItems && breadcrumbItems.length > 0)
                                    ? breadcrumbItems.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            {idx < breadcrumbItems.length - 1 ? (
                                                <>
                                                    <Link href={item.href} className="text-[#0065EC]">{item.title}</Link>
                                                    <span className="mx-1 text-[#EEEEEE]">
                                                        <IoIosArrowForward />
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="text-[#334486]">{item.title}</span>
                                            )}
                                        </li>
                                    ))
                                    : (
                                        <li>
                                            <span className="text-[#334486]">{Breadcrumb}</span>
                                        </li>
                                    )
                                }
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div>
                {/* Breadcrumb */}
                <div className='sm:hidden block flex flex-col justify-end md:items-end items-start mt-4 md:mt-0'>
                    <nav className="text-xs md:text-sm" aria-label="Breadcrumb">
                        <ol className="flex space-x-2 text-[#334486]">
                            <li className="flex items-center">
                                <Link href="/" className="text-[#0065EC]">Home</Link>
                                <span className="mx-1 text-[#EEEEEE]">/</span>
                            </li>
                            {(breadcrumbItems && breadcrumbItems.length > 0)
                                ? breadcrumbItems.map((item, idx) => (
                                    <li key={idx} className="flex items-center">
                                        {idx < breadcrumbItems.length - 1 ? (
                                            <>
                                                <Link href={item.href} className="text-[#0065EC]">{item.title}</Link>
                                                <span className="mx-1 text-[#EEEEEE]">/</span>
                                            </>
                                        ) : (
                                            <span className="text-[#334486]">{item.title}</span>
                                        )}
                                    </li>
                                ))
                                : (
                                    <li>
                                        <span className="text-[#334486]">{Breadcrumb}</span>
                                    </li>
                                )
                            }
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default CommonHeader