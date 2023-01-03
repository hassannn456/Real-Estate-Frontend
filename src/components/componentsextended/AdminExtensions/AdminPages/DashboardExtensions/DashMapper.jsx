import React from 'react'
import { Box, styled } from "@mui/material";
import data from '../../../HomeExtensions/ReviewsExtension/ApiReviews'
import DashReview from './DashReviews';

const StyledParentBox = styled(Box)({
  display:'flex', 
  flexDirection:'Column',
  width:'100%',
  height:'10rem',
});


const DashMapper = () => {  
    const products = data.products;

    return (
      <StyledParentBox >

            
          {products.slice(0,2).map(prod => (
            <DashReview
              key={prod.id}
              id={prod.id}
              image={prod.image}
              name={prod.name}
              review={prod.review}
              time={prod.time}
              />
            
        ))}

      </StyledParentBox>

  )
}

export default DashMapper