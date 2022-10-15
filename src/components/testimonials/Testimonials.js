import React from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="avatar 1" />
          </div>
          <h5 className="client__name">Ernest Achenamer</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            dignissimos tempore reiciendis! Provident consectetur, dolorem error
            aut animi aspernatur rem, dolorum repellat recusandae porro eum
            tempora explicabo repudiandae odio ab!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR2} alt="avatar 1" />
          </div>
          <h5 className="client__name">Ernest Achenamer</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            dignissimos tempore reiciendis! Provident consectetur, dolorem error
            aut animi aspernatur rem, dolorum repellat recusandae porro eum
            tempora explicabo repudiandae odio ab!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR3} alt="avatar 1" />
          </div>
          <h5 className="client__name">Ernest Achenamer</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            dignissimos tempore reiciendis! Provident consectetur, dolorem error
            aut animi aspernatur rem, dolorum repellat recusandae porro eum
            tempora explicabo repudiandae odio ab!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="avatar 1" />
          </div>
          <h5 className="client__name">Ernest Achenamer</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            dignissimos tempore reiciendis! Provident consectetur, dolorem error
            aut animi aspernatur rem, dolorum repellat recusandae porro eum
            tempora explicabo repudiandae odio ab!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
