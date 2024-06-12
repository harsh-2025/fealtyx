// src/pages/Dashboard.js
import React from 'react';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {/* <button onClick={logout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
