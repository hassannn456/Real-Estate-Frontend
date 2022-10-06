import {
  AppBar,
  Box,
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
  const image =
    "data:image/jpeg;base64,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";

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
            <Dropdowns avatar={<Notifications />} tip='Notifications'>
              <NotificationList />
            </Dropdowns>

            <Dropdowns avatar={<Email />} tip='Messages'>
              <MessageList />
            </Dropdowns>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <MenuDropdown image={image}>
                <StyledMenuItem>Profile</StyledMenuItem>

                <StyledDivider />

                <StyledMenuItem>My account</StyledMenuItem>

                <StyledDivider />

                <StyledMenuItem>Log Out</StyledMenuItem>
              </MenuDropdown>
            </Box>
          </Stack>

          {/* Profie details */}

          <StyledImageStack pr={1} direction="row">
            <Stack>
              <Typography variant="p" fontWeight="bold" color="black">
                David Beckham
              </Typography>
              <Typography sx={{ fontSize: "10px" }} color="black">
                DavidBeckham@gmail.com
              </Typography>
            </Stack>
            <MenuDropdown image={image}>
              <StyledMenuItem>Profile</StyledMenuItem>

              <StyledDivider />

              <StyledMenuItem>My account</StyledMenuItem>

              <StyledDivider />

              <StyledMenuItem>Log Out</StyledMenuItem>
            </MenuDropdown>
          </StyledImageStack>
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default AdminNav;
