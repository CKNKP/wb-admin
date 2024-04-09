import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ManageUser.css";
import {
  faHome,
  faUserFriends,
  faBars,
  faPencilAlt,
  faUserCheck,
  faUserTimes,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ManageUser() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      middleName: "Doe",
      lastName: "Doe",
      role: "Admin",
      email: "john.doe@example.com",
      contact: "123456789",
      company: "Company A",
      site: "Site 1",
      status: "Active",
    },
  ]);
  const [editingUser, setEditingUser] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = () => {
    setUsers(
      users.map((u) =>
        u.id === editingUser.id
          ? {
              ...u,
              firstName: editingUser.firstName,
              middleName: editingUser.middleName,
              lastName: editingUser.lastName,
              role: editingUser.role,
              email: editingUser.email,
              contact: editingUser.contact,
              company: editingUser.company,
              site: editingUser.site,
            }
          : u
      )
    );
    setEditingUser(null);
  };

  const handleInputChange = (e) => {
    setEditingUser({
      ...editingUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleActivate = (user) => {
    setUsers(
      users.map((u) => (u.id === user.id ? { ...u, status: "Active" } : u))
    );
  };

  const handleDeactivate = (user) => {
    setUsers(
      users.map((u) => (u.id === user.id ? { ...u, status: "Inactive" } : u))
    );
  };

  return (
    <div className="manage-user">
      <div className="report-header d-flex justify-content-between align-items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="daily_report_icon mt-2 me-3 sidebar-toggle-btn"
          onClick={toggleSidebar}
        />
        <h2 className="report-header-title text-center mt-3 d-flex align-content-center">
          MANAGE USER
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
            <span className="sidebar-item-text">Users</span>
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
                Manage User
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/view-users">
                View Users
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`create-main-content ${isSidebarExpanded ? "expanded" : ""}`}
      >
        <div className="create-user-container">
          <div className="table-responsive-xl table-responsive-md table-responsive-lg table-responsive-sm table-responsive-xxl mt-3">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">User ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Middle Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Email id</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Company</th>
                  <th scope="col">Site</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          name="firstName"
                          value={editingUser.firstName}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.firstName
                      )}
                    </td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          name="middleName"
                          value={editingUser.middleName}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.middleName
                      )}
                    </td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          name="lastName"
                          value={editingUser.lastName}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.lastName
                      )}
                    </td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          name="role"
                          value={editingUser.role}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.role
                      )}
                    </td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="email"
                          name="email"
                          value={editingUser.email}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          name="contact"
                          value={editingUser.contact}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.contact
                      )}
                    </td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          name="company"
                          value={editingUser.company}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.company
                      )}
                    </td>
                    <td>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          name="site"
                          value={editingUser.site}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.site
                      )}
                    </td>
                    <td>{user.status}</td>
                    <td
                      className="action-column d-flex"
                      style={{ paddingBottom: "30px" }}
                    >
                      <button className="me-5" onClick={() => handleEdit(user)}>
                        <FontAwesomeIcon
                          icon={faPencilAlt}
                          className="action-icon edit-icon"
                        />
                      </button>
                      <button
                        className="me-5"
                        onClick={() => handleActivate(user)}
                      >
                        <FontAwesomeIcon
                          icon={faUserCheck}
                          className="action-icon activate-icon"
                        />
                      </button>
                      <button
                        className="me-5"
                        onClick={() => handleDeactivate(user)}
                      >
                        <FontAwesomeIcon
                          icon={faUserTimes}
                          className="action-icon deactivate-icon"
                        />
                      </button>
                      {editingUser && editingUser.id === user.id && (
                        <button onClick={handleSave}>
                          <FontAwesomeIcon
                            icon={faSave}
                            className="action-icon save-icon"
                          />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
  );
}

export default ManageUser;
