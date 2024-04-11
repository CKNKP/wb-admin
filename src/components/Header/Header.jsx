import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header({ toggleSidebar }) {
  return (
    <div className="report-header d-flex justify-content-between align-items-center">
      <FontAwesomeIcon
        icon={faBars}
        className="daily_report_icon mt-2 me-3 sidebar-toggle-btn"
        onClick={toggleSidebar}
      />
      <h2 className="report-header-title text-center mt-3 d-flex align-content-center">
        WEIGHBRIDGE MANAGEMENT SYSTEM
      </h2>
      <FontAwesomeIcon
        icon={faHome}
        className="daily_report_icon mt-2 me-2 home-toggle-btn"
      />
    </div>
  );
}

export default Header;
