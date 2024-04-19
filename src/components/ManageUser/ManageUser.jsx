import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./ManageUser.css";
import { useNavigate } from "react-router-dom";
import { Table, Tag, Button } from "antd";
import Sidebar from "../SideBar/SideBar";
import Header from "../Header/Header";

const { Column } = Table;

function ManageUser() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(true); // State to track whether there are more pages to fetch
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleEdit = (user) => {
    navigate("/update-user", { state: user });
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/users?page=${currentPage}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data.length === 0) {
        setHasMorePages(false); // No more pages to fetch
      } else {
        setHasMorePages(true);
      }
      setUsers(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [currentPage]); // Depend on currentPage only

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="ViewUser">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`create-main-content ${isSidebarExpanded ? "expanded" : ""}`}
      >
        <h2 className="text-center">Maintain User</h2>
        <div className="create-user-container">
          <Table
            dataSource={users}
            pagination={false} // Disable pagination here
            className="user-table mt-3"
          >
            <Column title="User ID" dataIndex="userId" key="userId" />
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column
              title="Middle Name"
              dataIndex="middleName"
              key="middleName"
            />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
            <Column
              title="Role"
              dataIndex="role"
              key="role"
              render={(roles) => (
                <>
                  {roles.map((role) => {
                    let color = "";
                    switch (role) {
                      case "ADMIN":
                        color = "blue";
                        break;
                      case "GATE_USER":
                        color = "green";
                        break;
                      case "WEIGHBRIDGE_OPERATOR":
                        color = "orange";
                        break;
                      case "QUALITY_USER":
                        color = "purple";
                        break;
                      case "MANAGEMENT":
                        color = "cyan";
                        break;
                      default:
                        color = "default";
                    }
                    return (
                      <Tag color={color} key={role}>
                        {role}
                      </Tag>
                    );
                  })}
                </>
              )}
            />
            <Column title="Email" dataIndex="emailId" key="emailId" />
            <Column title="Contact No" dataIndex="contactNo" key="contactNo" />
            <Column title="Company" dataIndex="company" key="company" />
            <Column title="Company Site" dataIndex="site" key="site" />
            <Column title="Status" dataIndex="status" key="status" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Button onClick={() => handleEdit(record)}>
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="action-icon activate-icon"
                  />
                </Button>
              )}
            />
          </Table>
          <div className="d-flex justify-content-center gap-3 m-3 mb-3">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              &lt;
            </Button>
            <span>{currentPage}</span>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!hasMorePages} // Disable the button when there are no more pages
            >
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
