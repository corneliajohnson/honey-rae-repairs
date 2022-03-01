import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, changeEmployee] = useState([]);
  const [specialties, getSpecialties] = useState("");
  const history = useHistory();

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
      <div>
        <button onClick={() => history.push("/employee/create")}>
          Hire Employee
        </button>
      </div>
      <div>Specialties: {specialties}</div>
      {employees.map((employee) => {
        return <p key={`employee--${employee.id}`}>{employee.name}</p>;
      })}
    </>
  );
};
