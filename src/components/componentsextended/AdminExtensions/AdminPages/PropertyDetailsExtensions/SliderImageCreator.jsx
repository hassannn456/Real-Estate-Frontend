import { Box } from "@mui/material";
import classes from '../../../../CssFiles/PropertySlider.module.css'

const PropertySliderImage = (props) => {

  return (
    <Box className={classes.container} sx={{width:'100%'}}>
    <Box className={classes.box}>
        <Box className={classes.imgBox}>
          <img src={props.image} alt="" />
        </Box>
        </Box>
    </Box>
  );
};

export default PropertySliderImage;
