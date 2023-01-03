import { Box, styled } from '@mui/material'
import React from 'react'
import classes from '../../CssFiles/About.module.css'

const StyledBox = styled(Box)(({ theme }) =>({
    display:'flex',
    justifyContent:'center',
    width:'100%',
    [theme.breakpoints.up("md")]: {
        width:'35%'
    },
  }));

const AboutSvg = () => {
  return (
    <StyledBox >
        <img className={classes.img} src='https://wallpaper.dog/large/10841483.jpg' alt=''/>
    </StyledBox>
  )
}

export default AboutSvg