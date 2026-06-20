import { useState } from 'react';
import API from '../../services/api';

function AttendanceForm() {

  const [attendance, setAttendance] = useState({
    attendanceDate: '',
    inTime: '',
    outTime: '',
    totalHours: '',
    overtimeHours: '',
    dailySalary: '',
    employee: {
      employeeId: ''
    }
  });

  const handleChange = (e) => {

    if (e.target.name === 'employeeId') {
      setAttendance({
        ...attendance,
        employee: {
          employeeId: e.target.value,
          active: true
        }
      });
    }
    else {
      setAttendance({
        ...attendance,
        [e.target.name]: e.target.value
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post('/attendance', attendance);

    alert('Attendance Saved');
  }

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow">

      <input
        type="number"
        name="employeeId"
        placeholder="Employee ID"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        type="date"
        name="attendanceDate"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        type="time"
        name="inTime"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        type="time"
        name="outTime"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.1"
        name="totalHours"
        placeholder="Total Hours"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.1"
        name="overtimeHours"
        placeholder="Overtime Hours"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.1"
        name="dailySalary"
        placeholder="Daily Salary"
        className="form-control mb-3"
        onChange={handleChange}
      />

      <button className="btn btn-success">
        Save Attendance
      </button>

    </form>
  )
}

export default AttendanceForm