import React from 'react'
import CommonHeader from './UI/CommonHeader'

const PrivacyPolicy = ({ privacyData }) => {
  return (
    <div className='pt-[30px] md:pt-[50px] md:pb-[30px] px-[20px] md:px-[50px]'>
      <CommonHeader
        Heading={privacyData?.title?.rendered}
        subHeading={privacyData?.acf?.about_heading}
        Breadcrumb={privacyData?.title?.rendered}
        BreadcrumbLink={privacyData?.slug}
      />
      <div className='mt-10 mx-auto paragraph-color'
        dangerouslySetInnerHTML={{ __html: privacyData?.content?.rendered }}
      ></div>
    </div>
  )
}

export default PrivacyPolicy