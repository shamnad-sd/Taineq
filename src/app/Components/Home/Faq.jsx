'use client';
import { useState } from "react";


export default function Faq({
    FaqData,
    HomePageData
}) {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#F7F9FB] flex flex-col md:items-center py-[30px] md:pt-[70px] md:pb-[100px] px-[20px] md:px-[50px]">
      <div className="md:text-center mb-5   md:mb-12">
      <h2 className="Primary-color text-[24px] md:text-[34px] font-semibold ">
        {HomePageData?.acf?.faq?.faq_heading}
      </h2>
      </div>
      <div className="w-full max-w-3xl mx-auto bg-transparent">
        {FaqData.map((item, idx) => (
          <div key={idx}>
            <button
               className={`w-full flex items-center justify-between py-6 md:px-6 bg-transparent ${idx === FaqData.length - 1 ? "" : "border-b border-gray-200"} focus:outline-none`}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span className="Primary-color font-semibold text-lg text-left max-w-[17rem] md:max-w-full">
                {item?.title?.rendered}
              </span>
              <svg
                className={`ml-4 cursor-pointer transition-transform duration-300 ${
                  open === idx ? "rotate-45 text-[#0065EC]" : "rotate-0 text-[#0065EC]"
                }`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {open === idx && (
              <div 
              className="px-2 md:px-6 pb-6 paragraph-color pt-6 text-base animate-fadeIn"
              dangerouslySetInnerHTML={{
                __html : item?.content?.rendered
              }}
              />
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0;}
          to { opacity: 1;}
        }
      `}</style>
    </section>
  );
}
