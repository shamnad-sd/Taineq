import { ApiUrl, frontendUrl } from "@/utils/urls";

export default async function sitemap() {
  try {
    const pages = await fetchAndParseJSON(`${ApiUrl}/wp-json/wp/v2/pages`);
    const Signage = await fetchAndParseJSON(`${ApiUrl}/wp-json/wp/v2/signage`);
    const ITS = await fetchAndParseJSON(`${ApiUrl}/wp-json/wp/v2/its`);
    const Products = await fetchAndParseJSON(`${ApiUrl}/wp-json/wp/v2/products`);

    const excludedPages = ["footer", "home"];

    const sitemapData = [
      ...pages
        .filter((page) => !excludedPages.includes(page.slug))
        .map((page) => ({
          url: `${frontendUrl}/${page.slug}`,
          lastModified: new Date(page.modified).toISOString(),
          changeFrequency: getChangeFrequency(page),
          priority: getPriority(page),
        })),

        // products
      ...Products.map((product) => {
        const categorySlug = product?.meta_data?._sub_category_product_field?.[0]
          ? product.meta_data._sub_category_product_field[0].replace(/\s+/g, "-").toLowerCase()
          : "";

        return {
          url: `${frontendUrl}/products/${product.slug}`,
          changeFrequency: getChangeFrequency(product),
          priority: getPriority(product),
        };
      }),

    //signage
      ...Signage.map((signage) => {
        const categorySlug = signage?.meta_data?._sub_category_signage_field?.[0]
          ? signage.meta_data._sub_category_signage_field[0].replace(/\s+/g, "-").toLowerCase()
          : "";

        return {
          url: `${frontendUrl}/signage/${signage.slug}`,
          changeFrequency: getChangeFrequency(signage),
          priority: getPriority(signage),
        };
      }),

    // its
     ...ITS.map((its) => {
        const categorySlug = its?.meta_data?._sub_category_its_field?.[0]
          ? its.meta_data._sub_category_its_field[0].replace(/\s+/g, "-").toLowerCase()
          : "";

        return {
          url: `${frontendUrl}/its/${its.slug}`,
          changeFrequency: getChangeFrequency(its),
          priority: getPriority(its),
        };
      }),

      // Static URLs
      {
        url: `${frontendUrl}`,
        changeFrequency: "yearly",
        priority: 0.5,
      },
    ];

    return sitemapData;
  } catch (error) {
    console.error("Error generating sitemap:", error.message);
    return []; // Return an empty sitemap in case of errors
  }
}

// Helper function to fetch and parse JSON with error handling
async function fetchAndParseJSON(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error fetching ${url}:`, response.status, response.statusText);
      return []; // Return an empty array if the fetch fails
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to parse JSON from ${url}:`, error.message);
    return []; // Return an empty array if JSON parsing fails
  }
}

function getChangeFrequency(item) {
  if (item.type === "post") {
    return "weekly";
  }
  if (item.type === "product") {
    return "daily";
  }
  return "monthly";
}

function getPriority(item) {
  if (item.type === "post") {
    return 0.7;
  }
  if (item.type === "product") {
    return 0.9;
  }
  return 0.8;
}