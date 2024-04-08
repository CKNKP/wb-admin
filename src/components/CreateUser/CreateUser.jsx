import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faVideo,
  faMapMarked,
  faExchangeAlt,
  faSignOut,
  faUserFriends,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function CreateUser() {
  const [employeeID, setEmployeeID] = useState("");
  const [role, setRole] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [siteName, setSiteName] = useState("");

  const handleCancel = () => {
    setEmployeeID("");
    setRole([]);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setMobileNumber("");
    setCompanyName("");
    setResponsibility("");
    setSiteName("");
  };

  const handleSave = () => {
    if (
      employeeID.trim() === "" ||
      password.trim() === "" ||
      role.length === 0 ||
      companyName.trim() === "" ||
      siteName.trim() === ""
    ) {
      Swal.fire({
        title: "Please fill in all the required fields.",
        icon: "warning",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "btn btn-warning",
        },
      });
      return;
    }

    const userData = {
      employeeID,
      role,
      firstName,
      lastName,
      middleName,
      email,
      password,
      mobileNumber,
      companyName,
      responsibility,
      siteName,
    };

    fetch("https://your-api-endpoint.com/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        Swal.fire({
          title: "User Created Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn btn-success",
          },
        });

        handleCancel();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while creating the user. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn btn-danger",
          },
        });
      });
  };

  const handleRoleChange = (selectedRole) => {
    if (role.includes(selectedRole)) {
      setRole(role.filter((r) => r !== selectedRole));
    } else {
      setRole([...role, selectedRole]);
    }
  };

  const handleSelectAllRoles = () => {
    if (role.length === 5) {
      setRole([]);
    } else {
      setRole([
        "admin",
        "gateUser",
        "weighbridgeOperator",
        "qualityUser",
        "management",
      ]);
    }
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
                      User ID
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
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <div className="d-flex gap-2">
                      <div className="d-flex flex-wrap gap-2">
                        {role.map((r, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center bg-secondary text-white px-2 py-1 rounded"
                          >
                            <span className="me-2">{r}</span>
                            <FontAwesomeIcon
                              icon={faTimes}
                              className="cursor-pointer"
                              onClick={() => handleRoleChange(r)}
                            />
                          </div>
                        ))}
                        <button
                          className="btn btn-primary dropdown-toggle"
                          type="button"
                          id="dropdownRole"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Roles
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownRole"
                        >
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={() => handleRoleChange("admin")}
                                checked={role.includes("admin")}
                              />
                              Admin
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={() => handleRoleChange("gateUser")}
                                checked={role.includes("gateUser")}
                              />
                              Gate User
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={() =>
                                  handleRoleChange("weighbridgeOperator")
                                }
                                checked={role.includes("weighbridgeOperator")}
                              />
                              Weighbridge Operator
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={() => handleRoleChange("qualityUser")}
                                checked={role.includes("qualityUser")}
                              />
                              Quality User
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={() => handleRoleChange("management")}
                                checked={role.includes("management")}
                              />
                              Management
                            </label>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={handleSelectAllRoles}
                                checked={role.length === 5}
                              />
                              Select All Roles
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="middleName"
                      placeholder="Enter Middle Name"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mb-3">
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
                    <label htmlFor="companyName" className="form-label">
                      Company Name
                    </label>
                    <select
                      className="form-select"
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    >
                      <option value="">Select Company Name</option>
                      <option value="Vikrant private Ltd.">
                        Vikrant private Ltd.
                      </option>
                      <option value="Highlander">Highlander</option>
                      <option value="Ryder">Ryder</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="siteName" className="form-label">
                      Site Name
                    </label>
                    <select
                      className="form-select"
                      id="siteName"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                      required
                    >
                      <option value="">Select Site Name</option>
                      <option value="Bhubaneswar">Bhubaneswar</option>
                      <option value="Rourkela">Rourkela</option>
                      <option value="Puri">Puri</option>
                    </select>
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
