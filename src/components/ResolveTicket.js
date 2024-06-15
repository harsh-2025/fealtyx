import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Navbar from './Navbar';

const ResolveTicket = () => {
  const { taskId } = useParams();
  const { getTicketsForTask, resolveTicket } = useAuth();
  const tickets = getTicketsForTask(Number(taskId));
  // console.log('Tickets for resolving:', tickets); // Log tickets to ensure they are being fetched

  const handleResolveTicket = (ticketId) => {
    resolveTicket(Number(taskId), ticketId);
  };

  return (
    <div className="resolve-ticket">
      <Navbar/>
      <h3>Resolve Tickets</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>
                  {ticket.status === 'Open' && (
                    <button onClick={() => handleResolveTicket(ticket.id)}>Resolve</button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No tickets found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResolveTicket;
