import React from 'react'
import { Box, styled } from "@mui/material";
import data from './CustomerData'
import DashCustomer from './DashCustomer';

const StyledParentBox = styled(Box)({
  display:'flex', 
  flexDirection:'Column',
  width:'100%',
  height:'10rem',
});


const CustomerMapper = () => {  
    const products = data.products;

    return (
      <StyledParentBox >

            
          {products.slice(0,4).map(prod => (
            <DashCustomer
              key={prod.id}
              id={prod.id}
              image={prod.image}
              name={prod.name}
              type={prod.type}
              />
            
        ))}

      </StyledParentBox>

  )
}

export default CustomerMapper