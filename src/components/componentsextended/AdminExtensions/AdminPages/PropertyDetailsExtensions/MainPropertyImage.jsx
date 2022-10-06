import { Box, Stack } from "@mui/material";
import classes from '../../../../CssFiles/PropertyMain.module.css'

const MainPropertyImage = (props) => {

  return (
    <Stack className={classes.container} >
    <Box className={classes.box}>
        <Box className={classes.imgBox}>
          <img src={props.image} alt="" />
        </Box>
        </Box>
    </Stack>
  );
};

export default MainPropertyImage;
