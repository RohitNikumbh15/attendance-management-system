import { useEffect, useState } from "react";

import API from "../services/api";

function Attendance() {

  const [employees, setEmployees] = useState([]);

  const [attendance, setAttendance] = useState([]);

  const [form, setForm] = useState({
    employeeId: "",
    attendanceDate: "",
    inTime: "",
    outTime: "",
  });

  useEffect(() => {
    loadEmployees();
    loadAttendance();
  }, []);

  const loadEmployees = async () => {
    try {

      const response = await API.get("/employees");

      setEmployees(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const loadAttendance = async () => {
    try {

      const response = await API.get("/attendance");

      setAttendance(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveAttendance = async () => {

    try {

      await API.post("/attendance", form);

      alert("Attendance Saved Successfully");

      loadAttendance();

      setForm({
        employeeId: "",
        attendanceDate: "",
        inTime: "",
        outTime: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  const formatTime = (time) => {

    if (!time) return "";

    return new Date(
      `1970-01-01T${time}`
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div>

      {/* FORM SECTION */}

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          Add Attendance
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >

          <select
            name="employeeId"
            value={form.employeeId}
            onChange={handleChange}
            style={inputStyle}
          >

            <option value="">
              Select Employee
            </option>

            {employees.map((emp) => (
              <option
                key={emp.employeeId}
                value={emp.employeeId}
              >
                {emp.name}
              </option>
            ))}

          </select>

          <input
            type="date"
            name="attendanceDate"
            value={form.attendanceDate}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="time"
            name="inTime"
            value={form.inTime}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="time"
            name="outTime"
            value={form.outTime}
            onChange={handleChange}
            style={inputStyle}
          />

        </div>

        <button
          onClick={saveAttendance}
          style={buttonStyle}
        >
          Save Attendance
        </button>

      </div>

      {/* TABLE SECTION */}

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          overflowX: "auto",
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          Attendance Records
        </h2>

        <table
          width="100%"
          cellPadding="16"
          style={{
            borderCollapse: "collapse",
            minWidth: "1000px",
          }}
        >

          <thead>

            <tr
              style={{
                background: "#f3f4f6",
                textAlign: "left",
              }}
            >

              <th>ID</th>

              <th>Date</th>

              <th>In Time</th>

              <th>Out Time</th>

              <th>Total Hours</th>

              <th>Overtime</th>

              <th>Daily Salary</th>

            </tr>

          </thead>

          <tbody>

            {attendance.map((item) => (

              <tr
                key={item.id}
                style={{
                  borderBottom:
                    "1px solid #e5e7eb",
                }}
              >

                <td>{item.id}</td>

                <td>
                  {item.attendanceDate}
                </td>

                <td>
                  {formatTime(item.inTime)}
                </td>

                <td>
                  {formatTime(item.outTime)}
                </td>

                <td>
                  {item.totalHours} hrs
                </td>

                <td>
                  {item.overtimeHours} hrs
                </td>

                <td
                  style={{
                    color: "#16a34a",
                    fontWeight: "bold",
                  }}
                >
                  ₹{item.dailySalary}
                </td>

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
  fontSize: "15px",
  outline: "none",
};

const buttonStyle = {
  marginTop: "20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "15px",
};

export default Attendance;