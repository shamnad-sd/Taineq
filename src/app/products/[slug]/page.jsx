
import SingleProducts from '@/app/Components/SingleProducts';
import { ApiUrl } from '@/utils/urls';
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";
import { notFound } from 'next/navigation';

const SingleDetails = async ({ params }) => {
    const { slug } = await params;

    const pageData = await fetch(`${ApiUrl}/wp-json/wp/v2/products?slug=${slug}`, {
        next: { revalidate: 60 },
    });
    const [ProductDetail] = await pageData.json();

    if (!ProductDetail) {
        notFound()
    }

    const product = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/652`, {
        next: { revalidate: 60 },
    })
    const ProductData = await product.json()


    const MoreData = await fetch(
        `${ApiUrl}/wp-json/wp/v2/products${ProductDetail?.id ? '?exclude=' + ProductDetail.id : ''}`,
        {
            next: { revalidate: 60 },
        }
    );
    const MoreProducts = await MoreData.json();


    return (
        <div>
            <SingleProducts
                ProductDetail={ProductDetail}
                MoreProducts={MoreProducts}
                ProductData={ProductData}
            />
        </div>
    )
}

export default SingleDetails

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const pageData = await fetch(`${ApiUrl}/wp-json/wp/v2/products?slug=${slug}`, {
        next: { revalidate: 60 },
    });
    const [ProductDetail] = await pageData.json();

    return generateMetadataFromLib(ProductDetail, false, `/products/${slug}`);
}