import Link from "next/link";
import Images from "../UI/Images";
import MainHeadings from "../UI/MainHeadings";

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
                    <MainHeadings
                        Heading={HomePageData?.acf?.about?.about_heading}
                        Subheading={HomePageData?.acf?.about?.about__subheading}
                        Description={HomePageData?.acf?.about?.about_description}
                    />

                    <Link

                        href={'#'}>
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
