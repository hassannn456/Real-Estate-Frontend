import { Box, Stack, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import AdminDrawer from '../componentsextended/AdminExtensions/AdminDrawer'
import AdminNav from '../componentsextended/AdminExtensions/AdminNav';
import AddNewProperty from '../componentsextended/AdminExtensions/AdminPages/AddNewProperty';
import Customers from '../componentsextended/AdminExtensions/AdminPages/Customers';
import Dashboard from '../componentsextended/AdminExtensions/AdminPages/Dashboard';
import PropertyDetails from '../componentsextended/AdminExtensions/AdminPages/PropertyDetails';
import Reviews from '../componentsextended/AdminExtensions/AdminPages/Reviews';


const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  // [theme.breakpoints.up("sm")]: {
  //   display: "flex",
  //   flexDirection: "row",
  // },
}));

const Admin = () => {
  const dashShow = useSelector(state => state.dash.dashIsVisible)

  return (
    <StyledBox style={{height:{xs:'1800px', sm:'1200px'}, background: '#fff'}}>
          
          <AdminDrawer/>
          <Stack sx={{width:'100%'}}>
          <AdminNav/>
          
          {(dashShow==='0')?<Dashboard/>:null}
          {(dashShow==='1')?<PropertyDetails/>:null}
          {(dashShow==='2')?<AddNewProperty/>:null}
          {(dashShow==='3')?<Customers/>:null}
          {(dashShow==='4')?<Reviews/>:null}

          </Stack>

    </StyledBox>
  )
}

export default Admin