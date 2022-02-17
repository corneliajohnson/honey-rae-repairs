import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const TicketList = () => {
  const [tickets, getTickets] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(
      "http://localhost:8088/serviceTickets?_expand=employee&_expand=customer"
    )
      .then((res) => res.json())
      .then((data) => {
        getTickets(data);
      });
  }, []);

  return (
    <>
      <div>
        <button onClick={() => history.push("/ticket/create")}>
          Create Ticket
        </button>
      </div>
      {tickets.map((ticket) => {
        return (
          <div key={`ticketService--${ticket.id}`}>
            <p>Description: {ticket.description}</p>
            <p>Customer: {ticket.customer.name}</p>
            {
              <p>
                Employee Repairing:
                {ticket.employee ? ` ${ticket.employee.name}` : " N/A"}
              </p>
            }
          </div>
        );
      })}
    </>
  );
};
