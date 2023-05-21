import React from "react";
import { useGlobalState } from "../store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Customer from "./Customer";

const CustomerSlide = () => {
  const [customers] = useGlobalState("customers");
  return (
      <div className="flex justify-between">
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
          {customers.map((customer, i) => (
          <SwiperSlide  className="h-[90%]">
             <Customer customerProp={customer}   key={i}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default CustomerSlide;
