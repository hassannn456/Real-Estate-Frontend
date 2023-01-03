import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import DomainIcon from "@mui/icons-material/Domain";
import styled from "@emotion/styled";
import Drawers from "./Drawers";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "./LoginExtensions/auth-context";

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "#dbc895",
  textDecoration: "none",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Styledlogin = styled(Button)({
  background: "#dbc895",
  width: "7rem",
  height: "2rem",
  justifySelf: "flex-end",
  color: "black",
  marginBottom: "5px",
});

const NavBar = () => {
  const auth = useContext(AuthContext);

  const [value, setValue] = useState("0");

  useEffect(() => {
    let data = localStorage.getItem("tab");
    if (data === "null") {
      data = "0";
    }
    setValue(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("tab", value);
  }, [value]);

  const tab = [
    {
      label: "Home",
      path: "home",
      value: "0",
    },
    {
      label: "Properties",
      path: "properties",
      value: "1",
    },
    {
      label: "About Us",
      path: "AboutUs",
      value: "2",
    },
    {
      label: "Contact Us",
      path: "ContactUs",
      value: "3",
    },
  ];

  return (
    <AppBar sx={{ background: "primary" }} position="static">
      <StyledToolbar>
        <Drawers />

        <Link style={{ textDecoration: "none" }} to="/home">
          <IconButton
            sx={{ display: { xs: "none", sm: "block" }, color: "white" }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <DomainIcon />
          </IconButton>
        </Link>

        <Tabs
          ml="auto"
          mr="auto"
          value={value}
          onChange={(e, value) => setValue(value)}
          textColor="secondary"
          TabIndicatorProps={{
            sx: { backgroundColor: "white" },
          }}
          aria-label="secondary tabs example"
        >
          {tab.map(({ label, path, value }) => (
            <StyledTab
              key={value}
              label={label}
              value={value}
              component={Link}
              to={path}
              disableRipple
            />
          ))}
        </Tabs>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {!auth.isLoggedIn &&  <Link style={{ textDecoration: "none" }} to="/login">
            <Styledlogin>Login</Styledlogin>
          </Link>}
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
