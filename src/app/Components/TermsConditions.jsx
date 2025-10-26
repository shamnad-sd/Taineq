import React from 'react'

const TermsConditions = ({termsConditionData}) => {
  return (
     <div className='bg-gradient-to-b from-[#d0e7cb] via-transparent to-transparent px-6 lg:px-22 md:px-10 py-10 lg:py-20'>
        <h1 className='text-[28px] md:text-[46px] Primary-font uppercase leading-tight bg-gradient-to-r from-[#145D3E] via-[#45606E] to-[#63AF51] bg-clip-text text-transparent pb-5'>{termsConditionData?.title?.rendered}</h1>
        <div
        className='para space-y-2'
        dangerouslySetInnerHTML={{
            __html : termsConditionData?.content?.rendered
        }}
        >

        </div>
    </div>
  )
}

export default TermsConditions