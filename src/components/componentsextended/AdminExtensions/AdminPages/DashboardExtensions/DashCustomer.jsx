import { Box, Stack, Typography } from "@mui/material";
import classes from '../../../../CssFiles/DashCustomer.module.css'

const DashCustomer = (props) => {

  return (
    <Box mx={0.6} mb={0.6} pt={0.2} sx={{width:'100%'}}>
    <Box className={classes.container}>
    <Box ml={1} className={classes.box}>
        <Box className={classes.imgBox}>
          <img src={props.image} alt="" />
        </Box>
        </Box>
        <Stack px={1} py={1}>
        <Typography sx={{ fontSize: {sm:'12px', md:'14px'}, fontWeight: "bold" }}>
              {props.name}
            </Typography>
            <Typography sx={{ fontSize: '12px', color:'blue'}}>
              {props.type}
            </Typography>
            </Stack>
            </Box>
    </Box>
  );
};

export default DashCustomer;
