import React from 'react'
import PrivacyPolicy from '../Components/PrivacyPolicy'
import { ApiUrl } from '@/utils/urls'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const PrivacyPolicyPage = async () => {

    const PrivacyPolicyRes = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/842`, {
        next: { revalidate: 60 },
    })
    const privacyData = await PrivacyPolicyRes.json()

    return (
        <div>
            <PrivacyPolicy privacyData={privacyData} />
        </div>
    )
}

export default PrivacyPolicyPage

export async function generateMetadata() {

  const PrivacyPolicyRes = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/842`, {
        next: { revalidate: 60 },
    })
    const privacyData = await PrivacyPolicyRes.json()

  return generateMetadataFromLib(privacyData, false, "/privacy-policy");
}