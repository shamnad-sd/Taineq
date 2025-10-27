"use client";
import { useState } from "react";
import ContactModal from "../UI/ContactModal";

export default function HeroSection({HomePageData}) {
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [showModal, setShowModal] = useState(false);

  
  function handleContactClick(e) {
    e.preventDefault();
    setShowModal(true);
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
        <h1 className="text-white text-[24px] md:text-[46px] font-semibold md:mb-8 mb-4 text-center">
          {HomePageData?.acf?.hero?.hero_heading}
        </h1>
        <p className="text-white text-[15px] md:mb-8 font-[400] mb-4 text-center">
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
            className="px-5 py-3 rounded-full flex-1 outline-none placeholder:text-[#001568] placeholder:font-semibold placeholder:text-[13px] "
            value={what}
            onChange={e => setWhat(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Where"
            className="px-5 py-3 rounded-full flex-1 outline-none placeholder:text-[#001568] placeholder:font-semibold placeholder:text-[13px]"
            value={where}
            onChange={e => setWhere(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            {HomePageData?.acf?.hero?.hero_button}
          </button>
        </form>

        {/* Mobile "Let's Talk" Button */}
        <button
          onClick={handleContactClick}
          className="block md:hidden px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md mt-4"
        >
          {HomePageData?.acf?.hero?.mobile_button}
        </button>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <ContactModal
          what={what}
          where={where}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}