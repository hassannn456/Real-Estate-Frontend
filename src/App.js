import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import Properties from "./components/pages/Properties";
import {Routes,Route, Navigate} from 'react-router-dom';
import Admin from "./components/pages/Admin";
import NavBar from './components/componentsextended/NavBar'
import Footer from './components/componentsextended/Footer'
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";


function App() {
  const navShow = useSelector(state => state.nav.navIsVisible)


  return (
    <>
  
  {navShow ? <NavBar/>: null}
    
    <Routes>
   
    <Route path='login' element={<LogIn/>}/>
    <Route path="/" element={<Navigate to="/home" />}/>
      <Route path='home' element={<Home/>}/>
      <Route path='properties' element={<Properties />}/>
      <Route path='aboutus' element={<AboutUs />}/>
      <Route path='contactus' element={<ContactUs/>}/>
      <Route
      path="*"
      element={<Navigate to="/" />}/>
      <Route element={<ProtectedRoutes/>}> 
     
      <Route path='admin' element={<Admin/>}/>

      </Route>
     
      </Routes>
      
      {navShow ? <Footer/>:null}
      </>
  );
}

export default App;
