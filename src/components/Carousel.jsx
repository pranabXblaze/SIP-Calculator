import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Carousel() {

  return (
    <div>
        <h2>Popular Funds & Stocks</h2>
        <Swiper slidesPerView={3} spaceBetween={30} >
          <SwiperSlide>Slide 1 :{data}</SwiperSlide>
          <SwiperSlide>Slide 2 :{data}</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    </div>
  )
}
