import { Box, Button, Stack, styled, Typography } from '@mui/material'
import classes from '../../../../CssFiles/AllReviews.module.css'
import React from 'react'

const StyleBox = styled(Box)({
  display:'grid',
  placeItems: 'center',
  width:'300px',
  height:'310px',
  background:'#E8E8E8', 
  borderRadius:'10px',
  margin:'16px'
});

const ResultsReviews = (props) => {
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
        <Stack px={1} sx={{width:'170px'}}>
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

            <Stack px={2} sx={{height:'100px'}}>
            <Typography sx={{ fontSize: '12px', fontWeight:'bold'}}>
              {props.reviewTopic}
            </Typography>
        <Typography sx={{ fontSize: '11px'}}>
              {props.review}
            </Typography>
            </Stack>

            <Stack px={1} mt={2} sx={{width:'100%'}} direction='row' justifyContent='space-between'>
              <Stack>
                <Box px={0.8} sx={{width:'60px', background:'#DAF7A6', borderRadius:'10px'}}>
              <Typography sx={{ color:'green',fontSize: '12px'}}>
              Excellent
            </Typography>
            </Box>

            <Stack direction='row'>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </Stack>
              </Stack>

              <Stack spacing={1} pt={1} direction='row'>
                <Button variant='outlined' size='small' sx={{color:'#50C878', borderColor:'#50C878'}}>Approve</Button>
                <Button variant='outlined' size='small' sx={{color:'#D22B2B', borderColor:'#D22B2B'}}>Reject</Button>
              </Stack>
            </Stack>
            </Box>
            </Stack>
    </StyleBox>
  )
}

export default ResultsReviews