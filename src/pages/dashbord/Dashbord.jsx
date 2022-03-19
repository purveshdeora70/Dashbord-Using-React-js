import React from 'react';
import ParformanceChart from "../../components/performanceChart/parformanceChart"
import FeatureInfo from "../../components/featuredInfo/FeatureInfo";
import ActiveUser from "../../components/activeUser/ActiveUser"
import "./dashbord.css";

export default function Dashbord() {
  return (
    <div className='home'>
        <div className='feartures'>
          <FeatureInfo />
        </div>
        <div className='dashbordMiddlepart'>
          <ActiveUser />
          <ParformanceChart />
        </div>
    </div>
  )
}
