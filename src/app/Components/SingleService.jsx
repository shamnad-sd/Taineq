import React from 'react'
import CommonHeader from './UI/CommonHeader'



const SingleService = ({ serviceDetail }) => {


  return (
    <section className='pt-[30px] md:pt-[50px] md:pb-[30px] px-[20px] md:px-[50px]'>

    <div className=''>
      <CommonHeader
        Heading={serviceDetail?.title?.rendered}
        breadcrumbItems={[
        //   { title: 'Rental Service', href: '/rental-service' },
          { title: serviceDetail?.title?.rendered, href: `/rental-service/${serviceDetail?.slug}` }
        ]}
      />


    </div>
    </section>
  )
}

export default SingleService