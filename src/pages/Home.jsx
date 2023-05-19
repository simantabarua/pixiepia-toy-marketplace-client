import BannerSection from "../components/home/BannerSection";
import GallerySection from "../components/home/GallerySection";
import ShopByCategory from "../components/home/ShopByCategory";

const Home = () => {
  return (
    <div className="grid grid-cols-1 place-items-center bg-pink-50  h-screen">
      <BannerSection />
      <GallerySection />
      <ShopByCategory />
    </div>
  );
};

export default Home;
