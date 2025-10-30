import React from 'react'
import { ApiUrl } from '@/utils/urls'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";
import RentalServices from '../Components/RentalServices';

const servicesPage = async () => {

    const services = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/662`, {
        next: { revalidate: 60 },
    })
    const servicesData = await services.json()


    const servicesListing = await fetch(`${ApiUrl}/wp-json/wp/v2/rental-services`, {
        next: { revalidate: 60 },
    })
    const servicesListingData = await servicesListing.json()

    return (
        <div>
            <RentalServices
                servicesData={servicesData}
                servicesListingData={servicesListingData}
            />
        </div>
    )
}

export default servicesPage

export async function generateMetadata() {
  const services = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/662`, {
        next: { revalidate: 60 },
    })
    const servicesData = await services.json()

  return generateMetadataFromLib(servicesData, false, "/rental-services");
}