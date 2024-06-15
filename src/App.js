import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import TicketList from './components/TicketList';
import ResolveTicket from './components/ResolveTicket';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/tasks/:taskId/tickets" element={<TicketList/>} />
        <Route path="/tasks/:taskId/resolve" element={<ResolveTicket/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
