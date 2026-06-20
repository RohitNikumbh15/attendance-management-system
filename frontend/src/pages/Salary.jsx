import { useEffect, useState } from "react";

import API from "../services/api";

function Salary() {
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    loadSalary();
  }, []);

  const loadSalary = async () => {
    try {
      const response = await API.get("/monthly-summary");

      setSalary(response.data);

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
      <h1>Monthly Salary Summary</h1>

      <table
        width="100%"
        cellPadding="15"
      >
        <thead>
          <tr
            style={{
              background: "#f3f4f6",
            }}
          >
            <th>Month</th>
            <th>Present Days</th>
            <th>Working Hours</th>
            <th>Overtime</th>
            <th>Total Salary</th>
          </tr>
        </thead>

        <tbody>
          {salary.map((item) => (
            <tr key={item.id}>
              <td>{item.month}</td>

              <td>{item.totalPresentDays}</td>

              <td>{item.totalWorkingHours}</td>

              <td>{item.totalOvertimeHours}</td>

              <td>₹{item.totalSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Salary;