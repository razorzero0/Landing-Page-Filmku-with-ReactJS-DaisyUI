// Import Swiper React components
import {  Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation  } from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function S () {
    return (<div class="max-w-3xl swiper">

      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      >
        
        <SwiperSlide> 
    <img src="https://image.tmdb.org/t/p/original/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg" class="w-full" alt="aa"/>
  </SwiperSlide>
        <SwiperSlide>
        <img src="https://image.tmdb.org/t/p/original/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg" class="w-full" alt="aa"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://image.tmdb.org/t/p/original/xfNHRI2f5kHGvogxLd0C5sB90L7.jpg" class="w-full" alt="aa"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://image.tmdb.org/t/p/original/vvObT0eIWGlArLQx3K5wZ0uT812.jpg" class="w-full" alt="aa"/>
        </SwiperSlide>
      
       
      
      </Swiper>
      </div>
    );
  };