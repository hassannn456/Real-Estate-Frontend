import React from 'react'
import data from './PropertyData';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
// import "swiper/css/effect-fade";
import "../../../../CssFiles/Home.css";
// import required modules
import { Autoplay, FreeMode,Pagination } from "swiper";
import { Box, styled } from "@mui/material";
import PropertySliderImage from './SliderImageCreator';

const StyledParentBox = styled(Box)({
    display:'flex', 
    justifyContent:'center',
    width: '100%',
    height:'14rem',
    paddingTop:'-10px',
  });
  
const SlidderMapper = () => {
  const images = data.images;
    return(
  <StyledParentBox>
  <Swiper
        // effect={'fade'}
        loop
        speed={800}
        slidesPerView={3}
        spaceBetween={4}
        freeMode={true}
        grabCursor={true}
        // navigation={{ background: 'black'}}
        pagination={{clickable:true}}
        autoplay={{delay:2000}}
        modules={[ Autoplay, Pagination, FreeMode]}
        className="mySwiper"
      >

    {images.map(prod => (
        <SwiperSlide key={prod.id}>
        <PropertySliderImage
          key={prod.id}
          id={prod.id}
          image={prod.image}
        />
        </SwiperSlide>

      ))}
      </Swiper>
      </StyledParentBox>

)}

export default SlidderMapper;