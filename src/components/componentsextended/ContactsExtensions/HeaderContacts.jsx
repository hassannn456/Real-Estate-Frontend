import { Box, Typography } from '@mui/material'
import React from 'react'

const HeaderContacts = () => {
  return (
    <Box pt={2} sx={{height:'65px', paddingLeft:{xs:'20px', sm:'40px'}}}>
      <Typography variant="p" fontWeight="bold">
              Home<span sx={{color:'red'}}>/ContactUs</span>
        </Typography>
        <Typography variant="h4"  fontWeight="bold">
              CONTACT US
        </Typography>
      </Box>
)}


export default HeaderContacts