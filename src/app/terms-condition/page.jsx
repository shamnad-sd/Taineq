import React from 'react'
import TermsConditions from '../Components/TermsConditions'
import { ApiUrl } from '@/utils/urls'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const TermsConditionPage = async () => {

    const TermsConditionRes = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/689`, {
        next: { revalidate: 60 },
    })
    const termsConditionData = await TermsConditionRes.json()


    return (
        <div>
            <TermsConditions
            termsConditionData={termsConditionData}
            />
        </div>
    )
}

export default TermsConditionPage

export async function generateMetadata() {

  const TermsConditionRes = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/689`, {
        next: { revalidate: 60 },
    })
    const termsConditionData = await TermsConditionRes.json()

  return generateMetadataFromLib(termsConditionData, false, "/terms-condition");
}