import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  Typography,
  Popover,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./Header.css";

function Header({ toggleSidebar }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userName = sessionStorage.getItem("userName");
  const roles = JSON.parse(sessionStorage.getItem("roles"));
  const userId = sessionStorage.getItem("userId");

  const open = Boolean(anchorEl);

  return (
    <div className="report-header d-flex justify-content-between align-items-center">
      <FontAwesomeIcon
        icon={faBars}
        className="mt-2 sidebar-toggle-btn mx-3"
        onClick={toggleSidebar}
        style={{ fontSize: "1.3rem" }}
      />
      <h2 className="report-header-title text-center mt-3">
        WEIGHBRIDGE MANAGEMENT SYSTEM
      </h2>
      <div>
        <FontAwesomeIcon
          icon={faUser}
          className="daily_report_icon mt-2 home-toggle-btn"
          onClick={handleUserProfileClick}
        />
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <List>
            <ListItem>
              <ListItemText primary={`User Name: ${userName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`User ID: ${userId}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Roles: ${roles.join(", ")}`} />
            </ListItem>
          </List>
        </Popover>
      </div>
    </div>
  );
}

export default Header;
