import React from 'react'
import HeaderOption from './HeaderOption'
import "./Header.css"
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import SchoolIcon from '@mui/icons-material/School';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <img src='' alt=''></img>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SchoolIcon} title='Education' />
        <HeaderOption Icon={HistoryIcon} title='History' />
      </div>
      <div className='header_right'>
        <HeaderOption Icon={NotificationsIcon} title='Notification' />
        <HeaderOption avatar="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80" title='Admin' />
      </div>
    </div>
  )
}

export default Header