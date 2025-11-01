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
            {/* About Content */}
            <div className='pt-20 about-details'
            dangerouslySetInnerHTML={{
                __html : AboutData?.content?.rendered
            }}
            >

            </div>
        </section>
    )
}

export default AboutDetails