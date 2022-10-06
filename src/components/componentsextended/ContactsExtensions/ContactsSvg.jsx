import { Box } from '@mui/material'
import React from 'react'
import classes from '../../CssFiles/Contacts.module.css'

const ContactsSvg = () => {
  return (
    <Box  px={2} sx={{display:{xs: 'none', sm:'none',  md:'block'}, width:'50%'}}>
        <img className={classes.img} src='https://i.pinimg.com/originals/e1/6c/06/e16c0655941aaaff5322379953e1a7a0.png' alt=''/>
    </Box>
  )
}

export default ContactsSvg