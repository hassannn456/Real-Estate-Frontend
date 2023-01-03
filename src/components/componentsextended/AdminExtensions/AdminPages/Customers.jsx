import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import FetchCustomers from './CustomerExtensions/FetchCustomers';

const StyledSearchResultBox = styled(Box)({
  display: "flex",
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Customers = () => {
  return (

    <Stack>
     {/* Header */}
    <Box
      pt={2}
      sx={{ height: "65px", paddingLeft: { xs: "20px", sm: "32px" } }}
    >
      <Typography variant="h4" fontWeight="bold">
        Customers
      </Typography>
    </Box>

    <StyledSearchResultBox>
       <FetchCustomers/>
      </StyledSearchResultBox>
    </Stack>
  )
}

export default Customers