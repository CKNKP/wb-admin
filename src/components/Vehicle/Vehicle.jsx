import Sidebar from "../SideBar/SideBar";
import Header from "../Header/Header";
import { useState } from "react";

function Vehicle() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [vehicleNo, setVehicleNo] = useState("");
  const [transporter, setTransporter] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleManufacturer, setVehicleManufacturer] = useState("");
  const [wheelsNo, setWheelsNo] = useState("");
  const [tareWeight, setTareWeight] = useState("");
  const [loadCapacity, setLoadCapacity] = useState("");
  const [fitnessUpto, setFitnessUpto] = useState("");

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="vehicle-register">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`create-main-content ${isSidebarExpanded ? "expanded" : ""}`}
      >
        <h2 className="text-center">Vehicle Registration</h2>
        <div className="create-user-container">
          <div
            className="card-body"
            style={{ backgroundColor: "rgb(243,244,247)" }}
          >
            <form>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="vehicleNo" className="form-label">
                    Vehicle Number{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="vehicleNo"
                    placeholder="Enter Vehicle Number"
                    value={vehicleNo}
                    onChange={(e) => setVehicleNo(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="transporter" className="form-label">
                    Transporter{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    id="transporter"
                    value={transporter}
                    onChange={(e) => setTransporter(e.target.value)}
                    required
                  >
                    <option value="">Select Transporter</option>
                    <option value="Transporter 1">Transporter 1</option>
                    <option value="Transporter 2">Transporter 2</option>
                    <option value="Transporter 3">Transporter 3</option>
                  </select>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="vehicleType" className="form-label">
                    Vehicle Type{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <select
                    className="form-select"
                    id="vehicleType"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    required
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="Car">Car</option>
                    <option value="Truck">Truck</option>
                    <option value="Motorcycle">Motorcycle</option>
                    <option value="Bus">Bus</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="vehicleManufacturer" className="form-label">
                    Vehicle Manufacturer{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="vehicleManufacturer"
                    placeholder="Enter Vehicle Manufacturer"
                    value={vehicleManufacturer}
                    onChange={(e) => setVehicleManufacturer(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="wheelsNo" className="form-label">
                    Number of Wheels{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="wheelsNo"
                    placeholder="Enter Number of Wheels"
                    value={wheelsNo}
                    onChange={(e) => setWheelsNo(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="tareWeight" className="form-label">
                    Tare Weight (kg){" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="tareWeight"
                    placeholder="Enter Tare Weight"
                    value={tareWeight}
                    onChange={(e) => setTareWeight(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="loadCapacity" className="form-label">
                    Load Capacity (kg){" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="loadCapacity"
                    placeholder="Enter Load Capacity"
                    value={loadCapacity}
                    onChange={(e) => setLoadCapacity(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="fitnessUpto" className="form-label">
                    Fitness Upto{" "}
                    <span style={{ color: "red", fontWeight: "bold" }}>*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="fitnessUpto"
                    value={fitnessUpto}
                    onChange={(e) => setFitnessUpto(e.target.value)}
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
