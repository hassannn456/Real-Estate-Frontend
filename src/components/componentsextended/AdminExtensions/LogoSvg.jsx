import { Box } from '@mui/material'
import React from 'react'
import classes from '../../CssFiles/Logo.module.css'

const LogoSvg = () => {
  return (
    <Box pb={1}>
        <img className={classes.img} src='https://cdn.logojoy.com/wp-content/uploads/2018/08/23161105/39.png' alt=''/>
    </Box>
  )
}

export default LogoSvg