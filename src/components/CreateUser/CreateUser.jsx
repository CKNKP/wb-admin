import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTimes,
  faUserFriends,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import "./CreateUser.css";
import { Link } from "react-router-dom";

function CreateUser() {
  const [userId, setuserId] = useState("");
  const [role, setRole] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setcontactNo] = useState("");
  const [company, setcompany] = useState("");
  const [site, setsite] = useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  // console.log(
  //   role,
  //   userId,
  //   firstName,
  //   middleName,
  //   lastName,
  //   emailId,
  //   password,
  //   contactNo,
  //   company,
  //   site
  // );

  const handleCancel = () => {
    setuserId("");
    setRole([]);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setemailId("");
    setPassword("");
    setcontactNo("");
    setcompany("");
    setsite("");
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleSave = () => {
    if (
      userId.trim() === "" ||
      password.trim() === "" ||
      role.length === 0 ||
      company.trim() === "" ||
      site.trim() === ""
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
      userId,
      site,
      company,
      emailId,
      password,
      contactNo,
      role,
      firstName,
      middleName,
      lastName,
    };

    fetch("http://localhost:8080/api/v1/users", {
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
        "ADMIN",
        "GATE_USER",
        "WEIGHBRIDGE_OPERATOR",
        "QUALITY_USER",
        "MANAGEMENT",
      ]);
    }
  };

  return (
    <div className="create-user">
      <div className="report-header d-flex justify-content-between align-items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="daily_report_icon mt-2 me-3 sidebar-toggle-btn"
          onClick={toggleSidebar}
        />
        <h2 className="report-header-title text-center mt-3 d-flex align-content-center">
          CREATE USER
        </h2>
        <FontAwesomeIcon
          icon={faHome}
          className="daily_report_icon mt-2 me-2"
        />
      </div>

      <div className={`home-sidebar ${isSidebarExpanded ? "expanded" : ""}`}>
        <div className="sidebar-item dropdown">
          <Link
            to="/"
            className="d-flex align-items-center"
            id="usersDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faUserFriends} className="sidebar-icon" />
            <span className="sidebar-item-text">User Management</span>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="usersDropdown"
          >
            <li>
              <Link className="dropdown-item" to="/">
                Create User
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/manage-user">
                Maintain User
              </Link>
            </li>
            {/* <li>
              <Link className="dropdown-item" to="/view-users">
                View Users
              </Link>
            </li> */}
          </ul>
        </div>
      </div>

      <div
        className={`create-main-content ${isSidebarExpanded ? "expanded" : ""}`}
      >
        <div className="create-user-container">
          <div className="card create-user-form">
            <div
              className="card-body"
              style={{ backgroundColor: "rgb(243,244,247)" }}
            >
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="userId" className="form-label">
                      User ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userId"
                      placeholder="Enter User ID"
                      value={userId}
                      onChange={(e) => setuserId(e.target.value)}
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
                          className="btn btn-secondary dropdown-toggle"
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
                                onChange={() => handleRoleChange("ADMIN")}
                                checked={role.includes("ADMIN")}
                              />
                              Admin
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={() => handleRoleChange("GATE_USER")}
                                checked={role.includes("GATE_USER")}
                              />
                              Gate User
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={() =>
                                  handleRoleChange("WEIGHBRIDGE_OPERATOR")
                                }
                                checked={role.includes("WEIGHBRIDGE_OPERATOR")}
                              />
                              Weighbridge Operator
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={() =>
                                  handleRoleChange("QUALITY_USER")
                                }
                                checked={role.includes("QUALITY_USER")}
                              />
                              Quality User
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item">
                              <input
                                type="checkbox"
                                onChange={() => handleRoleChange("MANAGEMENT")}
                                checked={role.includes("MANAGEMENT")}
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
                    <label htmlFor="middleName" className="form-label">
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
                    <label htmlFor="emailId" className="form-label">
                      Email Id
                    </label>
                    <input
                      type="emailId"
                      className="form-control"
                      id="emailId"
                      placeholder="Enter email address"
                      value={emailId}
                      onChange={(e) => setemailId(e.target.value)}
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
                      autoComplete="username"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor=" contactNo" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id=" contactNo"
                      placeholder="Enter Mobile Number"
                      value={contactNo}
                      onChange={(e) => setcontactNo(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="company" className="form-label">
                      Company Name
                    </label>
                    <select
                      className="form-select"
                      id="company"
                      value={company}
                      onChange={(e) => setcompany(e.target.value)}
                      required
                    >
                      <option value="">Select Company Name</option>
                      <option value="Vikram">Vikram private Ltd.</option>
                      <option value="Highlander">Highlander</option>
                      <option value="Rider">Rider</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="site" className="form-label">
                      Site Name
                    </label>
                    <select
                      className="form-select"
                      id="site"
                      value={site}
                      onChange={(e) => setsite(e.target.value)}
                      required
                    >
                      <option value="">Select Site Name</option>
                      <option value="BBSR">Bhubaneswar</option>
                      <option value="ROURKELA">Rourkela</option>
                      <option value="CTC">Cuttack</option>
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
                  className="btn btn-success-1 btn-hover"
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
