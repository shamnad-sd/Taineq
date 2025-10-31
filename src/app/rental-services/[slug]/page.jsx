
import { ApiUrl } from '@/utils/urls';
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";
import { notFound } from 'next/navigation';
import SingleService from '@/app/Components/SingleService';


const SingleDetails = async ({ params }) => {
  const { slug } = params

  // Fetch page by slug
  const pageRes = await fetch(`${ApiUrl}/wp-json/wp/v2/pages?slug=${slug}`, {
    next: { revalidate: 60 },
  })
  const [serviceDetail] = await pageRes.json()


  if (!serviceDetail || serviceDetail.acf?.is_service !== true) {
    notFound()
  }

    return (
        <div>
            <SingleService
                serviceDetail={serviceDetail}
            />
        </div>
    )
}

export default SingleDetails

export async function generateMetadata({params}) {
     const { slug } = await params;

    const pageData = await fetch(`${ApiUrl}/wp-json/wp/v2/pages?slug=${slug}`, {
        next: { revalidate: 60 },
    });
    const [serviceDetail] = await pageData.json();
    
    if (!serviceDetail || serviceDetail.acf?.is_service !== true) {
    notFound()
  }

  return generateMetadataFromLib(serviceDetail, false, `/rental-services/${slug}`);
}