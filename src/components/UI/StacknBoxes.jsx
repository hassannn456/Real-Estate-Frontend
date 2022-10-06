import { Stack, styled } from "@mui/material";

export const StyledImageStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    paddingLeft: "13%",
    paddingRight: "13%",
    justifyContent: "center",
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  }));

export const StyledOuterHomeStack = styled(Stack)(({ theme }) =>({
    height: "200px",
    [theme.breakpoints.up("sm")]: {
      height: "500px",
    },
  }));

  export const StyledOuterAlignedStack = styled(Stack)(({ theme }) =>({
    height: "auto",
    textAlign:'center'
    // [theme.breakpoints.up("sm")]: {
    //   height: "500px",
    // },
  }));


