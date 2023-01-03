import { Box, Stack, styled, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import FetchReviews from "./ReviewExtensions/FetchReviews";

const StyledSearchResultBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const Reviews = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      {/* Header */}
      <Box
        mb={2}
        pt={2}
        sx={{ height: "65px", paddingLeft: { xs: "20px", sm: "32px" } }}
      >
        <Typography variant="h4" fontWeight="bold">
          Reviews
        </Typography>
      </Box>

      <Box sx={{ paddingLeft: { xs: "0px", sm: "48px" }, width:{xs:'100%', sm:'380px'}, borderColor: "divider" }}>
        <Tabs
          sx={{background:'#E8E8E8', border:'none', borderRadius:'10px'}}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          TabIndicatorProps={{
            sx: { backgroundColor: "#cc9966" },
          }}
        >
          <Tab label="All Reviews" value={'1'} />
          <Tab label="Published" value={'2'} />
          <Tab label="Trashed" value={'3'} />
        </Tabs>
      </Box>

      <StyledSearchResultBox>
        <FetchReviews />
      </StyledSearchResultBox>
    </Stack>
  );
};

export default Reviews;
