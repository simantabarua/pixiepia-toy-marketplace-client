import BannerSection from "../components/home/BannerSection";
import GallerySection from "../components/home/GallerySection";
import KidsGallerySection from "../components/home/KidsGallerySection";
import OurServices from "../components/home/OurServices";
import PromoBanner from "../components/home/PromoBanner";
import ShopByCategory from "../components/home/ShopByCategory";
import usePageTitle from "../hooks/useTitle";

const Home = () => {
  usePageTitle("Home");
  return (
    <div>
      <BannerSection />
      <PromoBanner />
      <GallerySection />
      <ShopByCategory />
      <OurServices />
      <KidsGallerySection />
    </div>
  );
};

export default Home;
