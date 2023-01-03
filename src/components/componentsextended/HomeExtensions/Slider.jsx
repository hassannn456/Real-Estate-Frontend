import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import "swiper/css/effect-fade";
import "../../CssFiles/Home.css";
// import required modules
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import { Box, styled } from "@mui/material";
import SliderItems from './SliderItems';
import TestSlider from './SliderImages';

const StyledParentBox = styled(Box)({
  display:'flex', 
  justifyContent:'center',
  alignItems:'center'
});


const Slider = () => {

 const image= "https://www.homestratosphere.com/wp-content/uploads/2020/06/luxury-house-july062020-min.jpg";
  return (
      <StyledParentBox>

        <SliderItems/>

        <Swiper
        // effect={'fade'}
        loop
        speed={800}
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
        autoplay={{delay:3000}}
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestSlider>
            <img src={image} alt="" />
          </TestSlider>
          </SwiperSlide>

        <SwiperSlide>
          <TestSlider>
            <img src={image} alt="" />
          </TestSlider>
          </SwiperSlide>

          <SwiperSlide>
          <TestSlider>
            <img src={image} alt="" />
          </TestSlider>
          </SwiperSlide>

      </Swiper>

      </StyledParentBox>

  )
}

export default Slider