import React, { useState } from "react";

export const TicketForm = () => {
  const [ticket, setTicket] = useState({});
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
  };
  const handleTicket = (event) => {
    const newTicket = { ...ticket, ...checked };
    newTicket[event.target.name] = event.target.value;
    setTicket(newTicket);
  };
  const saveTicket = (event) => {
    event.preventDefault();
    fetch("http://localhost:8088/serviceTickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });
  };

  return (
    <form className="ticketForm">
      <h2 className="ticketForm__title">New Service Ticket</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Brief description of problem"
            name="description"
            onChange={handleTicket}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="emergency">Emergency:</label>
          <input
            type="checkbox"
            name="emergency"
            onChange={(e) => {
              handleCheckbox();
              handleTicket(e);
            }}
            value={!checked}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={saveTicket}>
        Submit Ticket
      </button>
    </form>
  );
};
