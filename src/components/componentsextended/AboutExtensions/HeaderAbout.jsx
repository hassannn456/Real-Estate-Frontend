import { Box, Typography } from '@mui/material'
import React from 'react'

const HeaderAbout = () => {
  return (
    <Box pt={2} sx={{height:'65px', paddingLeft:{xs:'20px', sm:'40px'}}}>
      <Typography variant="p" fontWeight="bold">
              Home<span sx={{color:'red'}}>/AboutUs</span>
        </Typography>
        <Typography variant="h4"  fontWeight="bold">
              ABOUT US
        </Typography>
      </Box>
)}


export default HeaderAbout