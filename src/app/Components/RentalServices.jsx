import React from 'react';
import CommonHeader from './UI/CommonHeader';
import Images from './UI/Images';

const RentalServices = ({ servicesData, servicesListingData }) => {


    return (
        <section className="pt-[30px] md:pt-[50px] md:pb-[30px] px-[20px] md:px-[50px]">
            <CommonHeader
                Heading={servicesData?.acf?.rental_services_heading}
                subHeading={servicesData?.acf?.about_heading}
                Breadcrumb={servicesData?.acf?.rental_services_heading}
                BreadcrumbLink={servicesData?.slug}
            />

            <div className="flex flex-col gap-14 xl:gap-22 sm:mt-14 mt-10 pb-[40px] sm:pb-[70px] ">
                {servicesListingData?.slice().reverse().map((service, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div
                            key={service?.id}
                            className={`flex flex-col xl:flex-row xl:items-center bg-white border border-gray-200 p-5 xl:p-0 xl:border-0  rounded-3xl ${isEven ? '' : 'xl:flex-row-reverse'} relative`}
                        >
                            {/* Image Section */}
                            <div className={`overflow-hidden md:h-[400px] xl:h-full mb-8 xl:mb-0 xl:w-[60%] ${isEven ? 'xl:mr-[-10rem]' : 'xl:ml-[-10rem]'}`}>
                                <Images
                                    imageurl={service?.featured_image_details?.src}
                                    alt={service?.featured_image_details?.alt}
                                    width={1400}
                                    height={700}
                                    quality={100}
                                    placeholder={true}
                                    classes="rounded-3xl w-full h-full xl:h-[561px] object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className={`bg-white rounded-[2rem] xl:border xl:border-gray-200 xl:px-[70px] xl:py-[80px] xl:max-w-[680px] w-full xl:w-[50%] ${isEven ? 'xl:z-10' : 'xl:z-10'}`}>
                                <h2 className="text-[24px] md:text-[34px] font-semibold Primary-color mb-4">{service?.title?.rendered}</h2>
                                <div
                                    className="paragraph-color text-[17px]"
                                    dangerouslySetInnerHTML={{ __html: service?.content?.rendered }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default RentalServices;
