'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function EquipmentsSlider({ HomeSliderData }) {
    return (
        <section className="pb-[50px] md:pb-[70px] px-[20px] md:px-[50px]">
            <div className="w-full mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop
                >
                    {HomeSliderData?.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="relative rounded-2xl overflow-hidden h-[170px] md:h-[300px] lg:h-[400px] flex items-center"
                                style={{
                                    background: `url(${slide?.featured_image_details?.src}) center center/cover no-repeat`
                                }}
                            >
                                <div className="absolute inset-0 z-10 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, rgba(35,65,92,0.5) 0%, rgba(35,65,92,0.15) 55%, rgba(35,65,92,0) 100%)"
                                    }}
                                ></div>
                                <div className="relative z-20 px-6 md:left-10  lg:left-26">
                                    <h3 className="text-white text-[24px] md:text-[44px] font-semibold max-w-xl">
                                        {slide?.title?.rendered}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <style jsx global>{`
        .swiper-pagination-bullets {
          bottom: 12px !important;
        }
        .swiper-pagination-bullet {
          background: #ffff;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #003B8A;
          padding: 0px 15px 0px 15px;
            border-radius: 10px;
        }
      `}</style>
        </section>
    );
}
