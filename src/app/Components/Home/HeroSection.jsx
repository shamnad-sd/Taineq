"use client";
import { useState } from "react";
import ContactModal from "../UI/ContactModal";

export default function HeroSection({ HomePageData }) {
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [showModal, setShowModal] = useState(false);


  function handleContactClick(e) {
    e.preventDefault();
    setShowModal(true);
  }

  function handleCloseModalAndReset() {
    setShowModal(false);
    setWhat("");
    setWhere("");
  }

  return (
    <section className="relative h-[60vh] xl:h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={`${HomePageData?.acf?.hero?.hero_video}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(180deg, #003B8A 0%, #0065EC 48%, #FFFFFF 100%)",
          opacity: 0.75,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full px-4">
        <h1 className="text-white text-[24px] md:text-[46px] font-semibold md:mb-5 mb-4 text-center">
          {HomePageData?.acf?.hero?.hero_heading}
        </h1>
        <p className="text-white text-[15px] md:mb-10 font-[400] mb-4 text-center">
          {HomePageData?.acf?.hero?.hero_description}
        </p>
        {/* Desktop Form */}
        <form
          className="bg-white rounded-full shadow flex w-full max-w-[44rem] p-1 gap-1 hidden md:flex"
          onSubmit={handleContactClick}
        >
          <input
            type="text"
            placeholder="What?"
            className="px-5 py-3  flex-1 outline-none placeholder:text-[#001568] placeholder:font-semibold placeholder:text-[13px] rounded-none"
            value={what}
            onChange={e => setWhat(e.target.value)}
            required
          />
           <div className="flex items-center">
            <div className="h-8 w-[1px] bg-gray-200"></div>
          </div>

          <di className="flex items-center rounded-none px-3">
            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.12" d="M11.0961 1.81956C8.55774 -0.606521 4.44226 -0.606521 1.9039 1.81956C1.30123 2.39165 0.822343 3.07503 0.495386 3.82952C0.168429 4.58401 0 5.3944 0 6.21304C0 7.03169 0.168429 7.84207 0.495386 8.59657C0.822343 9.35106 1.30123 10.0344 1.9039 10.6065L6.49959 15L11.0961 10.6065C11.6988 10.0344 12.1777 9.35106 12.5046 8.59657C12.8316 7.84207 13 7.03169 13 6.21304C13 5.3944 12.8316 4.58401 12.5046 3.82952C12.1777 3.07503 11.6988 2.39165 11.0961 1.81956ZM6.49959 8.28939C5.95682 8.28939 5.44736 8.08412 5.06303 7.71148C4.68257 7.34102 4.46889 6.83903 4.46889 6.31568C4.46889 5.79232 4.68257 5.29033 5.06303 4.91987C5.44655 4.54723 5.95682 4.34196 6.49959 4.34196C7.04237 4.34196 7.55264 4.54723 7.93615 4.91987C8.31662 5.29033 8.5303 5.79232 8.5303 6.31568C8.5303 6.83903 8.31662 7.34102 7.93615 7.71148C7.55264 8.08412 7.04237 8.28939 6.49959 8.28939Z" fill="#001568" />
            </svg>
            <input
              type="text"
              placeholder="Where"
              className="px-5 py-3 rounded-full flex-1 outline-none placeholder:text-[#001568] placeholder:font-semibold placeholder:text-[13px]"
              value={where}
              onChange={e => setWhere(e.target.value)}
              required
            />
          </di>

          <button
            type="submit"
            className="cursor-pointer px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            {HomePageData?.acf?.hero?.hero_button}
          </button>
        </form>

        {/* Mobile "Let's Talk" Button */}
        <button
          onClick={handleContactClick}
          className="block md:hidden px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold mt-4"
        >
          {HomePageData?.acf?.hero?.mobile_button}
        </button>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <ContactModal
          HomePageData={HomePageData}
          what={what}
          where={where}
          onClose={handleCloseModalAndReset}
        />
      )}
    </section>
  );
}