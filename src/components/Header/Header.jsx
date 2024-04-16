import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ toggleSidebar }) {
  return (
    <div className="report-header d-flex justify-content-between align-items-center">
      <FontAwesomeIcon
        icon={faBars}
        className="daily_report_icon mt-2 me-3 sidebar-toggle-btn"
        onClick={toggleSidebar}
      />
      <h2 className="report-header-title text-center mt-3">
        WEIGHBRIDGE MANAGEMENT SYSTEM
      </h2>
      <Link to="/home1">
        <FontAwesomeIcon
          icon={faHome}
          className="daily_report_icon mt-2 me-2 home-toggle-btn"
        />
      </Link>
    </div>
  );
}

export default Header;
