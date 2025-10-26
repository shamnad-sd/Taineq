import React from 'react'
import { ApiUrl } from '@/utils/urls';
import Footer from './UI/Footer';

const FooterMain = async () => {

  // footer menus


  const Address = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/address`,
    {
      next: { revalidate: 60 },
    })
  const AddressData = await Address.json();


  const Contact = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/contact`,
    {
      next: { revalidate: 60 },
    })
  const ContactData = await Contact.json();

  const SiteMap = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/site-map`,
    {
      next: { revalidate: 60 },
    })
  const SiteMapData = await SiteMap.json();


  const Signage = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/signage`,
    {
      next: { revalidate: 60 },
    })
  const SignageData = await Signage.json();


  const Its = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/its`,
    {
      next: { revalidate: 60 },
    })
  const ItsData = await Its.json();

  const Products = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/products`,
    {
      next: { revalidate: 60 },
    })
  const ProductsData = await Products.json();

  const SocialMedia = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/social-media`,
    {
      next: { revalidate: 60 },
    })
  const SocialMediaData = await SocialMedia.json();








  return (
    <div>
      {/* <Footer
        AddressData={AddressData}
        ContactData={ContactData}
        SiteMapData={SiteMapData}
        SignageData={SignageData}
        ItsData={ItsData}
        ProductsData={ProductsData}
        SocialMediaData={SocialMediaData}
      /> */}
      <Footer/>
    </div>
  )
}

export default FooterMain