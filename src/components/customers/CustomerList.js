import React, { useEffect, useState } from "react";

export const CustomerList = () => {
  const [customers, assignCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/customers")
      .then((res) => res.json())
      .then(assignCustomers);
  }, []);

  return (
    <>
      <h2>Customer List</h2>
      {customers.map((customer) => {
        return <p key={customer.id}>{customer.name}</p>;
      })}
    </>
  );
};
