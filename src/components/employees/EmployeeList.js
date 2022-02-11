import React, { useEffect, useState } from "react";

export const EmployeeList = () => {
  const [employees, changeEmployee] = useState([]);
  const [specialties, getSpecialties] = useState("");

  useEffect(() => {
    fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then((data) => {
        changeEmployee(data);
      });
  }, []);

  useEffect(() => {
    let specs = employees.map((em) => em.specialty);
    getSpecialties(specs.join(", "));
  }, [employees]);

  return (
    <>
      <div>Specialties: {specialties}</div>
      {employees.map((employee) => {
        return <p key={`employee--${employee.id}`}>{employee.name}</p>;
      })}
    </>
  );
};
