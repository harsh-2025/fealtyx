

// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../AuthContext';
// import { Container, Typography, Paper, Grid, TextField, TextareaAutosize, Select, MenuItem, Button } from '@mui/material'; // Import Material-UI components
// import '../styles/CreateTask.css'; // Import your CSS file

// const CreateTask = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [priority, setPriority] = useState('Low');
//   const [status, setStatus] = useState('To Do');
//   const [assignee, setAssignee] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const { addTask } = useAuth();

//   // Set start date to current date on component mount
//   useEffect(() => {
//     const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
//     setStartDate(currentDate);
//   }, []);

//   const handleDueDateChange = (e) => {
//     const selectedDate = new Date(e.target.value);
//     const currentDate = new Date();

//     if (selectedDate < currentDate) {
//       // If selected date is less than current date, reset dueDate to current date
//       const currentDateString = currentDate.toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
//       setDueDate(currentDateString);
//       alert("Due date must be greater than current date.");
//     } else {
//       // Set dueDate to the selected date
//       setDueDate(e.target.value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTask = {
//       id: Date.now(),
//       title,
//       description,
//       priority,
//       status,
//       assignee,
//       startDate,
//       dueDate,
//       createdDate: new Date().toISOString(),
//       updatedDate: new Date().toISOString(),
//       timeLogs: [], // To store individual time logs
//       totalTimeSpent: 0 // To store the total time spent on the task
//     };

//     addTask(newTask);
//     setTitle('');
//     setDescription('');
//     setPriority('Low');
//     setStatus('To Do');
//     setAssignee('');
//     setStartDate('');
//     setDueDate('');
//   };

//   return (
//     <Container maxWidth="md" className="create-task-container">
//       <Paper elevation={3} className="create-task-paper">
//         <Grid container spacing={3}>
//           {/* Left side - Form */}
//           <Grid item xs={12} md={8}>
//             <Typography variant="h6" className="create-task-header">
//               Create Task
//             </Typography>
//             <form className="create-task-form" onSubmit={handleSubmit}>
//               <TextField
//                 id="title"
//                 label="Title"
//                 variant="outlined"
//                 fullWidth
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />

//               <TextareaAutosize
//                 id="description"
//                 placeholder="Description"
//                 minRows={4}
//                 maxRows={8}
//                 className="description-textarea"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />

//               <Select
//                 id="priority"
//                 value={priority}
//                 onChange={(e) => setPriority(e.target.value)}
//                 variant="outlined"
//                 fullWidth
//                 required
//               >
//                 <MenuItem value="Low">Low</MenuItem>
//                 <MenuItem value="Medium">Medium</MenuItem>
//                 <MenuItem value="High">High</MenuItem>
//               </Select>

//               <Select
//                 id="status"
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 variant="outlined"
//                 fullWidth
//                 required
//               >
//                 <MenuItem value="To Do">To Do</MenuItem>
//                 <MenuItem value="In Progress">In Progress</MenuItem>
//                 <MenuItem value="Done">Done</MenuItem>
//               </Select>

//               <TextField
//                 id="assignee"
//                 label="Assignee"
//                 variant="outlined"
//                 fullWidth
//                 value={assignee}
//                 onChange={(e) => setAssignee(e.target.value)}
//                 required
//               />

// <TextField
//                 id="startDate"
//                 label="Start Date"
//                 type="date"
//                 variant="outlined"
//                 fullWidth
//                 value={startDate}
//                 disabled
//                 required
//                 InputLabelProps={{ shrink: true }}
//               />

//               <TextField
//                 id="dueDate"
//                 label="Due Date"
//                 type="date"
//                 variant="outlined"
//                 fullWidth
//                 value={dueDate}
//                 onChange={handleDueDateChange}
//                 required
//                 InputLabelProps={{ shrink: true }}
//               />

//               <Button type="submit" variant="contained" color="primary" fullWidth>
//                 Add Task
//               </Button>
//             </form>
//           </Grid>

//           {/* Right side - Image (for desktop) */}
//           <Grid item xs={false} md={4} className="create-task-image">
//             <img src="../assets/image.jpg" alt="Task" />
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default CreateTask;

import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Container, Typography, Paper, Grid, TextField, TextareaAutosize, Select, MenuItem, Button } from '@mui/material'; // Import Material-UI components
import '../styles/CreateTask.css'; // Import your CSS file

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('To Do');
  const [assignee, setAssignee] = useState('');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const { addTask } = useAuth();

  const handleDueDateChange = (e) => {
    const selectedDueDate = new Date(e.target.value);
    const selectedStartDate = new Date(startDate);

    if (selectedDueDate < selectedStartDate) {
      // If selected due date is less than start date, alert and reset dueDate
      alert("Due date must be equal to or greater than start date.");
      setDueDate('');
    } else {
      // Set dueDate to the selected date
      setDueDate(e.target.value);
    }
  };

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
    <Container maxWidth="md" className="create-task-container">
      <Paper elevation={3} className="create-task-paper">
        <Grid container spacing={3}>
          {/* Left side - Form */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" className="create-task-header">
              Create Task
            </Typography>
            <form className="create-task-form" onSubmit={handleSubmit}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <TextareaAutosize
                id="description"
                placeholder="Description"
                minRows={4}
                maxRows={8}
                className="description-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <Select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                variant="outlined"
                fullWidth
                required
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>

              <Select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                variant="outlined"
                fullWidth
                required
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>

              <TextField
                id="assignee"
                label="Assignee"
                variant="outlined"
                fullWidth
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                required
              />

              <TextField
                id="startDate"
                label="Start Date"
                type="date"
                variant="outlined"
                fullWidth
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                id="dueDate"
                label="Due Date"
                type="date"
                variant="outlined"
                fullWidth
                value={dueDate}
                onChange={handleDueDateChange}
                required
                InputLabelProps={{ shrink: true }}
              />

              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Task
              </Button>
            </form>
          </Grid>

          {/* Right side - Image (for desktop) */}
          <Grid item xs={false} md={4} className="create-task-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiPbAdNh8vDST0w9-mVWSR7GhU3YcLCwpbQ&s" alt="Task" />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CreateTask;
