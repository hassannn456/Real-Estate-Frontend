import {
  Drawer,
  IconButton,
  Typography,
  styled,
  Tabs,
  Tab,
} from "@mui/material";
import { Fragment, useState } from "react";
import { Home, Search, Menu, Info, Mail, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledTab = styled(Tab)({
  color: "white",
  display: "flex",
  justifyContent: "flex-start",
});

const Drawers = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState('0');

  const tab = [
    {
      label: "Home",
      path: "home",
      value: "0",
      icon:<Home/>
    },
    {
      label: "LogIn",
      path: "login",
      value: "4",
      icon:<Login/>
    },
    {
      label: "Properties",
      path: "properties",
      value: "1",
      icon:<Search/>
    },
    {
      label: "About Us",
      path: "AboutUs",
      value: "2",
      icon:<Mail/>
    },
    {
      label: "Contact Us",
      path: "ContactUs",
      value: "3",
      icon:<Info/>
    },
  ];

  return (
    <Fragment>
      <Drawer
        PaperProps={{
          sx: {
            marginTop: "56px",
            width: "65%",
            textAlign: "center",
            paddingTop: "10%",
            background: "#222222",
            color: "white",
            paddingLeft: "2px",
          },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}

      >
        <Typography variant="h4" py={2} sx={{ color: "#dbc895" }}>
          Site Title
        </Typography>
        
        <Tabs
          orientation="vertical"
          textColor="secondary"
          value={value}
          onChange={(e, value) => setValue(value)}
          TabIndicatorProps={{
            sx: { backgroundColor: "white" },
          }}
          aria-label="secondary tabs example"
        >
          {tab.map(({ label, path, value, icon }) => (
            <StyledTab
              key={value}
              label={label}
              value={value}
              component={Link}
              to={path}
              onClick={() => setOpenDrawer(false)}
              icon={icon}
            iconPosition="start"
              disableRipple
            />
          ))}

        </Tabs>

        {/* <List>
          <ListItem>
            <Home />
            <Link style={{ textDecoration: "none" }} to="/home">
              <StyledDrawerButton onClick={() => setOpenDrawer(false)}>Home</StyledDrawerButton>
            </Link>
          </ListItem>

          <ListItem>
            <Login />
            <Link style={{ textDecoration: "none" }} to="/login">
              <StyledDrawerButton onClick={() => setOpenDrawer(false)}>Login</StyledDrawerButton>
            </Link>
          </ListItem>

          <ListItem>
            <Search />
            <Link style={{ textDecoration: "none" }} to="/properties">
              <StyledDrawerButton onClick={() => setOpenDrawer(false)}>Properties</StyledDrawerButton>
            </Link>
          </ListItem>

          <ListItem>
            <Mail />
            <Link style={{ textDecoration: "none" }} to="/ContactUs">
              <StyledDrawerButton onClick={() => setOpenDrawer(false)}>Contact Us</StyledDrawerButton>
            </Link>
          </ListItem>

          <ListItem>
            <Info />
            <Link style={{ textDecoration: "none" }} to="/AboutUs">
              <StyledDrawerButton onClick={() => setOpenDrawer(false)}>About Us</StyledDrawerButton>
            </Link>
          </ListItem>

        </List> */}

      </Drawer>

      <IconButton
        sx={{ display: { xs: "block", sm: "none", color: "white" } }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Menu />
      </IconButton>
    </Fragment>
  );
};

export default Drawers;
