
import CommonHeader from './UI/CommonHeader'
import Images from './UI/Images'

const Contact = ({ contactData }) => {





    return (


        <section className='pt-[30px] md:pt-[50px] md:pb-[30px] px-[20px] md:px-[50px]'>
            <CommonHeader
                Heading={contactData?.title?.rendered}
                subHeading={contactData?.acf?.contact_heading}
                Breadcrumb={contactData?.title?.rendered}
                BreadcrumbLink={contactData?.slug}
            />

            <div className="flex flex-col xl:flex-row items-center xl:justify-center min-h-screen bg-white mt-10">
                {/* Left Section (Image) */}
                <div className=" overflow-hidden mb-8 md:mb-0 xl:mr-[-7rem]">
                    <Images
                        imageurl={contactData?.acf?.contact_image?.url}
                        alt={contactData?.acf?.contact_image?.alt}
                        width={1400}
                        height={700}
                        quality={100}
                        placeholder={true}
                        classes="rounded-3xl w-full h-full xl:h-[663px]  object-cover"
                    />
                </div>

                {/* Right Section (Form) */}
                <div className="bg-white rounded-[2rem] xl:border xl:border-gray-200 xl:px-[70px] xl:py-[80px] xl:max-w-[680px] w-full">
                    <h2 className=" text-[24px]   text-[#093178] mb-8">
                        How we can help?
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border border-[#DDDDDD]  rounded-lg py-3 px-4 text-[1.05rem] focus:outline-none focus:ring-2 focus:ring-[#093178] placeholder:text-[#dbdbdb]"
                        />
                        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                            <input
                                type="text"
                                placeholder="Phone"
                                className="md:w-1/2 border border-[#DDDDDD]  rounded-lg py-3 px-4 text-[1.05rem] focus:outline-none focus:ring-2 focus:ring-[#093178] placeholder:text-[#dbdbdb]"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="md:w-1/2 border border-[#DDDDDD]  rounded-lg py-3 px-4 text-[1.05rem] focus:outline-none focus:ring-2 focus:ring-[#093178] placeholder:text-[#dbdbdb]"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows={3}
                            className="w-full border border-[#DDDDDD]  rounded-lg py-3 px-4 text-[1.05rem] focus:outline-none focus:ring-2 focus:ring-[#093178] placeholder:text-[#dbdbdb]"
                        />
                        <button
                            type="submit"
                            className="w-fit px-7 py-3 bg-[#1563d7] text-white font-semibold cursor-pointer text-lg rounded-full hover:bg-[#093178] transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </section>



    )
}

export default Contact