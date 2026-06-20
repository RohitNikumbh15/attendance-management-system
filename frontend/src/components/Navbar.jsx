import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          Attendance System
        </Link>

        <div>
          <Link className="btn btn-light me-2" to="/employees">
            Employees
          </Link>

          <Link className="btn btn-light me-2" to="/attendance">
            Attendance
          </Link>

          <Link className="btn btn-light" to="/summary">
            Summary
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;