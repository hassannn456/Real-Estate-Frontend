import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import { StyledOuterAlignedStack } from '../../../UI/StacknBoxes';
import TeamMapper from './TeamMapper';

const Team = () => {
  return (
    <StyledOuterAlignedStack alignItems="center">
    <Stack flex={1} mt={3} mb={1}>
      <Typography variant='h4' sx={{color:'#dbc895'}}>OUR TEAM</Typography>
    </Stack>

    <Box mb={4} flex={11} sx={{ width: {md: "100%", lg:'66rem'}}}>
      <TeamMapper />
    </Box>

  </StyledOuterAlignedStack>
);
};

export default Team