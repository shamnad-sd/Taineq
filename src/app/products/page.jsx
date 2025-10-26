import React from 'react'
import Products from '../Components/Products'
import { ApiUrl } from '@/utils/urls'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const ProductsPage = async () => {

    const product = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/652`, {
        next: { revalidate: 60 },
    })
    const ProductData = await product.json()


    const productItems = await fetch(`${ApiUrl}/wp-json/wp/v2/products`, {
        next: { revalidate: 60 },
    })
    const ProductItemsData = await productItems.json()


    return (
        <div>
            <Products
                ProductData={ProductData}
                ProductItemsData={ProductItemsData}
            />
        </div>
    )
}

export default ProductsPage

export async function generateMetadata() {
  const product = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/652`, {
        next: { revalidate: 60 },
    })
    const ProductData = await product.json()

  return generateMetadataFromLib(ProductData, false, "/products");
}