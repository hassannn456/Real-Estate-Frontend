import { Box, Button, Stack, styled, Typography } from '@mui/material'
import classes from '../../../../CssFiles/AllReviews.module.css'
import React from 'react'

const StyleBox = styled(Box)({
  display:'grid',
  placeItems: 'center',
  width:'300px',
  height:'300px',
  background:'#E8E8E8', 
  borderRadius:'10px',
  margin:'16px'
});

const ResultsCustomer = (props) => {
  return (
    <StyleBox mx={0.6} mb={0.6} pt={0.2}>
      <Stack p={1} sx={{width:'100%'}} >
    <Box className={classes.container}>
    <Box ml={1} className={classes.box}>
        <Box className={classes.imgBox}>
          <img src={props.image} alt="" />
        </Box>
        </Box>
        <Stack spacing={1} >
        <Stack sx={{width:'170px'}}>
        <Typography sx={{ fontSize: '11px', color:'blue'}}>
              #{props.id}
            </Typography>
        <Typography sx={{ fontSize: '17px', fontWeight: "bold", color:'#cc9966' }}>
              {props.name}
            </Typography>
            </Stack>

            <Stack px={1} sx={{textAlign:'end'}}>
        <Typography sx={{ fontSize: '9px', opacity:'0.6'}}>
              Joined on: {props.date}
            </Typography>
        <Typography sx={{ fontSize: '9px', opacity:'0.6'}}>
              {props.time}
            </Typography>
            </Stack>
            </Stack>

            <Stack m={2} sx={{width:'260px', height:'1.4px', background:'darkgrey'}}></Stack>

            <Stack spacing={1.4} px={1} sx={{height:'80px'}}>
              <Stack direction='row' justifyContent='space-between'>
              <Typography pr={2} sx={{ fontSize: '11px', fontWeight:'bold'}}>
              Location:
            </Typography>
        <Typography sx={{ fontSize: '11px', opacity:'0.6'}}>
              {props.location}
            </Typography>
              </Stack>

              <Stack direction='row' justifyContent='space-between'>
              <Typography sx={{ fontSize: '11px', fontWeight:'bold'}}>
              Phone Number:
            </Typography>
        <Typography sx={{ fontSize: '11px', opacity:'0.6'}}>
              {props.contact}
            </Typography>
              </Stack>

              <Stack direction='row' justifyContent='space-between'>
              <Typography sx={{ fontSize: '11px', fontWeight:'bold'}}>
              Email Address:
            </Typography>
        <Typography sx={{ fontSize: '11px', opacity:'0.6'}}>
              {props.email}
            </Typography>
              </Stack>
            </Stack>

            <Stack px={2} mt={2} sx={{width:'100%'}} direction='row' justifyContent='flex-end'>

                <Button variant='contained' sx={{background:'#3974B6', color:'white'}}>Order History</Button>
            </Stack>
            </Box>
            </Stack>
    </StyleBox>
  )
}

export default ResultsCustomer