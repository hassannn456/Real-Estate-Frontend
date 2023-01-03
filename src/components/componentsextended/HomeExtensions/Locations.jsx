import { Box, Stack, styled } from "@mui/material";
import React from "react";
import { StyledOuterAlignedStack, StyledImageStack } from "../../UI/StacknBoxes";
import { StyledHeading } from "../../UI/TypoGraphies";
import classes from '../../CssFiles/Locations.module.css'

const StyledLocationBox = styled(Box)(({ theme }) => ({
  height: "150px",
  [theme.breakpoints.up("sm")]: {
    height: "240px",
  },
}));


const Locations = () => {
  const image =
    "https://cdnp.flypgs.com/files/Sehirler-long-tail/Paris/eyfel-tower.jpg";

  return (
    <StyledOuterAlignedStack >
      <Stack xs={1} p={1} mb={2}>
        <StyledHeading>FIND OUR PROPERTIES IN THESE CITIES</StyledHeading>
      </Stack>

      <Stack xs={11} >
      
        <StyledImageStack direction='row' > 
  
        <StyledLocationBox mb={1} sx={{width: { xs: "100%", sm: "16rem" }, marginRight: { xs: "none", sm: "12px" }}}>
        <img className={classes.img} src={image} alt=''/>
    </StyledLocationBox>
    

        <StyledLocationBox mb={1} sx={{width: { xs: "100%", sm: "36rem" }}}>
        <img className={classes.img} src={image} alt=''/>
    </StyledLocationBox>

    </StyledImageStack>
    <StyledImageStack mt={1} direction='row' > 

    <StyledLocationBox mb={1} sx={{width: { xs: "100%",sm: "36rem" }, marginRight: { xs: "none", sm: "12px" }}}>
        <img className={classes.img} src={image} alt=''/>
    </StyledLocationBox>

        <StyledLocationBox mb={1} sx={{width: { xs: "100%", sm: "16rem" }}}>
        <img className={classes.img} src={image} alt=''/>
    </StyledLocationBox>

    </StyledImageStack>
      </Stack>
    </StyledOuterAlignedStack>
  );
};

export default Locations;
