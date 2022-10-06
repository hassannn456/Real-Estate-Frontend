import { Box, Card, Stack, styled, Typography } from "@mui/material";
import classes from '../../../CssFiles/Team.module.css'

const StyledTeamCard = styled(Card)(({ theme }) =>({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222222",
    color:'white',
    margin:'12px',
    padding:0,
    boxShadow:'1px 1px 20px 1px grey',
    [theme.breakpoints.up("lg")]: {
      margin:'16px'
    },
  }));
  
  
const TeamCard = (props) => {

  return (
    <StyledTeamCard sx={{borderRadius: "10px"}}>
    <Stack  p={2} sx={{width:{xs:'130px', sm:'170px'}, height:{xs:'190px', sm:'210px'}}} alignItems='center'>
    <Box  className={classes.container}
    >
      <Stack mx={2} mb={1} className={classes.box}>
        <Box className={classes.imgBox}>
          <img src={props.image} alt="" />
        </Box>
        </Stack>
        </Box>
        <Typography sx={{fontSize:'27px', fontWeight:'bold'}} >{props.firstname}</Typography>
        <Typography sx={{fontSize:'12px', fontWeight:'60'}}>{props.lastname}</Typography>
    </Stack>
    </StyledTeamCard>
  );
};

export default TeamCard;
