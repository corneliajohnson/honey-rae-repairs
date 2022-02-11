import React, { useEffect, useState } from "react";

export const EmployeeList = () => {
  const [employees, getEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then(getEmployees);
  }, []);

  return (
    <>
      <h2>Employee List</h2>
      {employees.map((employee) => {
        return <p key={employee.id}>{employee.name}</p>;
      })}
    </>
  );
};
