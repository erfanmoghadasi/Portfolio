import React from "react";
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.png';
import './testimonials.css'
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      avatar: avatar1,
      name: "name",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde vel, quod, quidem ratione tenetur sint recusandae itaque officia officiis laboriosam nihil veniam repellendus enim cupiditate voluptas quasi architecto mollitia?",
    },
    {
      avatar: avatar2,
      name: "name",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde vel, quod, quidem ratione tenetur sint recusandae itaque officia officiis laboriosam nihil veniam repellendus enim cupiditate voluptas quasi architecto mollitia?",
    },
    {
      avatar: avatar3,
      name: "name",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde vel, quod, quidem ratione tenetur sint recusandae itaque officia officiis laboriosam nihil veniam repellendus enim cupiditate voluptas quasi architecto mollitia?",
    },
    {
      avatar: avatar4,
      name: "name",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde vel, quod, quidem ratione tenetur sint recusandae itaque officia officiis laboriosam nihil veniam repellendus enim cupiditate voluptas quasi architecto mollitia?",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[ Pagination, Navigation ]}
        navigation
        spaceBetween={40}
        slidesPerView={1}
      className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper
      
      >
    </section>
  );
};

export default Testimonials;
