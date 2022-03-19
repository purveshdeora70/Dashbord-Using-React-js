import React from 'react';
import {BarChart, Bar, Tooltip, ResponsiveContainer} from "recharts";
import {userData} from "./../../dummyData";
import "./chart.css"

export default function Chart() {
  return (
    <div className='chart'>
        <ResponsiveContainer width="100%" aspect={4 / 3}>
            <BarChart data={userData}>
                <Bar dataKey="activeUser" fill="#8884d8" />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
