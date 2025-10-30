
import CommonHeader from './UI/CommonHeader'
import Images from './UI/Images'
import Form from './UI/Form'

const Contact = ({ contactData }) => {





    return (
        <section className='pt-[30px] md:pt-[50px] md:pb-[30px] px-[20px] md:px-[50px]'>
            <CommonHeader
                Heading={contactData?.title?.rendered}
                subHeading={contactData?.acf?.contact_heading}
                Breadcrumb={contactData?.title?.rendered}
                BreadcrumbLink={contactData?.slug}
            />

            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-center bg-white mt-10">
                {/* Left Section (Image) */}
                <div className=" overflow-hidden  md:h-[400px] xl:h-full  mb-8 xl:mb-0 xl:mr-[-10rem]">
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

                <Form contactData={contactData} />
            </div>

            <div className='pt-10 pb-14 md:pt-20 md:pb-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 max-w-6xl mx-auto items-center">
                    {/* Left: Heading */}
                    <div className="flex items-center md:items-start h-full xl:pl-[2rem] pb-5">
                        <h2 className="Primary-color text-[24px] md:text-[40px] lg:text-[44px] leading-tight">
                            {contactData?.acf?.contact_heading}
                        </h2>
                    </div>

                    {/* Right: Contact Details */}
                    <div className="flex flex-col gap-y-8 md:gap-y-24 justify-center xl:items-start md:pl-[6rem] py-4 md:pt-8">
                        {/* Email */}
                        <div>
                            <h3 className="Primary-color font-semibold text-lg md:mb-5 mb-3">
                                {contactData?.acf?.email_heading}
                            </h3>
                            <div className="w-7 h-[3px] bg-[#0065EC] md:mb-6 mb-7 " />
                            <a
                                href={`mailto:${contactData?.acf?.email}`}
                                className="Primary-color font-semibold text-[22px]  md:text-[24px] block mb-3"
                            >
                                {contactData?.acf?.email}
                            </a>
                            <div className="paragraph-color text-[17px] max-w-[12rem]">
                                {contactData?.acf?.assistance_hours}
                            </div>
                        </div>

                        {/* Number */}
                        <div>
                            <h3 className="Primary-color font-semibold text-lg md:mb-5 mb-3">
                                {contactData?.acf?.phone_number_heading}
                            </h3>
                            <div className="w-7 h-[3px] bg-[#0065EC] md:mb-6 mb-7" />
                            <a
                                href={`tel:${contactData?.acf?.phone_number}`}
                                className="Primary-color font-semibold text-[22px] md:text-[24px] block mb-3"
                            >
                                {contactData?.acf?.phone_number}
                            </a>
                            <div className="paragraph-color max-w-[12rem]">
                                {contactData?.acf?.assistance_hours_2}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>



    )
}

export default Contact