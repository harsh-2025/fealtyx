// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import "../styles/Navbar.css"
const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout=()=>{
    logout();
    navigate('/');
  }
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isLoggedIn ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        ) : (
            <>
              <li><Link to="/dashboard">Dashboard</Link> </li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
