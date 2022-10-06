import { Box, Typography } from '@mui/material'
import React from 'react'

const HeaderProperties = () => {
  return (
    <Box pt={2} sx={{height:'65px', paddingLeft:{xs:'20px', sm:'32px'}}}>
      <Typography variant="p" fontWeight="bold">
              Home<span sx={{color:'red'}}>/properties</span>
        </Typography>
        <Typography variant="h4" fontWeight="bold">
              PROPERTIES
        </Typography>
      </Box>
)}


export default HeaderProperties