import Sidebar from "../SideBar/SideBar";
import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js/auto";

function HomePage2() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const homeMainContentRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    Chart.register(ArcElement);

    const resizeObserver = new ResizeObserver(() => {
      if (
        homeMainContentRef.current &&
        chartRef.current?.chartInstance &&
        chartRef2.current?.chartInstance
      ) {
        chartRef.current.chartInstance.resize();
        chartRef2.current.chartInstance.resize();
      }
    });

    if (homeMainContentRef.current) {
      resizeObserver.observe(homeMainContentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />

      <Sidebar
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />

      <div
        ref={homeMainContentRef}
        className={`create-main-content ${isSidebarExpanded ? "expanded" : ""}`}
      >
        <div className="card p-3 mb-3 home home-card mt-3">
          <label className="fw-bold home-label">Company:</label>
          <select className="form-select w-100">
            <option value="Vikram Pvt Ltd">Vikram Pvt Ltd</option>
            <option value="Highlander">Highlander</option>
            <option value="Rider">Rider</option>
          </select>
          <label className="fw-bold mt-3 home-label">Site:</label>
          <select className="form-select w-100">
            <option>Bhubaneswar</option>
            <option value="Roulkela">Roulkela</option>
            <option value="Aska">Aska</option>
            <option value="Puri">Puri</option>
          </select>
        </div>
        <div className="card-group d-flex">
          <div
            className="card p-3 mb-3 home home-chart-1 mt-3"
            style={{ width: "300px", height: "300px" }}
          >
            <Pie
              className="chart-1"
              data={{
                labels: ["Inbound", "Outbound"],
                datasets: [
                  {
                    data: [12, 9],
                    backgroundColor: ["#4CAF50", "#FF6347"],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                      font: {
                        size: 14,
                        family: "Arial",
                      },
                    },
                  },
                },
              }}
              ref={chartRef}
            />
            <span className="text-center mt-4 chart-name-1">
              Quality Check of Inbound Trucks
            </span>
          </div>
          <div
            className="card p-3 mb-3 home home-chart-2 mt-3 mx-5"
            style={{ width: "300px", height: "300px" }}
          >
            <Pie
              className="chart-2"
              data={{
                labels: ["Inbound", "Outbound"],
                datasets: [
                  {
                    data: [12, 15],
                    backgroundColor: ["#4CAF50", "#FF6347"],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                      font: {
                        size: 14,
                        family: "Arial",
                      },
                    },
                  },
                },
              }}
              ref={chartRef2}
            />
            <span className="text-center mt-4 chart-name-2">
              Quality Check of Outbound Trucks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage2;
