import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import StyledCard from "../../UI/SearchCard";
import AboutSvg from "./AboutSvg";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: 'none',
  paddingLeft: "16px",
  paddingRight: "20px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "65%",
  },
}));

const StyledMainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "820px",
  background: "#222222",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    height: "380px",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    display:'block',
    textAlign:'center',
    paddingLeft:'34px',
    paddingRight:'34px',
    [theme.breakpoints.up("md")]: {
      display:'none'
    },
  }));
  

const AboutCard = () => {
  return (
    <Stack mt={4} mb={2}  alignItems="center">
      <StyledCard
        sx={{ width: { xs: "98%", sm: "80%" }, borderRadius: "10px" }}
      >
        <StyledMainBox>
            <StyledTypography mb={2} color="#dbc895" variant="h4">
              ABOUT US
            </StyledTypography>
          <AboutSvg />
          <StyledTypography mt={4} pb={4} variant="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              id qui quas cum optio incidunt aspernatur iure nobis alias neque,
              esse sit porro unde. Tempora illo repudiandae corporis quaerat!
              Quo. Corporis velit alias, doloremque quaerat ad odit distinctio.
              Expedita, impedit quaerat! Impedit est voluptates a praesentium
              sed incidunt, numquam sequi tempore distinctio at ipsa id
              perferendis obcaecati quam, veritatis hic. Amet unde ipsam ut iste
              officia eius soluta vero? Voluptatibus velit neque reiciendis
              ullam voluptatem, rem asperiores nihil quisquam animi tempora
              ipsam, totam perspiciatis culpa beatae qui recusandae expedita
              dicta? Aperiam, facere. Molestiae magnam sequi officiis cum
              ratione! Architecto consequatur nisi cumque minima ut, repellat
              pariatur facilis modi laboriosam recusandae provident cupiditate
              molestias aliquam ex eum, aspernatur facere vero mollitia.
            </StyledTypography>

          <Box
            mt={10}
            mb={8}
            ml={2}
            sx={{
              backgroundColor: "darkgrey",
              width: "1px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          ></Box>

          <StyledBox>
            <Typography mt={2} mb={4} color="#dbc895" variant="h4">
              ABOUT US
            </Typography>
            <Typography pb={4} variant="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              id qui quas cum optio incidunt aspernatur iure nobis alias neque,
              esse sit porro unde. Tempora illo repudiandae corporis quaerat!
              Quo. Corporis velit alias, doloremque quaerat ad odit distinctio.
              Expedita, impedit quaerat! Impedit est voluptates a praesentium
              sed incidunt, numquam sequi tempore distinctio at ipsa id
              perferendis obcaecati quam, veritatis hic. Amet unde ipsam ut iste
              officia eius soluta vero? Voluptatibus velit neque reiciendis
              ullam voluptatem, rem asperiores nihil quisquam animi tempora
              ipsam, totam perspiciatis culpa beatae qui recusandae expedita
              dicta? Aperiam, facere. Molestiae magnam sequi officiis cum
              ratione! Architecto consequatur nisi cumque minima ut, repellat
              pariatur facilis modi laboriosam recusandae provident cupiditate
              molestias aliquam ex eum, aspernatur facere vero mollitia.
            </Typography>
          </StyledBox>
        </StyledMainBox>

        {/* <Stack direction='row'>
        <Box flex={3}>
                <img src='https://wallpaper.dog/large/10841483.jpg' alt=''/>
            </Box>
        <StyledBox flex={9} mb={4} sx={{width:'70%', height:'350px'}}>
            <Stack>
            </Stack>
        </StyledBox>
        </Stack> */}
      </StyledCard>
    </Stack>
  );
};

export default AboutCard;
