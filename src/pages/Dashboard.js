// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';
import TrendLineChart from '../components/TrendLineChart';

const Dashboard = () => {
  const { logout, tasks } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <CreateTask />
      <TaskList tasks={tasks} />
      <TrendLineChart tasks={tasks} />
    </div>
  );
};

export default Dashboard;
