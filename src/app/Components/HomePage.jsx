import React from 'react'
import HeroSection from './Home/HeroSection'
import HomeEquipments from './Home/HomeEquipments'
import EquipmentsSlider from './Home/EquipmentsSlider'
import FeaturesGridSection from './Home/FeaturesGridSection'
import HomeAbout from './Home/HomeAbout'
import Faq from './Home/Faq'


const HomePage = ({
  HomePageData,
  servicesListingData,
  HomeSliderData,
  FeaturesData,
  FaqData,
}) => {

  return (
    <div>
      <HeroSection HomePageData={HomePageData} />
      <HomeEquipments HomePageData={HomePageData} ProductItemsData={servicesListingData} />
      <EquipmentsSlider HomeSliderData={HomeSliderData} />
      <FeaturesGridSection FeaturesData={FeaturesData} />
      <HomeAbout HomePageData={HomePageData} />
      <Faq FaqData={FaqData} HomePageData={HomePageData} />
    </div>
  )
}

export default HomePage