import BannerSection from "../components/home/BannerSection";
import GallerySection from "../components/home/GallerySection";
import OurServices from "../components/home/OurServices";
import ShopByCategory from "../components/home/ShopByCategory";
import usePageTitle from "../hooks/useTitle";

const Home = () => {
  usePageTitle("Home");
  return (
    <div>
      <BannerSection />
      <GallerySection />
      <ShopByCategory />
      <OurServices />
    </div>
  );
};

export default Home;
