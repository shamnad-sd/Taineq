

import Link from "next/link";
import Images from "../UI/Images";

export default function HomeEquipments({
  ProductItemsData,
  HomePageData

}) {


  return (
    <section className="py-[50px] md:pt-[50px] md:pb-[70px] px-[20px] md:px-[50px]">
      <div className="flex items-center justify-center md:justify-between mb-8 md:mb-13">
        <h2 className="text-[24px] md:text-[34px] font-semibold Primary-color">
          {HomePageData?.acf?.equipment_rentals?.equipment_rentals_heading}
        </h2>
        <Link href={'#'}>
          <button className="cursor-pointer border border-[#0065EC] text-[#0065EC] px-8 py-3 rounded-full font-semibold hover:bg-[#0065EC] hover:text-[#fff] transition duration-300 hidden md:block">
            {HomePageData?.acf?.equipment_rentals?.equipment_rentals_button}
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {ProductItemsData.map(product => (
          <div key={product.id} className="bg-white rounded-3xl border border-gray-200 p-6 pt-18 flex flex-col items-center">
            <Images
              imageurl={product?.featured_image_details?.src}
              alt={product?.featured_image_details?.alt}
              width={200}
              height={200}
              quality={100}
              placeholder={true}
              className="mb-5 max-h-32 object-contain"
            />
            <div className="text-base font-semibold text-center Primary-color mt-auto">
              {product?.title?.rendered}
            </div>
          </div>
        ))}
      </div>
      {/* Mobile "View All" */}
      <div className="mt-8 md:hidden flex justify-center">
        <button className="border border-[#0065EC] text-[#0065EC] w-full py-3 rounded-full font-semibold hover:bg-[#0065EC] hover:text-[#fff] transition duration-300">
          <Link href={'#'}>
            {HomePageData?.acf?.equipment_rentals?.equipment_rentals_button}
          </Link>
        </button>
      </div>
    </section>
  );
}
