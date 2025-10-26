import { ApiUrl } from '@/utils/urls'
import React from 'react'
import About from '../Components/About'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const AboutPage = async () => {

  const about = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/609`, {
    next: { revalidate: 60 },
  })
  const AboutData = await about.json()

  const Gallery = await fetch(`${ApiUrl}/wp-json/wp/v2/gallery`, {
    next: { revalidate: 60 },
  })
  const GalleryData = await Gallery.json()

  return (
    <div>
      <About AboutData={AboutData} GalleryData={GalleryData} />
    </div>
  )
}

export default AboutPage

export async function generateMetadata() {

  const about = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/609`, {
    next: { revalidate: 60 },
  })
  const AboutData = await about.json()

  return generateMetadataFromLib(AboutData, false, "/about");
}