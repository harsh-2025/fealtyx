// src/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [tickets, setTickets] = useState([]);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(prevTasks => prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };
  
  const createTicket = (taskId, ticket) => {
    const newTicket = { id: Date.now(), taskId, ...ticket };
    // console.log('Creating ticket:', newTicket); // Log the new ticket
    setTickets((prevTickets) => [...prevTickets, newTicket]);
  };

  const getTicketsForTask = (taskId) => {
    // console.log('Fetching tickets for task:', taskId); // Log the taskId
    return tickets.filter((ticket) => ticket.taskId === taskId);
  };

  const resolveTicket = (taskId, ticketId) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: 'Resolved' } : ticket
      )
    );
  };
  const logTime = (taskId, timeSpent) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = {
          ...task,
          timeLogs: [...task.timeLogs, timeSpent],
          totalTimeSpent: task.totalTimeSpent + timeSpent
        };
        return updatedTask;
      }
      return task;
    }));
  };

  const filterTasks = (criteria) => {
    if (!criteria) return tasks;
    return tasks.filter(task => {
      return Object.keys(criteria).every(key => task[key] === criteria[key]);
    });
  };

  const sortTasks = (field, order = 'asc') => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    return sortedTasks;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn,createTicket,
      getTicketsForTask,
      resolveTicket, login, logout, tasks, addTask, updateTask, deleteTask, logTime, filterTasks, sortTasks }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
