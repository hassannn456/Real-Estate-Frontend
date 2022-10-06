import data from './PropertyData'
import { Avatar, Box, Stack, styled, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyleBox = styled(Box)({
  display:'grid',
  placeItems: 'center',
  width:'30%'
});

const FeaturesMapper = () => {
    const features = data.features;

    if (features.length > 0) {
        return (
            <>
          {features.slice(0,15).map(prod => (
            <StyleBox key={prod.id}>
              <Stack direction='row' alignItems='center'>
            <Avatar sx={{ color: "#0FFF50", background:'none'}}>
                        {<CheckCircleIcon/>}
            </Avatar>
            <Typography sx={{fontSize:'9px', fontWeight:'bold'}}>{prod.feature}</Typography>
            </Stack>
            </StyleBox>
            
          ))}
          </>
        )
  };
}
  
  export default FeaturesMapper;