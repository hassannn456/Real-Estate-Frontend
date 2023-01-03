import { Box } from '@mui/material'
import React from 'react'
import classes from '../../CssFiles/Login.module.css'

const LoginImage = (props) => {
    return (

                <Box className={classes.imgSlider}>
                  {props.children}
                </Box>

      )
    }

export default LoginImage