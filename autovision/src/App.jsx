import React, { useState } from "react";
import "./App.css";
import LiveCamera from "./components/LiveCamera";
import DetectionLogs from "./components/DetectionLogs";

function App() {
  const [view, setView] = useState("dashboard");

  const stats = [
    { id: 1, label: "Total Vehicles", value: 12 },
    { id: 2, label: "Cars", value: 6 },
    { id: 3, label: "Motorcycles", value: 4 },
    { id: 4, label: "Trucks", value: 2 },
  ];

  const recentDetections = [
    { id: 1, type: "Car", confidence: "92%" },
    { id: 2, type: "Motorcycle", confidence: "88%" },
    { id: 3, type: "Truck", confidence: "95%" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>VehicleDetector</h2>
        <nav>
          <ul>
            <li onClick={() => setView("dashboard")}>Dashboard</li>
            <li onClick={() => setView("camera")}>Live Camera</li>
            <li onClick={() => setView("logs")}>Detection Logs</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {view === "dashboard" && (
          <>
            <header>
              <h1>Vehicle Detection Dashboard</h1>
            </header>

            <section className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.id} className="stat-card">
                  <h2>{stat.value}</h2>
                  <p>{stat.label}</p>
                </div>
              ))}
            </section>

            <section>
              <h2>Recent Detections</h2>
              <div className="reports-grid">
                {recentDetections.map((vehicle) => (
                  <div key={vehicle.id} className="report-card">
                    <h3>{vehicle.type}</h3>
                    <p>Confidence: {vehicle.confidence}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {view === "camera" && <LiveCamera />}
        {view === "logs" && <DetectionLogs />}
      </main>
    </div>
  );
}

export default App;