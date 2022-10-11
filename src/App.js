import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import Properties from "./components/pages/Properties";
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./components/pages/Admin";
import NavBar from "./components/componentsextended/NavBar";
import Footer from "./components/componentsextended/Footer";
// import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";
import { useAuth } from "./components/hooks/auth-hook";
import { AuthContext } from "./components/componentsextended/LoginExtensions/auth-context";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

// const home = React.lazy(()=> import('./components/pages/Home'));

function App() {
  const navShow = useSelector((state) => state.nav.navIsVisible);
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Navigate to={`/admin/${userId}`} />} />
        <Route path="home" element={<Home />} />
        <Route path="properties" element={<Properties />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route element={<ProtectedRoutes/>}>  */}

        <Route path="admin/:userId" element={<Admin />} />

        {/* </Route> */}
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="properties" element={<Properties />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route element={<ProtectedRoutes/>}>  */}
        {/* </Route> */}
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      {navShow ? <NavBar /> : null}

      <main>
        <Suspense fallback={<CircularProgress color="inherit" />}>
          {routes}
        </Suspense>
      </main>

      {navShow ? <Footer /> : null}
    </AuthContext.Provider>
  );
}

export default App;
