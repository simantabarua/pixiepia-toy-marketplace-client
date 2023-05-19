import SectionHeader from "../common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GallerySection = () => {
  const images = [
    "https://i.ibb.co/7JYvh9S/LEGO-Toy-Story-Buzz-Lightyear-s-Space-Ranger-Set.jpg",
    "https://i.ibb.co/KbM13sd/Disney-Princess-Enchanted-Castle-Playset.jpg",
    "https://i.ibb.co/VwLr5WR/Disney-Fairies-Playset.jpg",
    "https://i.ibb.co/YZffqKs/Disney-Frozen-Elsa-Plush-Doll.jpg",
    "https://i.ibb.co/xFKgqvx/Disney-Pixar-Cars-Die-Cast-Vehicles.jpg",
    "https://i.ibb.co/HPN6V6L/Disney-Princess-Castle.jpg",
    "https://i.ibb.co/X2kWFQz/Disney-Princess-Cinderella-Doll.jpg",
    "https://i.ibb.co/M5CfKPK/Baby-Mona-Doll.jpg",
    "https://i.ibb.co/C5ksdrf/Fisher-Price-Little-People-Princess-Castle.jpg",
    "https://i.ibb.co/jDD7rh4/hot-Wheels-Ultimate-Garage-Playset.jpg",
    "https://i.ibb.co/xsjNWS3/Jungle-Safari-Animal-Doll-Set.jpg",
    "https://i.ibb.co/gwYBfs9/LEGO-Disney-Cinderella-s-Castle.jpg",
    "https://i.ibb.co/W3gRQcn/LEGO-Disney-Frozen-Arendelle-Castle.jpg",
    "https://i.ibb.co/WHbkxLk/Mega-Construx-Toy-Story-Pizza-Planet-Playset.jpg",
    "https://i.ibb.co/wQqvGZ8/Rapunzel-Toddler-Doll.jpg",
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
        {images?.map((image, index) => (
          <SwiperSlide className="h-full" key={index}>
            <img className="w-72 h-72 object-cover" src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySection;
