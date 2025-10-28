
import AboutDetails from './AboutDetails'
import CommonHeader from './UI/CommonHeader'



const About = ({ AboutData }) => {




    return (
            <section className='py-[30px] md:pt-[50px] md:pb-[70px] px-[20px] md:px-[50px]'>
                <CommonHeader
                    Heading={AboutData?.title?.rendered}
                    subHeading={AboutData?.acf?.about_heading}
                    Breadcrumb={AboutData?.title?.rendered}
                    BreadcrumbLink={AboutData?.slug}

                />
                <AboutDetails AboutData={AboutData} />


            </section>
    )
}

export default About