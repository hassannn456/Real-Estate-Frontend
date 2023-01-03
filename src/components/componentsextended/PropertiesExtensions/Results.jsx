import { Box, styled } from '@mui/material'
import FetchData from '../SearchExtensions/DataFetcher';

const StyledSearchResultBox = styled(Box)({
  display: "flex",
  flexWrap: 'wrap',
  flex: '1 1 160px',
  justifyContent: 'center',
});

const Results = () => {

  return (
    <Box flex={9}>
      <StyledSearchResultBox mb={10}>
        <FetchData/>
      </StyledSearchResultBox>
    </Box>
  )
}

export default Results