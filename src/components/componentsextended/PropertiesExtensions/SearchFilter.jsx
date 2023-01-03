import { Box } from "@mui/material";
import React from "react";
import StyledCard from "../../UI/SearchCard";
import SearchForm from "./SearchForm";

const SearchFilter = () => {
  return (
    <Box mb={8}>
      <StyledCard sx={{ height: "750px", width: "96%"  , borderRadius:'20px'}}>
        <SearchForm />
      </StyledCard>
      <StyledCard
          sx={{
          display: { xs: "none", sm: "block" },
          borderRadius:'20px',
          height: "200px",
          width: "96%",
        }}
      ></StyledCard>
    </Box>
  );
};

export default SearchFilter;
