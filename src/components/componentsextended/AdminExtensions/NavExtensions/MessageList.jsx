import { MenuItem } from '@mui/material'
import React from 'react'
import MessageMapper from './MessageMapper'

const data = {
    notify: [
      {
        id: "p1",
        image:
          "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
        name:'Ananya Pandey',
          message:'Hey, wassup?!'
      },
      {
        id: "p2",
        image:
          "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
          name:'Ananya Pandey',
          message:'Hey, wassup?!'       },
      {
        id: "p3",
        image:
          "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
          name:'Ananya Pandey',
          message:'Hey, wassup?!' },
      {
        id: "p4",
        image:
          "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
          name:'Ananya Pandey',
          message:'Hey, wassup?!'    },
      {
        id: "p5",
        image:
          "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
          name:'Ananya Pandey',
          message:'Hey, wassup?!'  },
      {
        id: "p6",
        image:
          "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
          name:'Ananya Pandey',
          message:'Hey, wassup?!'},
      
    ],
  };

const MessageList = () => {
    const notify= data.notify;
    
  return (
    <>
    {notify?notify.slice(0,5).map(noti => (
          <MenuItem key={noti.id} sx={{padding:'0 !important'}}>
        <MessageMapper
          key={noti.id}
          id={noti.id}
          image={noti.image}
          name={noti.name}
          message={noti.message}
        />
        </MenuItem>
        
      )):null}
    </>
  )
}

export default MessageList