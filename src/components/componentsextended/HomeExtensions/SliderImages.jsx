import { Box } from '@mui/material'
import React from 'react'
import classes from '../../CssFiles/Slider.module.css'

const TestSlider = (props) => {
  return (
    <Box sx={{width:'100%'}} className={classes.box}>
            <Box className={classes.imgSlider}>
              {props.children}
            </Box>
          </Box>
  )
}

export default TestSlider