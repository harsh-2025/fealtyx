import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Navbar from './Navbar';

const TicketList = () => {
  const { taskId } = useParams();
  const { getTicketsForTask } = useAuth();
  const tickets = getTicketsForTask(Number(taskId));

  return (
    
    <div className="ticket-list">
      <Navbar/>
      <h3>Tickets</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No tickets found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
