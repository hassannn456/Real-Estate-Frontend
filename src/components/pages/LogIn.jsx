import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  TextField,
  Typography,
  Box,
  Card,
  styled,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { Link } from "react-router-dom";
import LoginImage from "../componentsextended/LoginExtensions/LoginImage";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { navActions } from '../Redux/NavSlice';

const StyledBox = styled(Box)({
    height: "800px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const StyledCard = styled(Card)(({ theme }) =>({
    color:'white',
    height: "540px",
    width: "318px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "rgba(34, 34, 34, 0.85)",
    position: "absolute",
    zIndex: "2",
[theme.breakpoints.up("sm")]: {
      width: "480px",
      height: "630px",
    },
  }));

const StyledTextField = styled(TextField)(({ theme }) =>({
  width: "18rem", 
  background:'darkgrey', 
  borderRadius:'6px',
    input: {
      "&::placeholder": {
        color: "white",
      },
    },
      [theme.breakpoints.up("sm")]: {
        width: "21rem",
      },
  }));

const StyledSignUp = styled(Box)({
    height:'1.4px', 
    background:'darkgrey',
    width:'2rem',
  });

const StyledButton = styled(Button)(({ theme }) =>({
  width: "18rem", 
  height: "50px",  
  borderRadius:'40px', 
  color:'white',
  [theme.breakpoints.up("sm")]: {
    width: "21rem",
  },
}));

// const SaveData = () => {
  
// }


const LogIn = () => {
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(navActions.toggleNot());
  }, [dispatch]);
 const image= "https://www.homestratosphere.com/wp-content/uploads/2020/06/luxury-house-july062020-min.jpg";

  return (
    <StyledBox >
      
      <LoginImage>
            <img src={image} alt="" />
      </LoginImage>

      <StyledCard>
        <CardContent>
          <Typography variant="h4" p={3}>
            Sign In
          </Typography>


          <Stack spacing={2} mb={3} mt={4}>
          <StyledTextField
            id="email-input"
            placeholder="Username or E-mail"
            type="email"
          />
          <StyledTextField
            id="outlined-password-input"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
          />
          </Stack>

          <FormGroup>
            <FormControlLabel control={<Checkbox color='third'/>} label="Keep me logged in" />
          </FormGroup>

        </CardContent>
        <CardActions>
          <Link style={{ textDecoration: "none" }} to="/admin">
            <StyledButton
              color='third'
              variant="contained"
              type="submit"
              // onClick={(e)=>SaveData}
            >
              Sign In
            </StyledButton>
          </Link>
        </CardActions>
        <Stack direction='row' justifyContent='flex-end' sx={{width:{xs:'18rem', sm:'19.6rem'}}}>
          <Box >
        <Button background='none' sx={{color:'blue', textTransform: 'none'}}><Typography sx={{fontSize:"11px"}}>Forgot Password?</Typography></Button>
          </Box>

        </Stack>

        <Stack direction='row' alignItems='center' sx={{width:{xs:'18rem', sm:'21rem'}}} mt={2} mb={8}>
          <StyledSignUp flex={3}></StyledSignUp>
          <Box flex={6} >
        <Button background='none' sx={{color:'blue', textTransform: 'none'}}><Typography sx={{fontSize:"16px"}}>Sign Up</Typography></Button>
          </Box>
          <StyledSignUp flex={3}></StyledSignUp>
        </Stack>
      </StyledCard>
      
    </StyledBox>
  );
};

export default LogIn;