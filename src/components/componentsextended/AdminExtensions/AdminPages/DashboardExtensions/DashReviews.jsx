import { Box, Stack, Typography } from "@mui/material";
import classes from '../../../../CssFiles/DashReviews.module.css'

const DashReview = (props) => {

  return (
    <Box mx={0.6} mb={0.6} py={0.3} sx={{background:'#D3D3D3', borderRadius:'10px'}}>
    <Box className={classes.container}>
    <Box ml={1} className={classes.box}>
        <Box className={classes.imgBox}>
          <img src={props.image} alt="" />
        </Box>
        </Box>
        <Stack>
        <Typography sx={{ fontSize: {xs:'11px', sm:'10px', lg:'12px'}, fontWeight: "bold" }}>
              {props.name}
            </Typography>
            <Typography sx={{ fontSize: {xs:'9px', sm:'9px', lg:'10px'}, color:'grey'}}>
              {props.time}
            </Typography>
            </Stack>
            </Box>
        <Box py={0.4} pl={1.4} pr={0.6} sx={{textAlign:'left'}}>
        <Typography sx={{fontSize:{xs:'9px', sm:'9px', lg:'10px'}}}>{props.review}</Typography>
        </Box>
    </Box>
  );
};

export default DashReview;
