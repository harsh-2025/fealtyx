
import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import "../styles/temp.css";
import { useNavigate } from 'react-router-dom';

const Task = ({ task }) => {
  const { updateTask, deleteTask, createTicket } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [assignee, setAssignee] = useState(task.assignee);
  const [startDate, setStartDate] = useState(task.startDate);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [inProgressStartTime, setInProgressStartTime] = useState(null);
  const [currentTotalTimeSpent, setCurrentTotalTimeSpent] = useState(task.totalTimeSpent);
  const [showTicketPopup, setShowTicketPopup] = useState(false);
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (status === 'In Progress') {
      setInProgressStartTime(new Date());
    } else if (status === 'Done' && inProgressStartTime) {
      const endTime = new Date();
      const timeDiff = (endTime - inProgressStartTime) / 1000; // convert milliseconds to seconds
      const updatedTotalTimeSpent = task.totalTimeSpent + timeDiff;
      updateTask({
        ...task,
        totalTimeSpent: updatedTotalTimeSpent
      });
      setCurrentTotalTimeSpent(updatedTotalTimeSpent);
      setInProgressStartTime(null); // reset the start time
    }
  }, [status]);

  useEffect(() => {
    let timer;
    if (status === 'In Progress') {
      timer = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = (currentTime - inProgressStartTime) / 1000; // convert milliseconds to seconds
        setCurrentTotalTimeSpent(task.totalTimeSpent + timeDiff);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [status, inProgressStartTime]);

  const handleSave = () => {
    updateTask({
      ...task,
      title,
      description,
      priority,
      status,
      assignee,
      startDate,
      dueDate,
      updatedDate: new Date().toISOString()
    });
    setIsEditing(false);
  };

  const formatTimeSpent = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${days} days, ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
  };

  const handleCreateTicket = () => {
    createTicket(task.id, {
      title: ticketTitle,
      description: ticketDescription,
      status: 'Open'
    });
    setShowTicketPopup(false);
    setTicketTitle('');
    setTicketDescription('');
  };

  return (
    <div className="task-container">
      <div className="task-header">
        {isEditing ? (
          <input 
            type="text" 
            value={title} 
            readOnly
          />
        ) : (
          <h4>{task.title}</h4>
        )}
        <div>
        <button className="button edit-cancel" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <button className="button delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
        </div>
      </div>
      <div className="task-details">
        {isEditing ? (
          <div className="task-edit-form">
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <select value={status} onChange={(e)=>setStatus(e.target.value)}>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <input 
              type="text" 
              value={assignee} 
              onChange={(e) => setAssignee(e.target.value)} 
            />
            <input 
              type="date" 
              value={startDate} 
              onChange={(e)=>setStartDate(e.target.value)} 
            />
            <input 
              type="date" 
              value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)} 
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <>
            <div className="task-details-table">
              <table>
                <tbody>
                  <tr>
                    <td>Description</td>
                    <td className='task-description'>{task.description}</td>
                  </tr>
                  <tr>
                    <td>Priority</td>
                    <td>{task.priority}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>{task.status}</td>
                  </tr>
                  <tr>
                    <td>Assignee</td>
                    <td>{task.assignee}</td>
                  </tr>
                  <tr>
                    <td>Start Date</td>
                    <td>{task.startDate}</td>
                  </tr>
                  <tr>
                    <td>Due Date</td>
                    <td>{task.dueDate}</td>
                  </tr>
                  <tr>
                    <td>Total Time Spent</td>
                    <td>{formatTimeSpent(currentTotalTimeSpent)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <div className="task-actions">
      <button className="button primary" onClick={() => setShowTicketPopup(true)}>Mark Ticket</button>
      <button className="button secondary" onClick={() => navigate(`/tasks/${task.id}/tickets`)}>View Tickets</button>
      <button className="button danger" onClick={() => navigate(`/tasks/${task.id}/resolve`)}>Resolve Ticket</button>
      </div>
      {showTicketPopup && (
        <div className="ticket-popup">
          <h3>Create Ticket</h3>
          <input 
            type="text" 
            placeholder="Title" 
            value={ticketTitle} 
            onChange={(e) => setTicketTitle(e.target.value)} 
          />
          <textarea 
            placeholder="Description" 
            value={ticketDescription} 
            onChange={(e) => setTicketDescription(e.target.value)} 
          />
          <button onClick={handleCreateTicket}>Create</button>
          <button onClick={() => setShowTicketPopup(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Task;
