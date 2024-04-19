import Sidebar from "../SideBar/SideBar";
import Header from "../Header/Header";
import { useState } from "react";

function Transporter() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [transporterName, setTransporterName] = useState("");
  const [transporterContactNo, setTransporterContactNo] = useState("");
  const [transporterEmailId, setTransporterEmailId] = useState("");
  const [transporterAddress, setTransporterAddress] = useState("");

  const handleCancel = () => {
    setTransporterName("");
    setTransporterContactNo("");
    setTransporterEmailId("");
    setTransporterAddress("");
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="transporter-register">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`create-main-content ${isSidebarExpanded ? "expanded" : ""}`}
      >
        <h2 className="text-center">Transporter Registration</h2>
        <div className="create-user-container">
          <div
            className="card-body"
            style={{ backgroundColor: "rgb(243,244,247)" }}
          >
            <form>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="transporterName" className="form-label">
                    Transporter Name{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="transporterName"
                    placeholder="Enter Transporter Name"
                    value={transporterName}
                    onChange={(e) => setTransporterName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="transporterContactNo" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="transporterContactNo"
                    placeholder="Enter Contact Number"
                    value={transporterContactNo}
                    onChange={(e) => setTransporterContactNo(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="transporterEmailId" className="form-label">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="transporterEmailId"
                    placeholder="Enter Email ID"
                    value={transporterEmailId}
                    onChange={(e) => setTransporterEmailId(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="transporterAddress" className="form-label">
                    Address{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="transporterAddress"
                    placeholder="Enter Address"
                    value={transporterAddress}
                    onChange={(e) => setTransporterAddress(e.target.value)}
                    required
                  />
                </div>
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
                  // onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transporter;
