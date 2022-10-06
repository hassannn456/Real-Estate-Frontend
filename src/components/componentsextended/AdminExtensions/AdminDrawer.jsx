import {Box} from '@mui/material'
import LogoSvg from './LogoSvg'
import AccordionData from './SidebarExtension/AccordionData'

const AdminDrawer = () => {


  return (
    <Box sx={{height:'2400px' , width:'300px', background:'#222222', display:{xs:'none', sm:'none', md:'block'}}}>
      <LogoSvg/>
      <AccordionData/>
      
    </Box>
  )
}

export default AdminDrawer