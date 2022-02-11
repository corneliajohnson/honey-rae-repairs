import React, { useEffect, useState } from "react";

export const TicketList = () => {
  const [tickets, getTickets] = useState([]);

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
      {/* Description of the service ticket 
      Name of the customer 
      Name of the
      employee doing the repair */}
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
