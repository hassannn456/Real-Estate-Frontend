import { Stack, styled } from "@mui/material";
import React from "react";
import { StyledOuterHomeStack } from "../../UI/StacknBoxes";
import { StyledHeading, StyledBoxText } from '../../UI/TypoGraphies';
import classes from '../../CssFiles/Locations.module.css'

const StyledStackInner = styled(Stack)(({ theme }) =>({
  justifyContent: "center",
  alignItems:'center',
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    textAlign:'none'
  },
}));


const RandomDetails = () => {
    const image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslY2g2jfzxtwN94IJYTGsUpWih8IndlT_Gg&usqp=CAU";

  return (
    <StyledOuterHomeStack direction='row'>
      <StyledStackInner sx={{ paddingLeft: { xs: "none", sm: "6%"}}}>
        <StyledHeading pb={2} sx={{textAlign:{xs:'center', sm:'left'}}}>
            Newly launched campaign in whitby agencies
        </StyledHeading>

        <StyledBoxText >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, ut iure! Similique laborum, obcaecati esse deleniti ipsa accusamus cupiditate ea sint ullam qui delectus odio est et mollitia expedita minima.
        </StyledBoxText>


      </StyledStackInner>
      
      <StyledStackInner sx={{display:{xs:'none', sm:'flex'}}}>
        <img className={classes.imgdetails} src={image} alt=''/>
    </StyledStackInner>
    </StyledOuterHomeStack>
  );
};

export default RandomDetails;
