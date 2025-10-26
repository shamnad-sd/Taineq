// import { copyright } from '@/utils/variable';
// import Link from 'next/link'
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// const Footer = ({
//   AddressData,
//   ContactData,
//   SiteMapData,
//   SignageData,
//   ItsData,
//   ProductsData,
//   SocialMediaData
// }) => {

//   const iconMap = {
//     facebook: FaFacebookF,
//     instagram: FaInstagram,
//     x: FaTwitter,
//     linkedin: FaLinkedinIn,
//   };

//   return (
//     <footer>
//       <section className="px-6 lg:px-22 md:px-10 md:py-20 py-10 text-white  bg-[url('/FooterBg.png')] bg-cover bg-center bg-no-repeat">
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:pb-10 xl:pb-20'>
//           <div>
//             <div className='pb-4'>
//               <h3 className='text-[16px] uppercase Primary-font  mb-4'>{AddressData?.name}</h3>
//               <ul>
//                 {AddressData?.items.map((item, index) => (
//                   <li key={index} className='mb-2 text-[15px] max-w-[11rem]'>
//                     {/* <Link href={item?.url}> */}
//                       {item.title}
//                     {/* </Link> */}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>

//               <h3 className='text-[16px] uppercase Primary-font  mb-4'>{ContactData?.name}</h3>
//               <ul>
//                 {ContactData?.items.map((item, index) => {
//                   let href = item?.url;
//                   // Check for phone number (basic check for digits and +)
//                   if (/^\+?\d[\d\s\-()]+$/.test(item.title)) {
//                     href = `tel:${item.title.replace(/\s+/g, '')}`;
//                   }
//                   // Check for email
//                   else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.title)) {
//                     href = `mailto:${item.title}`;
//                   }
//                   return (
//                     <li key={index} className='mb-2 text-[15px]'>
//                       <Link href={href}>
//                         {item.title}
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>

//             {/* Social Media Icons */}
//             <div className="hidden md:block md:flex md:gap-4 md:mt-6">
//               {SocialMediaData?.items?.map((item, idx) => {
//                 const Icon = iconMap[item.title.toLowerCase()];
//                 return Icon ? (
//                   <a
//                     key={idx}
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={item.title}
//                   >
//                     <Icon className="w-5 h-5 hover:text-[#63AF51] transition" />
//                   </a>
//                 ) : null;
//               })}
//             </div>

//           </div>


//           <div>
//             <h3 className='text-[16px] uppercase Primary-font  mb-4'>{SiteMapData?.name}</h3>
//             <ul>
//               {SiteMapData?.items.map((item, index) => (
//                 <li key={index} className='mb-3 text-[15px]'>
//                   <Link href={item?.url}>
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className='text-[16px] uppercase Primary-font  mb-4'>{SignageData?.name}</h3>
//             <ul>
//               {SignageData?.items.map((item, index) => (
//                 <li key={index} className='mb-3 text-[15px]'>
//                   <Link href={`/signage${item?.url}`}>
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className='text-[16px] uppercase Primary-font  mb-4'>{ItsData?.name}</h3>
//             <ul>
//               {ItsData?.items.map((item, index) => (
//                 <li key={index} className='mb-3 text-[15px]'>
//                   <Link href={`/its${item?.url}`}>
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className='text-[16px] uppercase Primary-font  mb-4'>{ProductsData?.name}</h3>
//             <ul>
//               {ProductsData?.items.map((item, index) => (
//                 <li key={index} className='mb-3 text-[15px]'>
//                   <Link href={`/products${item?.url}`}>
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="md:hidden block flex gap-4 pb-8">
//               {SocialMediaData?.items?.map((item, idx) => {
//                 const Icon = iconMap[item.title.toLowerCase()];
//                 return Icon ? (
//                   <a
//                     key={idx}
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={item.title}
//                   >
//                     <Icon className="w-5 h-5 hover:text-[#63AF51] transition" />
//                   </a>
//                 ) : null;
//               })}
//             </div>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between md:items-center text-sm pt-8  xl:pt-10 gap-2 border-t-1">
//           <div className='md:order-1 order-2'>
//             <p className='text-[15px]'>{copyright}</p>
//           </div>
//           <div className="flex gap-3 md:order-2 order-1">
//             <Link href={'/privacy-policy'} className="cursor-pointer text-[15px]">Privacy Policy</Link>
//             <Link href={'/terms-condition'} className="cursor-pointer text-[15px]">Terms & Condition</Link>
//           </div>
//         </div>
//       </section>
//     </footer>
//   )
// }

// export default Footer
"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-[100px] px-[50px] md:px-[150px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left: Logo & Address */}
        <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/3">
          {/* Replace src with your logo path */}
          <img src="/TAINEQ final logo 1.png" alt="Taineq logo" className="h-150px w-[150px] mb-2" />
          <div className="text-[#19305B] text-base font-medium leading-snug">
            Taineq Transport and Equipment Rental LLC <br />
            PO Box: 8698, Office 60, Unit 11, Al Hail Holding, Musaffah, Abu Dhabi, UAE
          </div>
          <div className="text-[#19305B] text-base">
            (971) 527-264909 <br />
            rafeeq@taineq.com
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-col gap-2 lg:gap-5 text-[#58627A] text-base font-medium lg:w-1/5">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/rentals">Rentals</Link>
          <Link href="/contact">Contact us</Link>
        </div>

        {/* Right: Categories */}
        <div className="flex flex-col gap-2 lg:gap-5 text-[#58627A] text-base font-medium lg:w-1/4">
          <Link href="/earth-moving-equipment">Earth Moving Equipment</Link>
          <Link href="/lifting-equipment">Lifting Equipment</Link>
          <Link href="/transport-services">Transport Services</Link>
          <Link href="/construction-equipment">Construction Equipment</Link>
        </div>
      </div>

      {/* Bottom: Copyright, Privacy, Terms */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-t border-gray-100 mt-12 pt-5 max-w-7xl mx-auto text-[#58627A] text-base">
        <div>©2025 Taineq</div>
        <div className="flex gap-5">
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms-conditions">Terms and conditions</Link>
        </div>
      </div>

      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-12 bottom-14 md:bottom-16 z-40 w-16 h-16 rounded-full bg-[#0065EC] flex items-center justify-center shadow-lg transition hover:bg-blue-700"
        aria-label="Back to top"
      >
        <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M14 22V6M6 14l8-8 8 8" />
        </svg>
      </button>
    </footer>
  );
}
