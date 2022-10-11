import React, { useContext, useState } from "react";
import {
  Button,
  Typography,
  Box,
  Card,
  styled,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import LoginImage from "../componentsextended/LoginExtensions/LoginImage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { navActions } from "../Redux/NavSlice";
import ErrorModal from "../componentsextended/LoginExtensions/ErrorModal";
import { AuthContext } from "../componentsextended/LoginExtensions/auth-context";
import { useHttpClient } from "../hooks/http-hook";
import { useForm } from "../hooks/form-hook";
import ImageUpload from "../componentsextended/LoginExtensions/ImageUpload";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../componentsextended/LoginExtensions/validators";
import Admin from "./Admin";
import Input from "../componentsextended/LoginExtensions/Input";

const StyledBox = styled(Box)({
  height: "800px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledCard = styled(Card)(({ theme }) => ({
  color: "white",
  height: "770px",
  width: "380px",
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
  },
}));

const StyledSignUp = styled(Box)({
  height: "1.4px",
  background: "darkgrey",
  width: "2rem",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "18rem",
  height: "50px",
  borderRadius: "40px",
  color: "white",
  "&:disabled": {
    backgroundColor: 'darkgray',
    cursor:'not-allowed',
  },
  [theme.breakpoints.up("sm")]: {
    width: "21rem",
  },
}));

const LogIn = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navActions.toggleNot());
  }, [dispatch]);
  const image =
    "https://www.homestratosphere.com/wp-content/uploads/2020/06/luxury-house-july062020-min.jpg";

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/login",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.userId, responseData.token);

        <Link to={<Admin/>}></Link>
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("email", formState.inputs.email.value);
        formData.append("name", formState.inputs.name.value);
        formData.append("password", formState.inputs.password.value);
        formData.append("image", formState.inputs.image.value);
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/signup",
          "POST",
          formData
        );
        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    }
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <StyledBox>
        <LoginImage>
          <img src={image} alt="" />
        </LoginImage>

        <StyledCard>
          <form onSubmit={authSubmitHandler}>
            <Typography variant="h4" px={3} pt={6} mb={2}>
              {isLoginMode ? "Sign In" : "Sign Up"}
            </Typography>

            <Stack spacing={1} mb={2.6} >
              {!isLoginMode && (
                <ImageUpload
                  center
                  id="image"
                  onInput={inputHandler}
                  errortext="Please provide an image."
                />
              )}

              {!isLoginMode && (
                <Input
                  element="input"
                  id="name"
                  type="text"
                  label="Name:"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a name."
                  onInput={inputHandler}
                />
              )}

              <Input
                element="input"
                id="email"
                type="email"
                label="E-Mail:"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email address."
                onInput={inputHandler}
              />
              <Input
                element="input"
                id="password"
                type="password"
                label="Password:"
                validators={[VALIDATOR_MINLENGTH(6)]}
                errorText="Please enter a valid password, at least 6 characters."
                onInput={inputHandler}
              />

{isLoginMode && (
              <Stack>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="third" />}
                  label="Keep me logged in"
                />
              </FormGroup>
              </Stack>
            )}

            </Stack>

            

            {/* <Link style={{ textDecoration: "none" }} to="/admin"> */}
            {isLoading && 
            <Stack direction='row' justifyContent='center' sx={{width:{xs:'18rem', sm:'21rem'}}}>
            <CircularProgress color="inherit" />
            </Stack>}
            {!isLoading &&
            <StyledButton
              color="third"
              variant="contained"
              type="submit"
              // disabled={!formState.isValid}
            >
              {isLoginMode ? "Sign In" : "Sign Up"}
            </StyledButton>}
            {/* </Link> */}
          </form>

          <Stack
            direction="row"
            justifyContent="flex-end"
            sx={{ width: { xs: "18rem", sm: "19.6rem" } }}
          >
            {isLoginMode && (
              <Box mt={1}>
                <Button
                  background="none"
                  sx={{ color: "#6495ED", textTransform: "none" }}
                >
                  <Typography sx={{ fontSize: "11px" }}>
                    Forgot Password?
                  </Typography>
                </Button>
              </Box>
            )}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ width: { xs: "18rem", sm: "21rem" } }}
            mt={3}
            mb={8}
          >
            <StyledSignUp flex={3}></StyledSignUp>
            <Box flex={6}>
              {/* <Link style={{ textDecoration: "none" }} to="/signup"> */}
              <Button
                background="none"
                onClick={switchModeHandler}
                sx={{ color: "#6495ED", textTransform: "none" }}
              >
                <Typography sx={{ fontSize: "16px" }}>
                  {isLoginMode ? "Create New Account" : "Sign In"}
                </Typography>
              </Button>
              {/* </Link> */}
            </Box>
            <StyledSignUp flex={3}></StyledSignUp>
          </Stack>
        </StyledCard>
      </StyledBox>
    </>
  );
};

export default LogIn;
