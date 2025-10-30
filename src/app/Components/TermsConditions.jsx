import React from 'react'
import CommonHeader from './UI/CommonHeader'

const TermsConditions = ({termsConditionData}) => {
  return (
     <div className='pt-[30px] md:pt-[50px] md:pb-[30px] px-[20px] md:px-[50px]'>
      <CommonHeader
        Heading={termsConditionData?.title?.rendered}
        subHeading={termsConditionData?.acf?.about_heading}
        Breadcrumb={termsConditionData?.title?.rendered}
        BreadcrumbLink={termsConditionData?.slug}
      />
      <div className='mt-10 mx-auto paragraph-color'
        dangerouslySetInnerHTML={{ __html: termsConditionData?.content?.rendered }}
      ></div>
    </div>
  )
}

export default TermsConditions