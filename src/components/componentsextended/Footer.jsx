import {
  Box,
  Button,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const StyledGrid = styled(Grid)({
  backgroundColor: "#222222",
  paddingLeft: 4,
});

const StyledBox = styled(Box)({
  color: "#dbc895",
});

const StyledTextField = styled(TextField)({
  width: "50%",
  backgroundColor: "white",
  color: "white",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  height: "2.5rem",
  noBorder: {
    border: "none",
  },
});

const StyledButton = styled(Button)({
  width: "20%",
  height: "2.5rem",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  background: "#dbc895",
  color: "black",
});

const Footer = () => {
  return (
    <Box mt={5} position="static" bottom="0">
      <Grid
        container
        spacing={5}
        pl={2}
        height="15rem"
        backgroundColor="primary"
      >
        <StyledGrid item sm={12} md={3} textAlign="center">
          <StyledBox mb={1}>
            <AccountBalanceIcon sx={{ height: "20%", width: "20%" }} />
          </StyledBox>
          <StyledBox>
            <Typography variant="p" fontWeight="80">
              *Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quas
              nam labore saepe! Laudantium
            </Typography>
          </StyledBox>
        </StyledGrid>

        <StyledGrid item sm={12} md={3} pr={2} textAlign="center">
          <Box borderLeft={1} borderRight={1} px={2} mt={1} color="#dbc895">
            <StyledBox mb={3}>
              <Typography variant="h5">Contact Us</Typography>
            </StyledBox>
            <StyledBox mb={2}>
              <Typography variant="p" fontWeight="80">
                *Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                quas nam labore saepe!
              </Typography>
            </StyledBox>
          </Box>
        </StyledGrid>

        <StyledGrid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <StyledBox mb={3} mt={1}>
            <Typography variant="h5">Newsletter Subscribe</Typography>
          </StyledBox>
          <StyledBox
            mb={1}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "left" },
            }}
          >
            <StyledTextField
              variant="outlined"
              placeholder="email@gmail.com"
              required
              // fullWidth
              id="email"
              disableunderline='true'
              // label="Phone Number"
              name="email"
              autoFocus
              size="small"
              //  InputProps={{
              //   disableUnderline: true,
              // }}
            />
            <StyledButton variant="contained">Submit</StyledButton>
          </StyledBox>
          <StyledBox mb={3}>
            <Typography fontSize={"13px"}>
              Let us keep you upadated with all our deals.
            </Typography>
          </StyledBox>
        </StyledGrid>
      </Grid>
    </Box>
  );
};

export default Footer;
