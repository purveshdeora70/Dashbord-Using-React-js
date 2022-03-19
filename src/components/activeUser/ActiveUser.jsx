import React from 'react';
import {ArrowForwardIos} from '@mui/icons-material';
import Chart from "../chart/Chart";
import "./activeUser.css"

export default function ActiveUser() {
    return (
        <div className='activeUser'>
            <div className='chartTitle'>
                <div className='activeUserTitle'>
                    <h3>Active users </h3>
                    <span className='activeUserPra'>Page views per secound</span>
                </div>
               <span className='activeUserCount'>109</span>
            </div>
          <div className='chatGrapgh'>
          <Chart />
          </div>
          <div className='chartInfo'>
                <div className='chartInfoTitle'>
                  <p>/app/projects</p>
                  <span >24</span>
                </div>
                  <hr />
                <div className='chartInfoTitle'>
                  <p>/app/projects</p>
                  <span>21</span>
                </div>
                  <hr />
                <div className='chartInfoTitle'>
                  <p>/app/projects</p>
                  <span>15</span>
                </div>
                <hr />

                <div className='chartInfoTitle'>
                  <p>/app/projects</p>
                  <span>8</span>
                </div>
                <hr />
                <div className='chartInfoView'>
                  <h3>SEE ALL </h3>
                  <ArrowForwardIos className='icon' sx={{ fontSize: 15 }} />
                </div>
          </div>
        </div>
    )
  }