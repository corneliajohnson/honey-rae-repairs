import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
  const [employee, setEmployee] = useState();
  const history = useHistory();

  const saveEmployee = (event) => {
    event.preventDefault();
    fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then(() => history.push("/employees"));
  };
  const handleEmployee = (event) => {
    const newEmployee = { ...employee };
    newEmployee[event.target.name] = event.target.value;
    setEmployee(newEmployee);
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Name</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="First and Last Name"
            onChange={handleEmployee}
            name="name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Specialty:</label>
          <input
            type="text"
            className="form-control"
            onChange={handleEmployee}
            name="specialty"
            placeholder="Technical Specialty"
            required
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={saveEmployee}>
        Submit Employee
      </button>
    </form>
  );
};
