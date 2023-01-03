import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledCard from '../../UI/SearchCard'
import ContactForm from './ContactForm'
import ContactsSvg from './ContactsSvg'

const ContactsCard = () => {
  return (
    <Stack mt={4} sx={{height:'650px'}} textAlign='center' alignItems='center'>
    <StyledCard sx={{width:{xs:'96%', sm:'70%'}, borderRadius:"10px"}}>
        <Stack mb={4} sx={{width:'100%', height:'550px'}}>
            <Typography mt={5} mb={6} variant='h4'>CONTACT US</Typography>
            <Box sx={{display:'flex', flexDirection:'row'}}>
                <ContactForm/>
                <ContactsSvg/>
            </Box>
        </Stack>
    </StyledCard>
    </Stack>
  )
}

export default ContactsCard