import { Box, Typography } from "@mui/material";
import classes from '../../../CssFiles/Review.module.css'

const ReviewResults = (props) => {

  return (
    <Box px={1} mb={3} sx={{width:'23rem'}}>
    <Box className={classes.container}>
    <Box mx={2} className={classes.box}>
        <Box className={classes.imgBox}>
          <img src={props.image} alt="" />
        </Box>
        </Box>
        
        <Typography sx={{ fontSize: "17px", fontWeight: "500" }}>
              {props.name}
            </Typography>
            </Box>
        <Box pt={1.2} pl={2.2} sx={{textAlign:'left'}}>
        <Typography variant='p'>{props.review}</Typography>
        </Box>
    </Box>
  );
};

export default ReviewResults;
