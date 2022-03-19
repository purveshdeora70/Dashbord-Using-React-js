import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import {userData} from "./../../dummyData";
import "./performanceChart.css"


export default function parformanceChart() {
  return (
      <div className='parformanceChart'>
        <div className='performanceChartTitle'>
          <h3>Performance Over Time</h3>
        </div>
          <hr />
        <div className='parformanceChartGraph'>
          <ResponsiveContainer width="90%" aspect={4 / 2.3}>
            <LineChart data={userData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="mototone"
                dataKey="performance"
                stroke="#8884d8"
                fill="#8884d8"
            />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
  )
}
