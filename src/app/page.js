import { ApiUrl } from "@/utils/urls";
import HomePage from "./Components/HomePage";
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const Home = async () => {
  const HomeData = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/658`, {
    next: { revalidate: 60 },
  });

  const HomePageData = await HomeData.json();

  const allPagesRes = await fetch(
    `${ApiUrl}/wp-json/wp/v2/pages?per_page=100`,
    {
      next: { revalidate: 60 },
    }
  );
  const allPages = await allPagesRes.json();

  const servicesListingData = allPages.filter(
    (page) => page.acf?.is_service === true
  );

  const productItems = await fetch(
    `${ApiUrl}/wp-json/wp/v2/equipment-rentals`,
    {
      next: { revalidate: 60 },
    }
  );
  const ProductItemsData = await productItems.json();

  const HomeSlider = await fetch(`${ApiUrl}/wp-json/wp/v2/home-slider`, {
    next: { revalidate: 60 },
  });
  const HomeSliderData = await HomeSlider.json();

  const Features = await fetch(`${ApiUrl}/wp-json/wp/v2/feature`, {
    next: { revalidate: 60 },
  });
  const FeaturesData = await Features.json();

  const Faq = await fetch(`${ApiUrl}/wp-json/wp/v2/faq`, {
    next: { revalidate: 60 },
  });
  const FaqData = await Faq.json();

  return (
    <div>
      <HomePage
        HomePageData={HomePageData}
        ProductItemsData={ProductItemsData}
        servicesListingData={servicesListingData}
        HomeSliderData={HomeSliderData}
        FeaturesData={FeaturesData}
        FaqData={FaqData}
      />
    </div>
  );
};

export default Home;

export async function generateMetadata() {
  let HomeData = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/658`, {
    next: { revalidate: 60 },
  });

  let HomePageData = await HomeData.json();

  return generateMetadataFromLib(HomePageData, false, "/");
}
