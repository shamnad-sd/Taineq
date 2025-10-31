"use client"
import Link from "next/link";
import Images from "./Images";
import { copyright } from "@/utils/variable";

export default function Footer({
  EquipmentsData,
  AddressData,
  SiteMapData,
  HomePageData
}) {

  return (


    <footer className="bg-white border-t border-gray-100 py-[50px] xl:py-[100px] px-[20px] md:px-[50px] xl:px-[150px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row md:gap-10 xl:gap-40">
          <div className="flex flex-col gap-6 lg:gap-8 xl:w-[60%]">
            <Images
              width={150}
              height={150}
              quality={100}
              placeholder={true}
              imageurl={HomePageData?.acf?.hero?.logo?.url}
              alt={HomePageData?.acf?.logo?.alt}
              className="w-[150px] mb-2"
            />
            {/* Address / Contact */}
            <div className="md:hidden block">
              <ul>
                {AddressData?.items.map((item, index) => {
                  const isEmail = item.title.includes("@");
                  const isPhone = /^\(?\+?\d{2,}\)?[-\s]?\d{3}[-\s]?\d{3,}$/.test(item.title);
                  let href = "#";
                  if (isEmail) href = `mailto:${item.title}`;
                  else if (isPhone) href = `tel:${item.title.replace(/[^+\d]/g, "")}`;

                  return (
                    <li key={index} className={`mb-2 text-base leading-snug paragraph-color${isPhone ? " pt-4" : ""}`}>
                      {(isEmail || isPhone) ? (
                        <a href={href} className="">{item.title}</a>
                      ) : item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="hidden md:block">
              <ul>
                {/* Company Address Line */}
                {AddressData?.items
                  .filter(item => !item.title.includes("@") && !/^\(?\+?\d{2,}\)?[-\s]?\d{3}[-\s]?\d{3,}$/.test(item.title))
                  .map((item, index) => (
                    <li key={index} className="mb-1 text-base leading-snug paragraph-color">{item.title}</li>
                  ))}
              </ul>
              <ul className="pt-4">
                {/* Phone Number with padding top */}
                {AddressData?.items
                  .filter(item => /^\(?\+?\d{2,}\)?[-\s]?\d{3}[-\s]?\d{3,}$/.test(item.title))
                  .map((item, index) => (
                    <li key={index} className="text-base leading-snug paragraph-color">
                      <a href={`tel:${item.title.replace(/[^+\d]/g, "")}`} className="">
                        {item.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

         
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
              {/* Navigation */}
              <div>
                <ul>
                  {SiteMapData?.items.map((item, index) => (
                    <li key={index} className="mb-3 text-base paragraph-color">
                      <Link href={item?.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Equipments */}
              <div>
                <ul>
                  {EquipmentsData?.map((item, index) => (
                    <li key={index} className="mb-3 text-base paragraph-color">
                      <Link href={`/rental-services/${item?.slug}`}>
                        {item.title.rendered}
                      </Link>
                    </li>

                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col flex-row justify-between items-start md:items-center gap-3 border-t border-gray-100 md:mt-12 md:pt-5 paragraph-color text-base">
          {/* Email always visible on larger screens */}
          <div className="md:block hidden">
            {AddressData?.items
              .filter(item => item.title.includes("@"))
              .map((item, index) => (
                <a key={index} href={`mailto:${item.title}`} className="hover:underline">{item.title}</a>
              ))}
          </div>

          {/* Copyright and links */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="md:block hidden">{copyright}</div>
            <div className="flex flex-col md:flex-row gap-5">
              <Link href="/privacy-policy">Privacy policy</Link>
              <Link href="/terms-condition">Terms and conditions</Link>
            </div>
            <div className="md:hidden block">{copyright}</div>
          </div>
        </div>

        {/* Scroll-to-top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed cursor-pointer right-5 sm:right-12 bottom-14 md:bottom-16 z-40 w-16 h-16 rounded-full bg-[#0065EC] flex items-center justify-center shadow-lg transition hover:bg-blue-700"
          aria-label="Back to top"
        >
          <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M14 22V6M6 14l8-8 8 8" />
          </svg>
        </button>
      </div>
    </footer>


  );
}