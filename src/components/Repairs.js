import React, { useEffect, useState } from "react";

export const Repairs = () => {
  const [customers, assignCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/customers")
      .then((res) => res.json())
      .then(assignCustomers);
  }, []);

  return (
    <>
      <h1>Honey Rae's Repair Shop</h1>
      {customers.map((customer) => {
        return <p key={customer.id}>{customer.name}</p>;
      })}
    </>
  );
};
