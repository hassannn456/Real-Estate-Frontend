import { styled, Typography } from "@mui/material";

export const StyledHeading = styled(Typography)(({ theme }) =>({
    fontSize: "20px",
    fontWeight:'bold',
    textAlign:'center',
    [theme.breakpoints.up("sm")]: {
        fontSize: "24px",
    },
  }));

export const StyledBoxText = styled(Typography)(({ theme }) =>({
    paddingTop: '2px',
    paddingLeft: '12%',
    paddingRight: '12%',
    fontSize:"10px",
    textAlign:'center',
    [theme.breakpoints.up("sm")]: {
        textAlign:'left',
        paddingTop: '20px',
        paddingLeft: '1%',
        paddingRight: '1%',
        fontSize:"18px"
    },
  }));