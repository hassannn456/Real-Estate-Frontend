import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import data from "./PropertyDetailsExtensions/PropertyData";
import ChatIcon from "@mui/icons-material/Chat";
import OwnerDetails from "./PropertyDetailsExtensions/OwnerDetails";
import MainPropertyImage from "./PropertyDetailsExtensions/MainPropertyImage";
import SlidderMapper from "./PropertyDetailsExtensions/SliderMapper";
import SlidderXS from "./PropertyDetailsExtensions/SliderXS";
import FeaturesMapper from "./PropertyDetailsExtensions/FeaturesMapper";
import MapContainer from "./PropertyDetailsExtensions/MapContainer";
import { StyledCard, StyledTypography } from "../Cards";


const PropertyDetails = () => {
  const prices = data.price;
  const owner = data.owner;
  const details = data.details;

  return (
    <Stack>
      {/* Header */}
      <Box
        mb={1}
        pt={2}
        sx={{ height: "65px", paddingLeft: { xs: "20px", sm: "32px" } }}
      >
        <StyledTypography variant="h4">
          Property Details
        </StyledTypography>
      </Box>

      {/* Main Stack */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        {/* Mini Stack Row 1 */}
        <Stack px={2} pt={2} flex={3} spacing={2}>
          {/* Owner Card */}

          <StyledCard sx={{ height: "330px" }}>
            <OwnerDetails
              key={owner[0]}
              id={owner[0]}
              image={owner[1]}
              name={owner[2]}
              type={owner[3]}
              address={owner[4]}
            />
          </StyledCard>

          {/* Price and chat button box */}

          <Box
            sx={{ display: "flex", flexDirection: { xs: "row", sm: "column" } }}
          >
            <StyledCard
              sx={{
                height: "100px",
                width: { xs: "48%", sm: "100%" },
                marginRight: { xs: "14px", sm: "none" },
                background: "#3974B6",
                color: "white",
                marginBottom: "16px",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>Starts from</Typography>
              <StyledTypography sx={{ fontSize: "26px"}}>
                ${prices[0]}
              </StyledTypography>
              <Typography sx={{ fontSize: "12px" }}>
                untill ${prices[1]}
              </Typography>
            </StyledCard>

            <Button
              variant="contained"
              sx={{
                height: { xs: "6.2rem", sm: "3.5rem" },
                width: { xs: "48%", sm: "100%" },
                background: "#0FFF50",
                borderRadius: "10px",
              }}
            >
              <ChatIcon /> Get in touch
            </Button>
          </Box>
        </Stack>

        {/* Mini Stack Row 2 */}
        <Stack flex={9} p={2} spacing={2}>
          <MainPropertyImage image={details[1]} />
        
        {/* Description Stack */}
          <Stack spacing={1} sx={{textAlign:{xs:'center',sm:'left'}}}>
          <StyledTypography variant="h5">
          Description
        </StyledTypography>
        <Typography sx={{fontSize:'16px'}}>
          {details[2]}
        </Typography>
          </Stack>

        {/* Slider Stack */}
        <Stack spacing={1} sx={{textAlign:{xs:'center',sm:'left'}}}>
          <StyledTypography variant="h5">
          Gallery
        </StyledTypography>
        
        
        <Stack sx={{ width:{sm:'30rem', md:'30rem',lg:'46rem'}, display:{xs:'none', sm:'flex'}}}>
        <SlidderMapper/>
      </Stack>

      <Stack sx={{ display:{xs:'flex', sm:'none'}}}>
        <SlidderXS/>
      </Stack>

      <Box p={2} sx={{display:'flex', flexDirection:{xs:'column', sm:'column', md:'row'}}}>

        {/* Location Box */}
        <Stack flex={6} sx={{marginRight:{xs:'none', sm:'16px'}}}>
        <StyledTypography variant="h5">
          Location
        </StyledTypography>
          
        <Stack pt={2} sx={{height:'320px', borderRadius:'10px'}}>
            <MapContainer longitude={74.3587} latitude={31.5204}/>
        </Stack>
              
        </Stack>
        
        {/* Features Box */}
        <Stack flex={6} spacing={2}>
        <StyledTypography variant="h5">
          Features
        </StyledTypography>

        <StyledCard sx={{height:'300px'}}>
          <Box ml={-2} sx={{display: "flex", flexWrap: 'wrap', flex: '1 1 ',justifyContent: 'center'}}>
              <FeaturesMapper/>
              </Box>
        </StyledCard>

        </Stack>

      </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default PropertyDetails;
