"use client"
import { useEffect } from 'react'
import AnimatedElement from './AnimatedElement';
import Images from './UI/Images';
import MainHeadings from './UI/MainHeadings';

const AboutDetails = ({ AboutData }) => {

    return (
        <section>
            {/* About Hero */}
            <div className='rounded-2xl overflow-hidden md:h-[400px] flex items-center mt-7'>
                <Images
                    imageurl={AboutData?.acf?.about_hero?.about_image?.url}
                    alt={AboutData?.acf?.about_hero?.about_image?.alt}
                    width={1400}
                    height={700}
                    quality={100}
                    placeholder={true}
                    classes="w-full h-full object-cover"
                />
            </div>
            <div className='flex justify-center items-center mt-10 md:mt-16 pb-3 md:pb-8 xl:pb-16 '>
                <MainHeadings
                    Heading={AboutData?.acf?.about_hero?.about_heading}
                    Subheading={AboutData?.acf?.about_hero?.about_subheading}
                    Description={AboutData?.acf?.about_hero?.about_description}
                    maxWidth='50rem'
                />
            </div>

            {/*  Vision */}
            <div className='pb-3 md:pb-10'>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 items-center">
                    <div className="md:col-span-6">
                        <Images
                            imageurl={AboutData?.acf?.vision_and_mission?.vision_image?.url}
                            alt={AboutData?.acf?.vision_and_mission?.vision_image?.alt}
                            width={1400}
                            height={700}
                            quality={100}
                            placeholder={true}
                            classes="rounded-3xl w-full h-full xl:h-[663px]  object-cover"
                        />
                    </div>

                    <div className="lg:col-span-6 pt-9 md:pt-14 xl:pr-[8rem]">
                        <MainHeadings
                            Heading={AboutData?.acf?.vision_and_mission?.vision_heading}
                            Subheading={AboutData?.acf?.vision_and_mission?.vision_subheading}
                            Description={AboutData?.acf?.vision_and_mission?.vision_description}
                        // maxWidth='30rem'
                        />
                    </div>
                </div>
            </div>

            {/*  Mission */}
            <div className='pb-3 md:pb-25'>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 items-center">
                    <div className="md:col-span-6 xl:pl-[4rem] order-2 pt-9 md:pt-14 xl:pt-0 lg:order-1">
                        <MainHeadings
                            Heading={AboutData?.acf?.vision_and_mission?.mission_heading}
                            Subheading={AboutData?.acf?.vision_and_mission?.mission_subheading}
                            Description={AboutData?.acf?.vision_and_mission?.mission_description}
                        />
                    </div>

                    <div className="lg:col-span-6 xl:pt-14 order-1 lg:order-2">
                        <Images
                            imageurl={AboutData?.acf?.vision_and_mission?.mission_image?.url}
                            alt={AboutData?.acf?.vision_and_mission?.mission_image?.alt}
                            width={1400}
                            height={700}
                            quality={100}
                            placeholder={true}
                            classes="rounded-3xl w-full h-full xl:h-[663px]  object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className='rounded-2xl overflow-hidden md:h-[400px] flex items-center'>
                <Images
                    imageurl={AboutData?.acf?.core_values?.core_values_image?.url}
                    alt={AboutData?.acf?.core_values?.core_values_image?.alt}
                    width={1400}
                    height={700}
                    quality={100}
                    placeholder={true}
                    classes="w-full h-full object-cover"
                />
            </div>
            <div className='flex justify-center items-center mt-10 md:mt-16 pb-3 md:pb-5  '>
                <MainHeadings
                    Heading={AboutData?.acf?.core_values?.core_values_heading}
                    Subheading={AboutData?.acf?.core_values?.core_values_subheading}
                    Description={AboutData?.acf?.core_values?.core_values_description}
                />
            </div>

            {/* Tainqe Difference */}
            <div className='rounded-2xl overflow-hidden md:h-[400px] flex items-center'>
                <Images
                    imageurl={AboutData?.acf?.taineq_difference?.taineq_difference_image?.url}
                    alt={AboutData?.acf?.taineq_difference?.taineq_difference_image?.alt}
                    width={1400}
                    height={700}
                    quality={100}
                    placeholder={true}
                    classes="w-full h-full object-cover"
                />
            </div>
            <div className='flex justify-center items-center mt-10 md:mt-16 pb-3 md:pb-8 xl:pb-16  '>
                <MainHeadings
                    Heading={AboutData?.acf?.taineq_difference?.taineq_difference_heading}
                    Subheading={AboutData?.acf?.taineq_difference?.taineq_difference_subheading}
                    Description={AboutData?.acf?.taineq_difference?.taineq_difference_description}
                />
            </div>

            {/* Tainqe Difference 2 */}
            <div className='rounded-2xl overflow-hidden md:h-[400px] flex items-center'>
                <Images
                    imageurl={AboutData?.acf?.taineq_difference?.taineq_difference_image_2?.url}
                    alt={AboutData?.acf?.taineq_difference?.taineq_difference_image_2?.alt}
                    width={1400}
                    height={700}
                    quality={100}
                    placeholder={true}
                    classes="w-full h-full object-cover"
                />
            </div>
            <div className='flex justify-center items-center mt-10 md:mt-16 md:pb-8 xl:pb-16  '>
                <MainHeadings
                    Subheading={AboutData?.acf?.taineq_difference?.taineq_difference_heading_2}
                    Description={AboutData?.acf?.taineq_difference?.taineq_difference_description_2}
                />
            </div>
        </section>
    )
}

export default AboutDetails