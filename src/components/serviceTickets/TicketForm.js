import React, { useState, useEffect } from "react";

export const TicketForm = () => {
  const [checked, setChecked] = useState(false);
  const [ticket, setTicket] = useState({ emergency: checked });
  const [employees, setEmployee] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmployee(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8088/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  const handleCheckbox = () => {
    setChecked(!checked);
  };
  const handleTicket = (event) => {
    const newTicket = { ...ticket };
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
            autoFocus
            type="text"
            className="form-control"
            placeholder="Brief description of problem"
            name="description"
            onChange={handleTicket}
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customer">Employee:</label>
          <select
            autoFocus
            className="form-control"
            name="customerId"
            onChange={handleTicket}
            value={ticket.employeeId}
          >
            <option value={0}>Select an customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employee">Employee:</label>
          <select
            autoFocus
            className="form-control"
            name="employeeId"
            onChange={handleTicket}
            value={ticket.employeeId}
          >
            <option value={0}>Select an employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="dateCompleted">Date Completed:</label>
          <input
            autoFocus
            type="date"
            className="form-control"
            name="dateCompleted"
            onChange={handleTicket}
            required
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
