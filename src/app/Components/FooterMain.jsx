import React from 'react'
import { ApiUrl } from '@/utils/urls';
import Footer from './UI/Footer';

const FooterMain = async () => {

  const Equipments = await fetch(`${ApiUrl}/wp-json/custom/v1/menus/equipments`,
    {
      next: { revalidate: 60 },
    })
  const EquipmentsData = await Equipments.json();


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
      <Footer
        EquipmentsData={EquipmentsData}
        AddressData={AddressData}
        SiteMapData={SiteMapData}
        HomePageData={HomePageData}
      />
      {/* <Footer/> */}
    </div>
  )
}

export default FooterMain