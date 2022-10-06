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

const StyledParentBox = styled(Box)(({ theme }) =>({
    display:'flex', 
    justifyContent:'center',
    width: '100%',
    height:'16rem',
    paddingTop:'-10px',
    [theme.breakpoints.up("sm")]: {
        height:'14rem',
      },
    }));
  
const SlidderXS = () => {
  const images = data.images;
    return(
  <StyledParentBox>
  <Swiper
        // effect={'fade'}
        loop
        speed={800}
        slidesPerView={1}
        spaceBetween={0}
        freeMode={true}
        grabCursor={true}
        // navigation={{ background: 'black'}}
        pagination={{clickable:true}}
        autoplay={{delay:2000}}
        modules={[ Autoplay, Pagination, FreeMode]}
        className="mySwiper"
      >

    {images.map(prod => (
        <SwiperSlide key={prod.id}
        style={{display:'flex', justifyContent:'center'}}>
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

export default SlidderXS;