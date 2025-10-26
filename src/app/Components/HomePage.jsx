import React from 'react'
import HeroSection from './Home/HeroSection'
const HomePage = ({ HomePageData}) => {

  return (
    <div>
      <HeroSection HomePageData={HomePageData}
      />
     
    </div>
  )
}

export default HomePage