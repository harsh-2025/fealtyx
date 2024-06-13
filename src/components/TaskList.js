// // src/components/TaskList.js
// import React, { useState } from 'react';
// import { useAuth } from '../AuthContext';
// import Task from './Task';
// import '../styles/TaskList.css'; // Import your CSS file

// const TaskList = ({ tasks }) => {
//   const { filterTasks, sortTasks } = useAuth();
//   const [filterCriteria, setFilterCriteria] = useState({});
//   const [sortField, setSortField] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc');

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilterCriteria(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSortChange = (e) => {
//     const { value } = e.target;
//     setSortField(value);
//   };

//   const handleSortOrderChange = (e) => {
//     const { value } = e.target;
//     setSortOrder(value);
//   };

//   const filteredTasks = filterTasks(filterCriteria);
//   const sortedTasks = sortField ? sortTasks(sortField, sortOrder) : filteredTasks;

//   return (
//     <div className="task-list-container">
//       <div className="task-list-header">
//         <h3>Task List</h3>
//         <div className="task-list-filters">
//           <label>
//             Filter by Priority:
//             <select name="priority" onChange={handleFilterChange}>
//               <option value="">All</option>
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="High">High</option>
//             </select>
//           </label>
//           <label>
//             Filter by Status:
//             <select name="status" onChange={handleFilterChange}>
//               <option value="">All</option>
//               <option value="To Do">To Do</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Done">Done</option>
//             </select>
//           </label>
//           <label>
//             Sort by:
//             <select onChange={handleSortChange}>
//               <option value="">None</option>
//               <option value="title">Title</option>
//               <option value="priority">Priority</option>
//               <option value="status">Status</option>
//               <option value="assignee">Assignee</option>
//               <option value="startDate">Start Date</option>
//               <option value="dueDate">Due Date</option>
//             </select>
//           </label>
//           <label>
//             Order:
//             <select onChange={handleSortOrderChange}>
//               <option value="asc">Ascending</option>
//               <option value="desc">Descending</option>
//             </select>
//           </label>
//         </div>
//       </div>
//       {sortedTasks.length > 0 ? (
//         sortedTasks.map(task => (
//           <Task key={task.id} task={task} />
//         ))
//       ) : (
//         <p className="task-list-message">No tasks available</p>
//       )}
//     </div>
//   );
// };

// export default TaskList;


// import React, { useState } from 'react';
// import { useAuth } from '../AuthContext';
// import Task from './Task';
// import "../styles/temp.css";

// const TaskList = ({ tasks }) => {
//   const { filterTasks, sortTasks } = useAuth();
//   const [filterCriteria, setFilterCriteria] = useState({});
//   const [sortField, setSortField] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc');

//   const handleFilterChange = (e) => {
    
//     const { name, value } = e.target;
//     setFilterCriteria(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSortChange = (e) => {
//     const { value } = e.target;
//     setSortField(value);
//   };

//   const handleSortOrderChange = (e) => {
//     const { value } = e.target;
//     setSortOrder(value);
//   };

//   const filteredTasks = filterTasks(filterCriteria);
//   const sortedTasks = sortField ? sortTasks(sortField, sortOrder) : filteredTasks;

//   return (
//     <div className="task-list-container">
//       <h3>Task List</h3>
//       <div className="task-list-controls">
//         <label>
//           Filter by Priority:
//           <select name="priority" onChange={handleFilterChange}>
//             <option value="">All</option>
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//         </label>
//         <label>
//           Filter by Status:
//           <select name="status" onChange={handleFilterChange}>
//             <option value="">All</option>
//             <option value="To Do">To Do</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Done">Done</option>
//           </select>
//         </label>
//         <label>
//           Sort by:
//           <select onChange={handleSortChange}>
//             <option value="">None</option>
//             <option value="title">Title</option>
//             <option value="priority">Priority</option>
//             <option value="status">Status</option>
//             <option value="assignee">Assignee</option>
//             <option value="startDate">Start Date</option>
//             <option value="dueDate">Due Date</option>
//           </select>
//         </label>
//         <label>
//           Order:
//           <select onChange={handleSortOrderChange}>
//             <option value="asc">Ascending</option>
//             <option value="desc">Descending</option>
//           </select>
//         </label>
//       </div>
//       <div className="task-cards-container">
//         {sortedTasks.length > 0 ? (
//           sortedTasks.map(task => (
//             <Task key={task.id} task={task} />
//           ))
//         ) : (
//           <p>No tasks available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaskList;

import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import Task from './Task';
import "../styles/Task.css";

const TaskList = ({ tasks }) => {
  const { filterTasks, sortTasks } = useAuth();
  const [filterCriteria, setFilterCriteria] = useState({
    priority: '',
    status: '',
  });
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria(prev => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (e) => {
    const { value } = e.target;
    setSortField(value);
  };

  const handleSortOrderChange = (e) => {
    const { value } = e.target;
    setSortOrder(value);
  };

  // Filter tasks based on filterCriteria
  const filteredTasks = tasks.filter(task => {
    return (
      (filterCriteria.priority === '' || task.priority === filterCriteria.priority) &&
      (filterCriteria.status === '' || task.status === filterCriteria.status)
    );
  });

  // Sort tasks if a sort field is specified
  const sortedTasks = sortField 
    ? filteredTasks.sort((a, b) => {
        const fieldA = a[sortField].toLowerCase();
        const fieldB = b[sortField].toLowerCase();
        if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
        if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      })
    : filteredTasks;

  return (
    <div className="task-list-container">
      <h3>Task List</h3>
      <div className="task-list-controls">
        <label>
          Filter by Priority:
          <select name="priority" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Filter by Status:
          <select name="status" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <label>
          Sort by:
          <select onChange={handleSortChange}>
            <option value="">None</option>
            <option value="title">Title</option>
            <option value="priority">Priority</option>
            <option value="status">Status</option>
            <option value="assignee">Assignee</option>
            <option value="startDate">Start Date</option>
            <option value="dueDate">Due Date</option>
          </select>
        </label>
        <label>
          Order:
          <select onChange={handleSortOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <div className="task-cards-container">
        {sortedTasks.length > 0 ? (
          sortedTasks.map(task => (
            <Task key={task.id} task={task} />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
