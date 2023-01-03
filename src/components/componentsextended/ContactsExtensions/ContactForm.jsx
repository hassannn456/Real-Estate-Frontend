import { Box, Button, IconButton, Stack, styled, TextField } from '@mui/material'
import React from 'react'
import { Google, Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const StyledSearchButton = styled(Button)(({ theme }) =>({
    background: "#dbc895",
    width: "280px",
    color: "black",
    boxShadow: "30",
    marginTop: '8px',
    borderRadius:'20px',
    [theme.breakpoints.up("sm")]: {
        width: "310px",
    },
  }));

  const StyledBox = styled(Box)(({ theme }) =>({
    display: 'flex',
    flexDirection:'column',
    width:'100%',
    [theme.breakpoints.up("sm")]: {
        flexDirection:'row',
    },
  }));

  const StyledMainBox = styled(Box)(({ theme }) =>({
    width:'100%',
    display: 'flex',
    justifyContent:'center',
    [theme.breakpoints.up("md")]: {
        width:'50%',
        paddingLeft:'48px',
    },
  }));


const ContactForm = () => {
  return (
    <StyledMainBox pt={2}>
        <Stack sx={{width:{xs:'295px',sm:'330px'}}} alignItems='center'>
        <StyledBox>
        <TextField
              sx={{ width:{xs:'280px',sm:'50%'}, margin: "8px" }}
              id="standard-helpertext"
              label="First Name"
              type="text"
              size='small'
            //   value={name}
            //   onChange={(event) => {
            //     setname(event.target.value);
            //   }}
            />

            <TextField
              sx={{ width:{xs:'280px',sm:'50%'}, margin: "8px" }}
              id="standard-helpertext"
              label="Last Name"
              type="text"
              size='small'
            //   value={name}
            //   onChange={(event) => {
            //     setname(event.target.value);
            //   }}
            />
        </StyledBox>

            <TextField
              sx={{ width:{xs:'280px',sm:'310px'}, margin: "8px" }}
              id="standard-helpertext"
              required
              label="Email Address"
              type="email"
              variant="outlined"
              size='small'
            //   value={date}
            //   onChange={(event) => {
            //     setdate(event.target.value);
            //   }}
            />

            <TextField
              sx={{ width:{xs:'280px',sm:'310px'}, margin: "8px" }}
              id="standard-helpertext"
              label="Phone Number"
              type="number"
              size='small'
            //   value={experience}
            //   onChange={(event) => {
            //     setexperience(event.target.value);
            //   }}
            />

        <StyledSearchButton>Contact</StyledSearchButton>
        
        <Stack spacing={1} mx={'auto'} mt={10} sx={{height:'60px'}} direction='row'>
        <IconButton >
            <Google fontSize='large'/>
        </IconButton>
        <IconButton>
            <LinkedIn fontSize='large'/>
        </IconButton>
        <IconButton>
            <Facebook fontSize='large'/>
        </IconButton>
        <IconButton>
            <Twitter fontSize='large'/>
        </IconButton>
        </Stack>
        </Stack>
    </StyledMainBox>
  )
}

export default ContactForm