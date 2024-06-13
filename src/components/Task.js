// // src/components/Task.js
// import React, { useState } from 'react';
// import { useAuth } from '../AuthContext';
// import "../styles/Task.css"

// const Task = ({ task }) => {
//   const { updateTask, deleteTask, logTime } = useAuth();
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   const [priority, setPriority] = useState(task.priority);
//   const [status, setStatus] = useState(task.status);
//   const [assignee, setAssignee] = useState(task.assignee);
//   const [startDate, setStartDate] = useState(task.startDate);
//   const [dueDate, setDueDate] = useState(task.dueDate);
//   const [timeSpent, setTimeSpent] = useState(0);

//   const handleSave = () => {
//     updateTask({
//       ...task,
//       title,
//       description,
//       priority,
//       status,
//       assignee,
//       startDate,
//       dueDate,
//       updatedDate: new Date().toISOString()
//     });
//     setIsEditing(false);
//   };

//   const handleLogTime = () => {
//     logTime(task.id, Number(timeSpent));
//     setTimeSpent(0);
//   };

//   return (
//     <div className="task-container">
//       <div className="task-header">
//         {isEditing ? (
//           <input 
//             type="text" 
//             value={title} 
//             onChange={(e) => setTitle(e.target.value)} 
//           />
//         ) : (
//           <h4>{task.title}</h4>
//         )}
//         <div>
//           <button onClick={() => setIsEditing(!isEditing)}>
//             {isEditing ? 'Cancel' : 'Edit'}
//           </button>
//           <button onClick={() => deleteTask(task.id)}>Delete</button>
//         </div>
//       </div>
//       <div className="task-details">
//         {isEditing ? (
//           <div className="task-edit-form">
//             <textarea 
//               value={description} 
//               onChange={(e) => setDescription(e.target.value)} 
//             />
//             <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="High">High</option>
//             </select>
//             <select value={status} onChange={(e) => setStatus(e.target.value)}>
//               <option value="To Do">To Do</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Done">Done</option>
//             </select>
//             <input 
//               type="text" 
//               value={assignee} 
//               onChange={(e) => setAssignee(e.target.value)} 
//             />
//             <input 
//               type="date" 
//               value={startDate} 
//               onChange={(e) => setStartDate(e.target.value)} 
//             />
//             <input 
//               type="date" 
//               value={dueDate} 
//               onChange={(e) => setDueDate(e.target.value)} 
//             />
//             <button onClick={handleSave}>Save</button>
//           </div>
//         ) : (
//             <>
//               <div className="cards">
//                <p>{task.description}</p>
//             <p>Priority: {task.priority}</p>
//             <p>Status: {task.status}</p>
//             <p>Assignee: {task.assignee}</p>
//             <p>Start Date: {task.startDate}</p>
//             <p>Due Date: {task.dueDate}</p>
//                 <p>Total Time Spent: {task.totalTimeSpent} hours</p> 
//                 </div>
//             </>
        
//         )}
//       </div>
//       <div className="task-log-time">
//         <input 
//           type="number" 
//           placeholder="Hours spent" 
//           value={timeSpent} 
//           onChange={(e) => setTimeSpent(e.target.value)} 
//         />
//         <button onClick={handleLogTime}>Log Time</button>
//       </div>
//     </div>
//   );
// };

// export default Task;


import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import "../styles/temp.css";

const Task = ({ task }) => {
  const { updateTask, deleteTask, logTime } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [assignee, setAssignee] = useState(task.assignee);
  const [startDate, setStartDate] = useState(task.startDate);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [timeSpent, setTimeSpent] = useState(0);

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

  const handleLogTime = () => {
    logTime(task.id, Number(timeSpent));
    setTimeSpent(0);
  };

  return (
    <div className="task-container">
      <div className="task-header">
        {isEditing ? (
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        ) : (
          <h4>{task.title}</h4>
        )}
        <div>
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      </div>
      <div className="task-details">
        {isEditing ? (
          <div className="task-edit-form">
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
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
              onChange={(e) => setStartDate(e.target.value)} 
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
                    <td>{task.totalTimeSpent} hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <div className="task-log-time">
        <input 
          type="number" 
          placeholder="Hours spent" 
          value={timeSpent} 
          onChange={(e) => setTimeSpent(e.target.value)} 
        />
        <button onClick={handleLogTime}>Log Time</button>
      </div>
    </div>
  );
};

export default Task;
