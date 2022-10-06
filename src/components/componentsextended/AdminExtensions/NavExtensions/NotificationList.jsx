import {MenuItem } from '@mui/material'
import NotificationMapper from './NotificationMapper';

const data = {
  notify: [
    {
      id: "p1",
      image:
        "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
      name:'Ananya Pandey',
        type: "sent you a photo",
      date: '23rd july 2022',
      time: '03:45 PM'
    },
    {
      id: "p2",
      image:
        "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
        name:'Ananya Pandey',
        type: "sent you a photo",
      date: '23rd july 2022',
      time: '03:45 PM'        },
    {
      id: "p3",
      image:
        "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
        name:'Ananya Pandey',
        type: "sent you a photo",
      date: '23rd july 2022',
      time: '03:45 PM'  },
    {
      id: "p4",
      image:
        "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
        name:'Ananya Pandey',
        type: "sent you a photo",
      date: '23rd july 2022',
      time: '03:45 PM'     },
    {
      id: "p5",
      image:
        "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
        name:'Ananya Pandey',
        type: "sent you a photo",
      date: '23rd july 2022',
      time: '03:45 PM'   },
    {
      id: "p6",
      image:
        "https://assets.vogue.in/photos/62e23c06ccc178c8ae045ed2/master/pass/Ananya%20Pnday.jpg",
        name:'Ananya Pandey',
        type: "sent you a photo",
      date: '23rd july 2022',
      time: '03:45 PM' },
    
  ],
};


const NotificationList = (props) => {
  const notify= data.notify;

  return (
    <>
    
        {notify?notify.slice(0,5).map(noti => (
          <MenuItem key={noti.id} sx={{padding:'0 !important'}}>
        <NotificationMapper
          key={noti.id}
          id={noti.id}
          image={noti.image}
          name={noti.name}
          type={noti.type}
          date={noti.date}
          time={noti.time}
        />
        </MenuItem>
        
      )):null}
      </>
  )
}

export default NotificationList