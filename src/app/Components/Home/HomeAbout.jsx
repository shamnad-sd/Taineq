import Link from "next/link";
import Images from "../UI/Images";

export default function HomeAbout({ HomePageData }) {
    return (
        <section className="pb-[50px] md:pb-[70px] px-[20px] md:px-[50px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-center">
                <div className="md:col-span-5">
                    <Images
                        imageurl={HomePageData?.acf?.about?.about_image?.url}
                        alt={HomePageData?.acf?.about?.about_image?.alt}
                        width={1200}
                        height={600}
                        quality={100}
                        placeholder={true}
                        className="rounded-3xl w-full h-full  object-cover"
                    />
                </div>

                <div className="lg:col-span-7 pt-14">
                    <h3 className="uppercase tracking-wide Secondary-color font-semibold text-base  md:text-[18px] mb-3 inline-flex items-center gap-3">
                        <svg width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="3" fill="#0065EC" />
                        </svg>
                        {HomePageData?.acf?.about?.about_heading}
                    </h3>

                    <h2 className="text-[24px] md:text-[44px] font-semibold Primary-color mb-5 leading-tight xl:max-w-[40rem]">
                        {HomePageData?.acf?.about?.about__subheading}
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: HomePageData?.acf?.about?.about_description
                        }}
                        className="paragraph-color text-[17px] mb-8 xl:max-w-[41rem] " />

                    <Link href={'#'}>
                        <button className="bg-[#0065EC] md:hidden block text-white w-full px-8 py-3 cursor-pointer rounded-full text-base font-semibold transition">
                            {HomePageData?.acf?.about?.about_button}
                        </button>
                    </Link>
                    <Link href={'#'}>
                        <button className="bg-[#0065EC] md:block hidden text-white px-8 py-3 cursor-pointer rounded-full text-base font-semibold transition">
                            {HomePageData?.acf?.about?.about_button}
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
}
