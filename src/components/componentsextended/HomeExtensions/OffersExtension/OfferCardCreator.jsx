import React from 'react'
import { Box } from "@mui/material";
import data from '../../SearchExtensions/DummyData';
import FeaturedCard from './FeaturedCard';

const OfferCardCreator = (props) => {
  const products = data.products;

  if (products.length > 0) {
    return (
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {products.slice(0,8).map(prod => (
        <FeaturedCard
          key={prod.id}
          id={prod.id}
          image={prod.image}
          location={prod.location}
          city={prod.city}
          price={prod.Price}
        />
        
      ))}
      </Box>
)}}

export default OfferCardCreator;