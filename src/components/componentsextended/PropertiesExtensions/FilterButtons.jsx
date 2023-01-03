import { Box, Button, styled } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const StyledFilterButton = styled(Button)({
    height: "2.7rem",
    width: "100%",
    color: "black",

  });

const StyledButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
      flexDirection:'row'
    },
  }));

export const FilterButtons = (props) => {

  return (
    <StyledButtonBox mt={2} mb={8}>
        <StyledFilterButton
          sx={{ width: "99%" }}
          variant="outlined"
          onClick={props.click}
        >
          <pre>Apply Filters</pre>
          <ExpandMoreIcon />
        </StyledFilterButton>

      </StyledButtonBox>
  )
}

export const FilterLargeButtons = (props) => {

    return (
        <Box mt={2} ml={2.2}>
        <StyledFilterButton
          sx={{display: { xs: "none", sm: "flex" }}}
          mt={2}
          variant="outlined"
          onClick={props.click}
        >
          <pre>Apply Filters</pre>
           <ExpandMoreIcon />
        </StyledFilterButton>

      </Box>
    )
  }

export default FilterButtons