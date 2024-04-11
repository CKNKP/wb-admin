import Sidebar from "../SideBar/SideBar";
import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js/auto";

function HomePage5() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const homeMainContentRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    Chart.register(ArcElement, CategoryScale, LinearScale, BarElement);

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
        <div className="card p-3 mb-3 home home-card mt-3 ">
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
        <div className="card-group">
          <div className="card p-3 mb-3 home home-chart-1 mt-3">
            <Bar
              className="chart-1"
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    label: "Coal",
                    data: [12, 19, 3, 5, 2, 3, 45],
                    backgroundColor: "rgb(27,32,38)",
                  },
                  {
                    label: "Iron Ore",
                    data: [12, 9, 3, 5, 2, 3, 5],
                    backgroundColor: "rgb(212,208,199)",
                  },
                  {
                    label: "Dolomite",
                    data: [12, 19, 3, 5, 2, 3, 45],
                    backgroundColor: "rgb(169,169,167)",
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: function (value) {
                        return value + " tonnes";
                      },
                    },
                  },
                },
              }}
              ref={chartRef}
            />
            <span className="text-center mt-2 chart-name-1">
              Number of materials received
            </span>
          </div>
          <div className="card p-3 mb-3 home home-chart-2 mt-3 mx-5">
            <Bar
              className="chart-2"
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    label: "Inbound",
                    data: [12, 19, 3, 5, 2, 3, 45],
                    backgroundColor: "rgb(123,222,123)",
                  },
                  {
                    label: "Outbound",
                    data: [12, 9, 3, 5, 2, 3, 5],
                    backgroundColor: "rgb(255,110,102)",
                  },
                ],
              }}
              ref={chartRef2}
            />
            <span className="text-center mt-2 chart-name-2">
              Number of Trucks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage5;
