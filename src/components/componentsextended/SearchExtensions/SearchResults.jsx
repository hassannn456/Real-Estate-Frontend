import { Box, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import classes from "../../CssFiles/Search.module.css";


const StyledBox= styled(Box)(({ theme }) => ({
  width:'8.5rem',
    height:'9.2rem',
    marginTop:'none',
    marginBottom:'none',
    marginLeft:'8px',
    marginRight:'8px',
  [theme.breakpoints.up("sm")]: {
    width:'18rem',
    height:'12rem',
    marginTop:'32px',
    marginBottom:'32px',
    marginLeft:'none',
    marginRight:'none',
  },
}));

const SearchResults = (props) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [mouseLeave, setmouseLeave] = useState(true);

  const mouseChangeHandler = () => {
    setMouseEnter(true);
    setmouseLeave(false);
  };

  const mouseLeaveChangeHandler = () => {
    setmouseLeave(true);
    setMouseEnter(false);
  };

  return (
    <StyledBox className={classes.container}>
      <Box sx={{marginRight:{xs:'none',sm:'16px'}, marginLeft:{xs:'none',sm:'16px'}}} className={classes.box}>
        <Box className={classes.imgBox}
        onMouseEnter={mouseChangeHandler}
        onMouseLeave={mouseLeaveChangeHandler}>
          <img src={props.image} alt="" />
        </Box>

        <Box className={classes.content}>
          <Stack width="100%">
            <Typography sx={{ fontSize:{xs:'12px', sm:"17px"} , fontWeight: "bold" }}>
              {props.location}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ fontSize:{xs:'10px', sm:"12px"} }}>{props.city}</Typography>
              <Typography sx={{ fontSize:{xs:'10px', sm:"12px"} }}>{props.price}</Typography>
            </Stack>
          </Stack>
        </Box>

        {!mouseEnter && mouseLeave && (
          <Box className={classes.lowerContent}>
            <Stack width="100%">
            <Typography sx={{ fontSize:{xs:'12px', sm:"17px"} , fontWeight: "bold" }}>
              {props.location}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ fontSize:{xs:'10px', sm:"12px"} }}>{props.city}</Typography>
              <Typography sx={{ fontSize:{xs:'10px', sm:"12px"} }}>{props.price}</Typography>
            </Stack>
            </Stack>
          </Box>
        )}
      </Box>
    </StyledBox>
  );
};

export default SearchResults;
