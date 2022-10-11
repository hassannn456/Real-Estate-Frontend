import {
  AppBar,
  Box,
  CircularProgress,
  Divider,
  InputBase,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Notifications, Email } from "@mui/icons-material";
import MenuDropdown from "./NavExtensions/MenuDropdown";
import DrawerSide from "./SidebarExtension/DrawerSide";
import Dropdowns from "./NavExtensions/Dropdowns";
import MessageList from "./NavExtensions/MessageList";
import NotificationList from "./NavExtensions/NotificationList";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../LoginExtensions/auth-context";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import ErrorModal from "../LoginExtensions/ErrorModal";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 !important",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "20px",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "18rem",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "13px",
  padding: "none",
  "&:hover": {
    color: "#cc9966",
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  background: "#cc9966",
  margin: "10px",
}));

const StyledImageStack = styled(Stack)(({ theme }) => ({
  width: "240px",
  height: "64px",
  background: "white",
  marginLeft: "20px",
  borderTopLeftRadius: "60px",
  borderBottomLeftRadius: "60px",
  alignItems: "center",
  justifyContent: "flex-end",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const AdminNav = () => {
  const auth = useContext(AuthContext);
  const userId = useParams().userId;
  const [loadedUser, setLoadedUser] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`
        );
        setLoadedUser(responseData.user);
      } catch (err) {
        throw new Error(err)
      }
    };
    fetchUser();
  }, [sendRequest, userId]);

  return (
    <AppBar
      sx={{ background: "darkgrey", boxShadow: "none" }}
      position="static"
    >
      <StyledToolbar>
        <DrawerSide />
        <Stack>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>

        {/* Notification */}

        <Stack direction="row" alignItems="center">
          <Stack direction="row">
            <Dropdowns avatar={<Notifications />} tip="Notifications">
              <NotificationList />
            </Dropdowns>

            <Dropdowns avatar={<Email />} tip="Messages">
              <MessageList />
            </Dropdowns>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>

            {!isLoading && loadedUser && (
              <MenuDropdown image={loadedUser['image']? loadedUser['image'] : ''}>
                <StyledMenuItem>Profile</StyledMenuItem>

                <StyledDivider />

                <StyledMenuItem>My account</StyledMenuItem>

                <StyledDivider />

                <StyledMenuItem onClick={auth.logout}>Log Out</StyledMenuItem>
              </MenuDropdown> )}

              {!loadedUser && !error && (<p>Data not found</p>)}
            </Box>
          </Stack>

          {/* Profie details */}
          <ErrorModal error={error} onClear={clearError} />
          {isLoading && (
            <StyledImageStack pr={1} direction="row" justifyContent="center">
              <CircularProgress color="inherit" />{" "}
            </StyledImageStack>
          )}
          
          {!loadedUser && !error && (<p>Data not found</p>)}

          {!isLoading && loadedUser && (
            <StyledImageStack pr={1} direction="row">
              <Stack>
                
                <Typography variant="p" fontWeight="bold" color="black">
                {loadedUser['name']?loadedUser['name']: 'User'}
                </Typography>
                <Typography sx={{ fontSize: "10px" }} color="black">
                {loadedUser['email']? loadedUser['email']: 'email@email.com'}
                </Typography>
              </Stack>

              <MenuDropdown image={loadedUser['image']? `${process.env.REACT_APP_ASSET_URL}/${loadedUser['image']}` : ''}>
                <StyledMenuItem>Profile</StyledMenuItem>

                <StyledDivider />

                <StyledMenuItem>My account</StyledMenuItem>

                <StyledDivider />

                <StyledMenuItem onClick={auth.logout}>Log Out</StyledMenuItem>
              </MenuDropdown>
            </StyledImageStack>
          )}
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default AdminNav;
