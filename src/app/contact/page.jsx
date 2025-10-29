import React from 'react'
import Contact from '../Components/Contact'
import { ApiUrl } from '@/utils/urls'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const ContactPage = async () => {

const contact = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/664`, {
        next: { revalidate: 60 },
    })
    const contactData = await contact.json()
    

  return (
    <div>
        <Contact contactData={contactData}/>

    </div>
  )
}

export default ContactPage

export async function generateMetadata() {

  const contact = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/664`, {
        next: { revalidate: 60 },
    })
    const contactData = await contact.json()

  return generateMetadataFromLib(contactData, false, "/contact");
}