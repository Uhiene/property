import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import HeroText from "../components/hero/HeroText";
import Navbar from "../components/hero/Navbar";

const Hero = ({ images }) => {
  return (
    <Swiper
      //   loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: ".icon-swiper-button-prev",
        nextEl: ".icon-swiper-button-next",
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-screen h-screen bg-no-repeat bg-cover bg-center py-4 md:py-8 px-5 md:px-20"
            style={{ backgroundImage: `url(${image})` }}
          >
            <Navbar />
            <HeroText />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
