import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import classes from '../../../CssFiles/Notifications.module.css'

const StyledStack = styled(Stack)({
    background:'white', 
    width:'100%', 
    borderRadius:'6px',
    '&:hover': {
        background:'black',
        color:'#cc9966'
  },
});


const MessageMapper = (props) => {
  return (
    <StyledStack mx={0.6} my={0.24} py={0.1} direction='row'>
        <Box className={classes.Container}>
        <Box className={classes.imgBox}>
          <img src={props.image} alt="" />
        </Box>
        </Box>

        <Stack justifyContent='center'>
            <Typography sx={{fontSize:'11px', fontWeight:'bold'}}>{props.name}</Typography>
            <Stack direction='row'>
            <Typography sx={{fontSize:'9px'}}>{props.message}</Typography>
            </Stack>

        </Stack>

    </StyledStack>
  )
}

export default MessageMapper