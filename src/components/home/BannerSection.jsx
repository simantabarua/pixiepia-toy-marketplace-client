import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import toySlide from "../../utils/toySlideData";
import { Link } from "react-router-dom";

const BannerSection = () => {
  const params = {
    pagination: {
      clickable: true,
    },
    navigation: true,
    autoplay: {
      delay: 4500,
    },
    speed: 300,
    modules: [EffectFade, Pagination, Navigation, Autoplay],
  };

  return (
    <Swiper {...params}>
      {toySlide?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero h-96 md:h-[680px] bg-top"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-overlay opacity-90"></div>
            <div className="hero-content text-center  text-white">
              <div className="max-w-4xl space-y-4 ">
                <h1
                  className="font-kiddosy tracking-widest  text-xl sm:text-3xl md:text-5xl uppercase font-medium md:font-semibold
                  
                  text-transparent  bg-clip-text bg-gradient-to-r from-pink-200 to-pink-400
                  leading-none "
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                >
                  {slide.title}
                </h1>
                <p
                  className="font-normal text-xs md:text-xl max-w-md mx-auto"
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                >
                  {slide.description}
                </p>
                <div className="pt-4">
                  <Link to={"/shop"} className="btn-custom ">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSection;
