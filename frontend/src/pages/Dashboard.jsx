import { useEffect, useState } from "react";

import API from "../services/api";

import StatCard from "../components/StatCard";
import AttendanceChart from "../components/AttendanceChart";

function Dashboard() {
  const [stats, setStats] = useState({
    employees: 0,
    present: 0,
    overtime: 0,
    salary: 0,
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const employeesRes = await API.get("/employees");

      const attendanceRes = await API.get("/attendance");

      const summaryRes = await API.get("/monthly-summary");

      const employees = employeesRes.data;

      const attendance = attendanceRes.data;

      const summary = summaryRes.data;

      const totalSalary = summary.reduce(
        (sum, item) => sum + item.totalSalary,
        0
      );

      const totalOvertime = summary.reduce(
        (sum, item) => sum + item.totalOvertimeHours,
        0
      );

      setStats({
        employees: employees.length,
        present: attendance.length,
        overtime: totalOvertime,
        salary: totalSalary,
      });

      const chart = attendance.map((item, index) => ({
        day: `Day ${index + 1}`,
        hours: item.totalHours,
      }));

      setChartData(chart);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1
        style={{
          marginBottom: "20px",
          color: "#111827",
          fontSize: "35px",
        }}
      >
        Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "20px",
        }}
      >
        <StatCard
          title="Employees"
          value={stats.employees}
          color="#2563eb"
        />

        <StatCard
          title="Attendance"
          value={stats.present}
          color="#16a34a"
        />

        <StatCard
          title="Overtime Hours"
          value={stats.overtime}
          color="#ea580c"
        />

        <StatCard
          title="Total Salary"
          value={`₹${stats.salary}`}
          color="#7c3aed"
        />
      </div>

      <AttendanceChart data={chartData} />
    </div>
  );
}

export default Dashboard;