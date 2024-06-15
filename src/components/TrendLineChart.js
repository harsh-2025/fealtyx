
// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import '../styles/TrendLineChart.css'; // Import your CSS file

// const TrendLineChart = ({ tasks }) => {
//   // Filter tasks that are in progress
//   const inProgressTasks = tasks.filter(task => task.status === 'In Progress');

//   // Aggregate data for the trend line chart
//   const data = inProgressTasks.reduce((acc, task) => {
//     const date = task.date;
//     const existingEntry = acc.find(entry => entry.date === date);

//     if (existingEntry) {
//       existingEntry.concurrentTasks += 1;
//     } else {
//       acc.push({ date, concurrentTasks: 1 });
//     }

//     return acc;
//   }, []);

//   return (
//     <div className="trend-line-chart-container">
//       <h3 className="trend-line-chart-header">Trend Line Chart</h3>
//       <div className="recharts-wrapper">
//         <LineChart width={600} height={300} data={data}>
//           <XAxis dataKey="date" />
//           <YAxis />
//           <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//           <Line type="monotone" dataKey="concurrentTasks" stroke="#8884d8" />
//           <Tooltip />
//           <Legend />
//         </LineChart>
//       </div>
//     </div>
//   );
// };

// export default TrendLineChart;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container, Typography, Paper } from '@mui/material'; // Import Material-UI components
import '../styles/TrendLineChart.css'; // Import your CSS file

const TrendLineChart = ({ tasks }) => {
  const today = new Date().toISOString().slice(0, 10);

  // Filter tasks that are in progress
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress');

  // Aggregate data for the trend line chart
  const data = inProgressTasks.reduce((acc, task) => {
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
    <Container maxWidth="md" className="trend-line-chart-container">
    <Paper elevation={3} className="recharts-wrapper">
      <Typography variant="h6" gutterBottom className="trend-line-chart-header">
    Trend Line Chart for {today}

      </Typography>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="concurrentTasks" stroke="#8884d8" />
      </LineChart>
    </Paper>
  </Container>
  );
};

export default TrendLineChart;
