import { useEffect, useState } from "react";
import API from "../services/api";

function Employees() {

  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
    name: "",
    department: "",
    phone: "",
    joiningDate: "",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await API.get("/employees");
    setEmployees(response.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveEmployee = async () => {

    await API.post("/employees", form);

    alert("Employee Added");

    loadEmployees();

    setForm({
      name: "",
      department: "",
      phone: "",
      joiningDate: "",
    });
  };

  return (
    <div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >

        <h2>Add Employee</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >

          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="date"
            name="joiningDate"
            value={form.joiningDate}
            onChange={handleChange}
            style={inputStyle}
          />

        </div>

        <button
          onClick={saveEmployee}
          style={buttonStyle}
        >
          Add Employee
        </button>

      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
        }}
      >

        <h2>Employee List</h2>

        <table
          width="100%"
          cellPadding="15"
          style={{
            borderCollapse: "collapse",
            marginTop: "20px",
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

    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
};

const buttonStyle = {
  marginTop: "20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Employees;