import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
// import "swiper/css/effect-fade";
import "../../../CssFiles/Home.css";
// import required modules
import { Autoplay, Pagination, FreeMode } from "swiper";
import { Box, styled } from "@mui/material";
import data from './ApiReviews'
import ReviewResults from './ReviewResults';


const StyledParentBox = styled(Box)({
  display:'flex', 
  width:'100%',
  height:'22rem',
  paddingTop:'-10px',
  
});


const XsFetchSlider = () => {  
    const products = data.products;

    return (
      <StyledParentBox >

        <Swiper
        // effect={'fade'}
        loop
        speed={800}
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        grabCursor={true}
        pagination={{clickable: true}}
        autoplay={{delay:2000}}
        modules={[Pagination, Autoplay, FreeMode]}
        className="mySwiper"
      >

            
          {products.slice(0,6).map(prod => (
            <SwiperSlide key={prod.id}>
            <ReviewResults
              key={prod.id}
              id={prod.id}
              image={prod.image}
              name={prod.name}
              review={prod.review}
              />
            
          </SwiperSlide>
        ))}
        
      </Swiper>
      </StyledParentBox>

  )
}

export default XsFetchSlider