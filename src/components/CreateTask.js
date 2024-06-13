// src/components/CreateTask.js
import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import '../styles/CreateTask.css'; // Import your CSS file
// src/components/CreateTask.js


const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('To Do');
  const [assignee, setAssignee] = useState('');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const { addTask } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status,
      assignee,
      startDate,
      dueDate,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      timeLogs: [], // To store individual time logs
      totalTimeSpent: 0 // To store the total time spent on the task
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('Low');
    setStatus('To Do');
    setAssignee('');
    setStartDate('');
    setDueDate('');
  };

  return (
    <div className="create-task-container">
      <h3 className="create-task-header">Create Task</h3>
      <form className="create-task-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <label htmlFor="assignee">Assignee:</label>
        <input
          type="text"
          id="assignee"
          placeholder="Assign task to"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          required
        />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
