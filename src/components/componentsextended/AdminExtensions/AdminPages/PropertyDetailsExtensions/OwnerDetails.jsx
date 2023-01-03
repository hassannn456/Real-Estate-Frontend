import { Box, IconButton, Stack, Typography } from "@mui/material";
import classes from '../../../../CssFiles/PropertyOwner.module.css'
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const OwnerDetails = (props) => {

  return (
    <Stack pt={1} px={1} sx={{width:'100%'}} >
    <Stack className={classes.container} justifyContent='center'>
    <Box ml={1} className={classes.box}>
        <Box className={classes.imgBox}>
          <img src={props.image} alt="" />
        </Box>
        </Box>
        <Stack px={1} py={1} textAlign='center' spacing={1}>
        <Typography sx={{ fontSize: '20px', fontWeight: "bold" }}>
              {props.name}
            </Typography>
            <Typography sx={{ fontSize: '14px', color:'blue'}}>
              {props.type}
            </Typography>

            <Typography sx={{ fontSize: '14px', color:'darkgrey'}}>
              {props.address}
            </Typography>

            <Stack px={2} direction='row' justifyContent='space-between'>
            <IconButton>
            <Facebook sx={{color:'black'}} fontSize='large'/>
        </IconButton>
        <IconButton>
        <Twitter sx={{color:'black'}} fontSize='large'/>
        </IconButton>
        <IconButton>
            <Instagram sx={{color:'black'}} fontSize='large'/>
        </IconButton>
            </Stack>
            </Stack>
            </Stack>
    </Stack>
  );
};

export default OwnerDetails;
