import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { StyledOuterAlignedStack } from "../../../UI/StacknBoxes";
import { StyledHeading } from "../../../UI/TypoGraphies";
import OfferCardCreator from "./OfferCardCreator";
import OfferSlider from "./OfferSlider";

const StyledFiltersButton = styled(Button)({
  height: "2.7rem",
  width: "18rem",
  color: "black",
});

const OfferCards = () => {
  return (
    <StyledOuterAlignedStack alignItems="center">
      <Stack flex={1} mt={2} mb={2}>
        <StyledHeading>Featured Properties</StyledHeading>
      </Stack>

      <Box flex={11} ml={10} sx={{ width: { sm: "90%", md: "55rem" } , display:{xs:'none', sm:'flex'}}}>
        <OfferCardCreator />
      </Box>

      <Box flex={11} sx={{ width: '100%' , display:{xs:'flex', sm:'none'}}}>
        <OfferSlider />
      </Box>

      {/* <StyledButtonBox> */}
      <Box sx={{marginTop:{xs:'10px',sm:'50px'}}} mb={3}>
      <Link
        style={{ textDecoration: "none", height: "2.7rem", width: "18rem" }}
        to="/properties"
      >
        <StyledFiltersButton variant="outlined">Show More</StyledFiltersButton>
      </Link>
      {/* </StyledButtonBox> */}
      </Box>
    </StyledOuterAlignedStack>
  );
};

export default OfferCards;
