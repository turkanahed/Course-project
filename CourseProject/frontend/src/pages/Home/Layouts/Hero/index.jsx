import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper";
import "./style.scss"

const Hero = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <div id='hero'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" alt="" />
          <div className="swiper-content">
            <h1>Get your <span>Education</span> today!</h1>
          </div>
        </SwiperSlide>
        <div id='prev' ref={navigationPrevRef}>Prev</div>
        <div id='next' ref={navigationNextRef}>Next</div>
      </Swiper>
    </div>
  )
}

export default Hero