import {
  Dashboard,
  Group,
  CalendarMonth,
  CurrencyRupee,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

function Sidebar() {
  const menu = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px",
    marginBottom: "10px",
    borderRadius: "12px",
    color: "#374151",
    fontWeight: "600",
    background: "white",
  };

  return (
    <div
      style={{
        width: "250px",
        background: "#ffffff",
        padding: "20px",
        borderRight: "1px solid #e5e7eb",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          color: "#111827",
        }}
      >
        AttendancePro
      </h2>

      <Link to="/" style={menu}>
        <Dashboard />
        Dashboard
      </Link>

      <Link to="/employees" style={menu}>
        <Group />
        Employees
      </Link>

      <Link to="/attendance" style={menu}>
        <CalendarMonth />
        Attendance
      </Link>

      <Link to="/salary" style={menu}>
        <CurrencyRupee />
        Salary
      </Link>
    </div>
  );
}

export default Sidebar;