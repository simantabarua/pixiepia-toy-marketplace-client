import SectionHeader from "../common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GallerySection = () => {
  const images = [
    "https://i.ibb.co/2S3NW5F/1.png",
    "https://i.ibb.co/QjQxtWL/2.png",
    "https://i.ibb.co/fMf1pTp/3.png",
    "https://i.ibb.co/cDVVqnQ/4.png",
    "https://i.ibb.co/cDVVqnQ/4.png",
    "https://i.ibb.co/cDVVqnQ/4.png",
    "https://i.ibb.co/cDVVqnQ/4.png",
    "https://i.ibb.co/cDVVqnQ/4.png",
  ];
  return (
    <div>
      <SectionHeader
        title={"Unleash Your Imagination: A Journey into the"}
        subtitle={
          "Explore a World of Endless Joy, Adventure, and Possibilities"
        }
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className=" absolute top-0 left-0 w-full h-full "
      >
        {images.map((image, index) => (
          <SwiperSlide className="h-full" key={index}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySection;
