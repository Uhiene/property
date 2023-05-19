import React from "react";
import { useGlobalState } from "../store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Property from "./Property";

const PropertySlide = () => {
  const [rooms] = useGlobalState("rooms");
  return (
    <div>
      <Swiper
        // loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          605: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 30,
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
        {rooms.map((room, i) => (
          <div>
            <SwiperSlide>
              <div className="flex justify-between items-center">
                <Property roomProp={room} key={i} />
              </div>
            </SwiperSlide>
           
          </div>
        ))}
        <div className="flex justify-between w-full mt-10">
          <button className="icon-swiper-button-prev bg-slate-100 text-slate-600 p-2 px-4 rounded-full"> prev</button>
          <button className="icon-swiper-button-next bg-slate-100 text-slate-600 p-2 px-4 rounded-full"> next</button>
        </div>
      </Swiper>
    </div>
  );
};

export default PropertySlide;
