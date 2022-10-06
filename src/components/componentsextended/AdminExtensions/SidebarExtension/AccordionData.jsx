import { Accordion, AccordionDetails, Button, AccordionSummary, Box, styled, Typography} from '@mui/material'
import {ExpandMore, Dashboard} from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { dashActions } from '../../../Redux/DashSlice';

const StyledButton= styled(Button)({
    width:'100%',
    background:'#444444',
    color:'white',
    borderBottom:'1px solid #222222',
    borderRadius:'0',
  });

  const StyledAccordion= styled(Accordion)({
    background:'#343434',
    color:'white',
    opacity:'0.8',
  });

const AccordionData = () => {
  const dispatch= useDispatch();

  const dashHandler = (num) => {
    dispatch(dashActions.toggle(num));
 }

    const [expanded, setExpanded] = useState(false);

    const handleChange = (isExpanded, panel) => {
      setExpanded(isExpanded ? panel : false)

    }

    // const [value, setValue] = useState('0');
  return (
    <Box>
    <StyledAccordion 
      TransitionProps={{ unmountOnExit: true }}
       expanded={expanded === 'panel1'} onChange={(e, isExpanded)=>handleChange(isExpanded, 'panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMore sx={{color:'white', background:'#343434'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Dashboard sx={{display:{sm:'none', md:'block'}}}/>
          <Typography pl={2} sx={{ flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0 !important'}}>
        <StyledButton onClick={(e) => dashHandler('0')}>Dashboard</StyledButton>
          <StyledButton onClick={(e) => dashHandler('1')}>Property Details</StyledButton>
          <StyledButton onClick={(e) => dashHandler('2')}>Add New Property</StyledButton>
          <StyledButton onClick={(e) => dashHandler('3')}>Customers</StyledButton>
          <StyledButton onClick={(e) => dashHandler('4')}>Reviews</StyledButton>

        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion 
      TransitionProps={{ unmountOnExit: true }}
       expanded={expanded === 'panel2'} onChange={(e, isExpanded)=>handleChange(isExpanded, 'panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMore sx={{color:'white', background:'#343434'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Dashboard/>
          <Typography pl={2} sx={{ flexShrink: 0 }}>Other data</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0 !important'}}>
        <StyledButton onClick={(e) => dashHandler('0')}>Dashboard</StyledButton>
          <StyledButton onClick={(e) => dashHandler('1')}>Property Details</StyledButton>
          <StyledButton onClick={(e) => dashHandler('2')}>Add New Property</StyledButton>
          <StyledButton onClick={(e) => dashHandler('3')}>Customers</StyledButton>
          <StyledButton onClick={(e) => dashHandler('4')}>Reviews</StyledButton>
        </AccordionDetails>
      </StyledAccordion>

      </Box>
  )
}

export default AccordionData;