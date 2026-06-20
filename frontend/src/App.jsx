import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Salary from "./pages/Salary";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "#f3f4f6",
        }}
      >
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          <Topbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/salary" element={<Salary />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;