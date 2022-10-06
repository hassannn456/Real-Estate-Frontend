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
import { Autoplay, FreeMode,Pagination } from "swiper";
import { Box, styled } from "@mui/material";
import FeaturedCard from './FeaturedCard';
import data from '../../SearchExtensions/DummyData';


const StyledParentBox = styled(Box)({
  display:'flex', 
  width:'100%',
  height:'22rem',
  paddingTop:'-10px'
});


const OfferSlider = () => {  
    const products = data.products;

    return (
      <StyledParentBox >

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
 
        {/* <SwiperSlide></SwiperSlide> */}
         
        {products.slice(0,8).map(prod => (
            <SwiperSlide key={prod.id}>
          <FeaturedCard
            key={prod.id}
            id={prod.id}
            image={prod.image}
            location={prod.location}
            city={prod.city}
            price={prod.Price}
          />
          </SwiperSlide>
        ))}
        
      </Swiper>
      </StyledParentBox>

  )
}

export default OfferSlider