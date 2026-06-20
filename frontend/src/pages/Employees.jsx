import { useEffect, useState } from "react";

import API from "../services/api";

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await API.get("/employees");

      setEmployees(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        Employees
      </h1>

      <table
        width="100%"
        cellPadding="15"
        style={{
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#f3f4f6",
            }}
          >
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Phone</th>
            <th>Joining Date</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.employeeId}
              style={{
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <td>{emp.employeeId}</td>

              <td>{emp.name}</td>

              <td>{emp.department}</td>

              <td>{emp.phone}</td>

              <td>{emp.joiningDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;