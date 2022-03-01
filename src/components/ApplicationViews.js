import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketForm } from "./serviceTickets/TicketForm";
import { TicketList } from "./serviceTickets/TicketList";

export const ApplicationViews = () => {
  return (
    <>
      <Route path="/customers">
        <CustomerList />
      </Route>
      <Route path="/employees">
        <EmployeeList />
      </Route>
      <Route path="/tickets">
        <TicketList />
      </Route>
      <Route path="/ticket/create">
        <TicketForm />
      </Route>
      <Route path="/employee/create">
        <EmployeeForm />
      </Route>
    </>
  );
};
