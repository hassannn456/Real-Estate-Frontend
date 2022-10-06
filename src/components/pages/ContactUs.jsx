import { Box } from '@mui/material'
import React from 'react'
import ContactsCard from '../componentsextended/ContactsExtensions/ContactsCard'
import HeaderContacts from '../componentsextended/ContactsExtensions/HeaderContacts'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { navActions } from '../Redux/NavSlice';

const ContactUs = () => {
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(navActions.toggle());
  }, [dispatch]);

  return (
    <Box sx={{background:'#fff'}}>

      <HeaderContacts />
      <ContactsCard/>

    </Box>
  )
}

export default ContactUs