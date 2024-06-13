// src/components/TrendLineChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../styles/TrendLineChart.css'; // Import your CSS file

const TrendLineChart = ({ tasks }) => {
  // Aggregate data for the trend line chart
  const data = tasks.reduce((acc, task) => {
    const date = task.date;
    const existingEntry = acc.find(entry => entry.date === date);

    if (existingEntry) {
      existingEntry.concurrentTasks += 1;
    } else {
      acc.push({ date, concurrentTasks: 1 });
    }

    return acc;
  }, []);

  return (
    <div className="trend-line-chart-container">
      <h3 className="trend-line-chart-header">Trend Line Chart</h3>
      <div className="recharts-wrapper">
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="concurrentTasks" stroke="#8884d8" />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
  );
};

export default TrendLineChart;
