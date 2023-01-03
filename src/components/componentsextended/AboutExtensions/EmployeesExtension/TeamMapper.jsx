import React from 'react'
import { Box } from "@mui/material";
import data from './DummyTeam';
import TeamCard from './TeamCard';

const TeamMapper = (props) => {
  const products = data.products;

  if (products.length > 0) {
    return (
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {products.map(prod => (
        <TeamCard
          key={prod.id}
          id={prod.id}
          image={prod.image}
          firstname={prod.firstname}
          lastname={prod.lastname}
        />
        
      ))}
      </Box>
)}}

export default TeamMapper;