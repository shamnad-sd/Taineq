'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Autoplay } from 'swiper/modules'
import 'swiper/css'



export default function FeaturesSliderSection({FeaturesData}) {
  return (
    <section className="pb-[50px] px-[20px] md:px-[50px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.25 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
      >
        {FeaturesData?.map((features, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col h-full">
              <h3 className="font-semibold Primary-color mb-2 text-lg">
                {features?.title?.rendered}
              </h3>
              <div 
              dangerouslySetInnerHTML={{
                __html : features?.content?.rendered
              }}
              className="paragraph-color text-base"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
