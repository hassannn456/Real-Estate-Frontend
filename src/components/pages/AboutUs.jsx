import { Box } from '@mui/material'
import React from 'react'
import AboutCard from '../componentsextended/AboutExtensions/AboutCard'
import HeaderAbout from '../componentsextended/AboutExtensions/HeaderAbout'
import Team from '../componentsextended/AboutExtensions/EmployeesExtension/Team'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { navActions } from '../Redux/NavSlice';

const AboutUs = () => {
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(navActions.toggle());
  }, [dispatch]);

  return (
    <Box sx={{background:'#fff'}}>
      <HeaderAbout/>
      <AboutCard/>
      <Team/>
    </Box>
  )
}

export default AboutUs