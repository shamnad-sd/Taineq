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
            <div className="">
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
            {/* <div className="hidden md:block">
              <ul>
                
                {AddressData?.items
                  .filter(item => !item.title.includes("@") && !/^\(?\+?\d{2,}\)?[-\s]?\d{3}[-\s]?\d{3,}$/.test(item.title))
                  .map((item, index) => (
                    <li key={index} className="mb-1 text-base leading-snug paragraph-color">{item.title}</li>
                  ))}
              </ul>
              <ul className="pt-4">
                
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
            </div> */}
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
            {/* {AddressData?.items
              .filter(item => item.title.includes("@"))
              .map((item, index) => (
                <a key={index} href={`mailto:${item.title}`} className="hover:underline">{item.title}</a>
              ))} */}
            <div className="md:block hidden">{copyright}</div>
          </div>

          {/* Copyright and links */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
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

        {/* WhatsApp Float Button */}
        <a
          href={`https://wa.me/${HomePageData?.acf?.whatsapp_number}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[9rem]  right-5 sm:right-12 z-30 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="white"
          >
            <path d="M16 .667C7.64.667.667 7.64.667 16c0 2.818.74 5.568 2.146 7.983L.667 31.333l7.583-2.12A15.26 15.26 0 0 0 16 31.333C24.36 31.333 31.333 24.36 31.333 16S24.36.667 16 .667zm0 28.053a12.67 12.67 0 0 1-6.468-1.768l-.464-.275-4.497 1.256 1.204-4.593-.302-.47a12.593 12.593 0 1 1 10.527 5.85z" />
            <path d="M24.096 18.882c-.41-.205-2.43-1.195-2.808-1.333-.377-.137-.652-.205-.926.205-.274.41-1.063 1.333-1.304 1.607-.24.274-.48.308-.89.103-.41-.205-1.734-.64-3.303-2.037a12.33 12.33 0 0 1-2.267-2.814c-.237-.41-.025-.63.18-.835.185-.184.41-.48.616-.72.205-.24.274-.41.41-.685.137-.274.068-.514-.034-.72-.103-.205-.926-2.22-1.27-3.04-.334-.803-.674-.693-.926-.693-.24 0-.514-.034-.788-.034-.274 0-.72.103-1.097.514-.377.41-1.44 1.406-1.44 3.427 0 2.02 1.475 3.973 1.682 4.247.205.274 2.9 4.427 7.018 6.208.982.425 1.748.68 2.345.87.986.313 1.885.268 2.595.163.791-.118 2.43-.995 2.772-1.957.342-.962.342-1.786.239-1.957-.103-.171-.376-.274-.788-.479z" />
          </svg>
        </a>


      </div>
    </footer>


  );
}