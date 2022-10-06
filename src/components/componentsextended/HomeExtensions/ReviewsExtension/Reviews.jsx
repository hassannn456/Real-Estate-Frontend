import { Stack } from '@mui/material'
import React from 'react'
import { StyledOuterAlignedStack } from "../../../UI/StacknBoxes";
import { StyledHeading } from '../../../UI/TypoGraphies';
import FetchReviews from './FetchReviews';
import XsFetchSlider from './XsFetchReviws';

const BoxFifth = () => {
  return (
    <StyledOuterAlignedStack>
    <Stack xs={1} pt={4}>
    <StyledHeading>
    Clients Feedback
    </StyledHeading>
    </Stack>
    <Stack xs={11} sx={{display:{xs:'none', sm:'flex'}}}>
      <FetchReviews/>
    </Stack>

    <Stack xs={11} sx={{display:{xs:'flex', sm:'none'}}}>
      <XsFetchSlider/>
    </Stack>
    
</StyledOuterAlignedStack>
  )
}

export default BoxFifth