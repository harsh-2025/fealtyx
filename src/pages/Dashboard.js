// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';
import TrendLineChart from '../components/TrendLineChart';
import "../styles/Dashboard.css"
import Navbar from '../components/Navbar';
const Dashboard = () => {
  const { logout, tasks,isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const handleDashboard = () => {
    navigate('/');
  }
  if (!isLoggedIn) {
    return <>
      <Navbar/>
      <h1>Kindly Login to see Dashboard</h1>

    </>
  }
  

  return (
    <div>
      <Navbar/>
      {/* <h2>Dashboard</h2> */}
      {/* <button className='logout-button' onClick={handleLogout}>Logout</button> */}
      <CreateTask />
      <TaskList tasks={tasks} />
      <TrendLineChart tasks={tasks} />
    </div>
  );
};

export default Dashboard;
