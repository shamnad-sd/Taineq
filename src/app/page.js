import { ApiUrl } from "@/utils/urls";
import HomePage from "./Components/HomePage";
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const Home = async () => {

  const HomeData = await fetch(`${ApiUrl}/wp-json/wp/v2/pages/658`, {
    next: { revalidate: 60 },
  });

  const HomePageData = await HomeData.json();

  return (
    <div>
      <HomePage
        HomePageData={HomePageData}
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
