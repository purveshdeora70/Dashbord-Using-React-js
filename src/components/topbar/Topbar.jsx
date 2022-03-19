import React from 'react'
import "./topbar.css";
import logo from "./images/logo.png"
import {Search, PeopleAlt, NotificationsNone, Settings, AccountCircle } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <img className='logo' src={logo} alt="Logo"/>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <Search className='icon' />
                </div>
                <div className='topbarIconContainer'>
                    <PeopleAlt className='icon' />
                </div>
                <div className='topbarIconContainer'>
                    <NotificationsNone className='icon' />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <Settings className='icon' />
                </div>
                <div className='topbarIconContainer'>
                    <AccountCircle fontSize="large" className='icon' />
                    {/* <img className='topAvatar' src='' alt=''> */}
                </div>

            </div>
        </div>
    </div>
  )
}
