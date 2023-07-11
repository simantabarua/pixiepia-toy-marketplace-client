import { useEffect } from "react";
import BannerSection from "../components/home/BannerSection";
import GallerySection from "../components/home/GallerySection";
import KidsGallerySection from "../components/home/KidsGallerySection";
import OurServices from "../components/home/OurServices";
import PromoBanner from "../components/home/PromoBanner";
import ShopByCategory from "../components/home/ShopByCategory";
import usePageTitle from "../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUsBanner from "../components/home/AboutUsBanner";

const Home = () => {
  usePageTitle("Home");
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <BannerSection />
      <PromoBanner data-aos="fade-up" />
      <GallerySection />
      <ShopByCategory />
      <AboutUsBanner />
      <OurServices />
      <KidsGallerySection />
    </>
  );
};

export default Home;
