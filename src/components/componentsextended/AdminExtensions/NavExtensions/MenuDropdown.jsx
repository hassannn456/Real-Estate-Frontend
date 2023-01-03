import React, { useState } from 'react'
import { Avatar, Box, IconButton,Menu,Tooltip } from '@mui/material'

const MenuDropdown = (props) => {
    const [menu, setMenu] = useState(null)
  const open = Boolean(menu);
  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(false);
  };

  return (
    <Box>
    <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src={props.image} sx={{ width: 46, height: 46, background:'none', color:'black' }}>{props.avatar}</Avatar>
          </IconButton>
        </Tooltip>
      <Menu
        anchorEl={menu}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0.5,
            color:'white',
            backgroundColor:'black',
            width:'150px',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 20,
              width: 10,
              height: 10,
              bgcolor: 'black',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {props.children}
      </Menu>
      </Box>
  )
}

export default MenuDropdown