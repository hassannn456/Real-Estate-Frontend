import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { StyledCard, StyledTypography } from "../Cards";
import Contact from './NewProperty/Contact';
import Description from './NewProperty/Description';
import { StyledDropzone } from './NewProperty/Dropzone';
import Features from './NewProperty/Features';
import Info from './NewProperty/Info';
import MapContainer from "./PropertyDetailsExtensions/MapContainer";

const AddNewProperty = () => {
  return (
    <Stack>

     {/* Header */}
    <Box
      mb={6}
      pt={2}
      sx={{ height: "65px", paddingLeft: { xs: "20px", sm: "32px" } }}
    >
      <StyledTypography variant="h4">
        Add New Property
      </StyledTypography>
    </Box>

    <StyledCard sx={{ marginLeft:'8%', marginRight:'8%', padding:'5%'}}>

      <Box sx={{width:'100%', display:'flex', flexDirection:{xs:'column', sm:'row'}}}>
        
        {/* Basic Info */}
        <Stack p={1} width='100%'>
        <StyledTypography variant="h6">
        Info
      </StyledTypography>

        <Info/>
        </Stack>

        {/* Add Image */}
        <Stack p={1} width='100%'>
        <StyledTypography mb={2} variant="h6">
        Add Front Image
      </StyledTypography>

      <StyledDropzone/>
        </Stack>

      </Box>

      {/* Description Stack */}
      <Stack mt={1} sx={{width:'100%'}}>
      <Stack p={1} width='100%'>
        <StyledTypography variant="h6">
        Description
      </StyledTypography>

        < Description/>
        </Stack>
      </Stack>

      {/* Contact Stack */}
      <Stack mt={1} sx={{width:'100%'}}>
      <Stack p={1} width='100%'>
        <StyledTypography variant="h6">
        Add Contact
      </StyledTypography>

        < Contact/>
        </Stack>
      </Stack>

      {/* Featured Stack */}
      <Stack mt={1} sx={{width:'100%'}}>
      <Stack p={1} width='100%'>
        <StyledTypography variant="h6">
        Add Features
      </StyledTypography>
        < Features/>
        </Stack>
      </Stack>

      <Box sx={{width:'100%', display:'flex', flexDirection:{xs:'column', sm:'row'}}}>
        
        {/* Location */}
        <Stack p={1} width='100%'>
        <StyledTypography mb={1} variant="h6">
        Add Location
      </StyledTypography>
      <Box sx={{height:'300px'}}>
      <MapContainer longitude={74.3587} latitude={31.5204}/>
      </Box>
        </Stack>

        {/* Other Images */}
        <Stack p={1} width='100%'>
        <StyledTypography mb={1} variant="h6">
        Add Gallery Images
      </StyledTypography>

      <StyledDropzone/>
        </Stack>
      </Box>

    </StyledCard>
    
    <Stack mt={4} mb={4} direction='row' width='90%' justifyContent='flex-end'>
        <Stack direction='row' spacing={1}>
          <Button variant='contained' sx={{background:'grey'}}>Add to draft</Button>
          <Button variant='contained' sx={{background:'#3974B6'}}>Publish</Button>
        </Stack>
    </Stack>

    </Stack>
  )
}

export default AddNewProperty