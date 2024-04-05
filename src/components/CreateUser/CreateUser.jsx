import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faVideo,
  faMapMarked,
  faExchangeAlt,
  faSignOut,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";

function CreateUser() {
  const [employeeID, setEmployeeID] = useState("");
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [organizationName, setOrganizationName] = useState("");
  const [siteName, setSiteName] = useState("");
  const [responsibility, setResponsibility] = useState("");

  const handleCancel = () => {
    setEmployeeID("");
    setUsername("");
    setMobileNumber("");
    setEmail("");
    setPassword("");
    setRole("admin");
    setOrganizationName("");
    setSiteName("");
    setResponsibility("");
  };

  const handleSave = () => {
    Swal.fire({
      title: "User Created Successfully!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "btn btn-success",
      },
    });
  };

  return (
    <div className="create-user">
      <div className="report-header d-flex justify-content-between align-items-center">
        <div></div>
        <h2 className="report-header-title text-center mt-3">CREATE USER</h2>
        <FontAwesomeIcon
          icon={faHome}
          className="daily_report_icon mt-2 me-3"
        />
      </div>

      <div className="home-sidebar d-flex flex-column text-center">
        <div to="/vehicle-entry" className="sidebar-item">
          <FontAwesomeIcon icon={faUserFriends} className="sidebar-icon" />
          <span className="sidebar-item-text">Users</span>
        </div>
        <div to="/live-location" className="sidebar-item">
          <FontAwesomeIcon icon={faMapMarked} className="sidebar-icon" />
          <span className="sidebar-item-text">Live Location</span>
        </div>
        <div to="/live-transaction" className="sidebar-item">
          <FontAwesomeIcon icon={faExchangeAlt} className="sidebar-icon" />
          <span className="sidebar-item-text">Live Transaction</span>
        </div>
        <div to="/camera" className="sidebar-item">
          <FontAwesomeIcon icon={faVideo} className="sidebar-icon" />
          <span className="sidebar-item-text">Camera</span>
        </div>
        <div to="/report" className="sidebar-item">
          <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon rp-icon" />
          <span className="sidebar-item-text">Reports</span>
        </div>
        <div to="/" className="sidebar-item">
          <FontAwesomeIcon icon={faSignOut} className="sidebar-icon" />
          <span className="sidebar-item-text">Logout</span>
        </div>
      </div>

      <div className="home-main-content">
        <div className="create-user-container">
          <div className="card create-user-form">
            <div
              className="card-body"
              style={{ backgroundColor: "rgb(243,244,247)" }}
            >
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="employeeID" className="form-label">
                      Employee ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeID"
                      placeholder="Enter User ID"
                      value={employeeID}
                      onChange={(e) => setEmployeeID(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="mobileNumber" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobileNumber"
                      placeholder="Enter Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <select
                      className="form-select"
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    >
                      <option value="admin">Admin</option>
                      <option value="gateUser">Gate User</option>
                      <option value="weighbridgeOperator">
                        Weighbridge Operator
                      </option>
                      <option value="qualityUser">Quality User</option>
                      <option value="management">Management</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="organizationName" className="form-label">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="organizationName"
                      placeholder="Enter Your Organization name"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="siteName" className="form-label">
                      Site Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="siteName"
                      placeholder="Enter Your site name name"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="responsibility" className="form-label">
                      Responsibility
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="responsibility"
                      placeholder="Enter Responsibility"
                      value={responsibility}
                      onChange={(e) => setResponsibility(e.target.value)}
                    />
                  </div>
                </div>
              </form>
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="button"
                  className="btn btn-danger me-4 btn-hover"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bold",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-hover"
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    fontWeight: "bold",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
