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