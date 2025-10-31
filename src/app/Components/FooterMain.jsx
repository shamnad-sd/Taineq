import React from 'react'
import { ApiUrl } from '@/utils/urls';
import Footer from './UI/Footer';
import Cta from './UI/Cta';

const FooterMain = async () => {


  const allPagesRes = await fetch(`${ApiUrl}/wp-json/wp/v2/pages?per_page=100`, {
    next: { revalidate: 60 },
  })
  const allPages = await allPagesRes.json()

  const servicesListingData = allPages.filter(page => page.acf?.is_service === true)


  const Address = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/address`,
    {
      next: { revalidate: 60 },
    })
  const AddressData = await Address.json();

  const HomeData = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/658`, {
    next: { revalidate: 60 },
  });

  const HomePageData = await HomeData.json();


  const SiteMap = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/site-map`,
    {
      next: { revalidate: 60 },
    })
  const SiteMapData = await SiteMap.json();

  return (
    <div>
      <Cta HomePageData={HomePageData} />
      <Footer
        EquipmentsData={servicesListingData}
        AddressData={AddressData}
        SiteMapData={SiteMapData}
        HomePageData={HomePageData}
      />
    </div>
  )
}

export default FooterMain