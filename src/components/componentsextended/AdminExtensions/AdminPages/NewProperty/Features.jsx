import { Box, Checkbox, FormControlLabel, FormGroup, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '10px',
    [theme.breakpoints.up("lg")]: {
      fontSize: "13px",
    },
  }));

const StyledFormControlLabel = styled(FormControlLabel)({
    margin: 0
  });

const Features = () => {
  return (
    <Box mt={2} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Stack width='100%'>

        <FormGroup>
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Swimming Pool</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Terrace</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Coffee Pot</StyledTypography>} />
          </FormGroup>

        </Stack>

        <Stack width='100%'>

        <FormGroup>
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Cable TV</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Air Conditioner</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Internet</StyledTypography>} />
          </FormGroup>

        </Stack>

        <Stack width='100%'>

        <FormGroup>
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Panels</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Grill</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Computer</StyledTypography>} />
          </FormGroup>

        </Stack>

        <Stack width='100%'>

        <FormGroup>
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Roof Terrace</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Parquet</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Balcony</StyledTypography>} />
          </FormGroup>

        </Stack>

        <Stack width='100%'>

        <FormGroup>
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Oven</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Radio</StyledTypography>} />
            <StyledFormControlLabel control={<Checkbox size="small" />} label={<StyledTypography>Towelwire</StyledTypography>} />
          </FormGroup>

        </Stack>
    </Box>
  )
}

export default Features