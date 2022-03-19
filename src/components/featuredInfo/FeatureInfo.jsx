import React from 'react';
import {ArrowForwardIos,CalendarMonth,MonetizationOn,Folder,Remove} from '@mui/icons-material';
import "./featuredInfo.css"

export default function FeatureInfo() {
  return (
    <div className='featuredTop'>
        <div className='topbarIndicate'>
            <div className='topIndicate'>
                <div className='indicate'>
                    <p>Dashbord <ArrowForwardIos sx={{ fontSize: 10 }}/></p>
                    <p>Reports</p>
                </div>
                <div className='headingName'>
                    <h3>Here's what's happening</h3>
                </div>
            </div>
            <div className='calander'>
                <CalendarMonth className='icon'/>
                <p>LAST 30 DAYS</p>
            </div>
        </div>
        <div className='featured'>
            <div className='featuredItem'>
                <div className='featuredTitle'>
                    <div className='featuredMoneyContainer'>
                        <p>TODAY MONEY</p>
                        <h2>$24,0000 <span className='featuredMoneyRate'>+4%</span></h2>
                    </div>
                    <div className='featuredIcon'>
                        <MonetizationOn sx={{ fontSize: 60 }}/>
                    </div>
                </div>
            </div>
            <div className='featuredItem'>
                <div className='featuredTitle'>
                    <div className='featuredMoneyContainer'>
                        <p>NEW PROJECTS</p>
                        <h2>12 <span className='featuredMoneyRate nagative'>-10%</span></h2>
                    </div>
                    <div className='featuredIcon'>
                        <Folder sx={{ fontSize: 60 }}/>
                    </div>
                </div>
            </div><div className='featuredItem'>
                <div className='featuredTitle'>
                    <div className='featuredMoneyContainer'>
                        <p>SYSTEM HEALTH</p>
                        <h2>97% </h2>
                    </div>
                    <div className='featuredIcon'>
                        <Remove sx={{ fontSize: 60 }}/>
                    </div>
                </div>
            </div><div className='featuredItem'>
                <div className='featuredTitle active'>
                    <div className='featuredMoneyContainer'>
                        <p>ROI PER CUSTOMER</p>
                        <h2>$25.50</h2>
                    </div>
                    <div className='featuredIcon'>
                        <MonetizationOn sx={{ fontSize: 60 }}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
