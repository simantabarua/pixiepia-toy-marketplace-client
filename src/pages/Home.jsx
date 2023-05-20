import BannerSection from "../components/home/BannerSection";
import GallerySection from "../components/home/GallerySection";
import ShopByCategory from "../components/home/ShopByCategory";
import usePageTitle from "../hooks/useTitle";

const Home = () => {
  usePageTitle('Home')
  return (
    <div >
      <BannerSection />
      <GallerySection />
      <ShopByCategory />
    </div>
  );
};

export default Home;
