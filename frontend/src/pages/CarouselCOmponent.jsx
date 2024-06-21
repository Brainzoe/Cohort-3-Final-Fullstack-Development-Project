
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import style from '../HomeComponent/home.module.css'; // Adjust the path as per your project structure

const CarouselComponent = ({ data }) => {
  return (
    <Swiper
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        880: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1281: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      autoplay={{
        delay: 2000,
      }}
    >
      {data.map((content, idx) => (
        <SwiperSlide key={idx}>
          <div className={style['img_box']}>
            <img
              src={process.env.PUBLIC_URL + content.image}
              alt={content.caption}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
