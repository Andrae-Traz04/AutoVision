import React, { useState } from "react";
import "./App.css";
import LiveCamera from "./components/LiveCamera";
import DetectionLogs from "./components/DetectionLogs";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
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

  // ===== Logout =====
  const handleLogout = () => {
    setUser(null);
    setView("dashboard");
  };

  // ===== Show Login First =====
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>AutoVision</h2>
        <nav>
          <ul>
            <li onClick={() => setView("dashboard")}>Dashboard</li>
            <li onClick={() => setView("camera")}>Live Camera</li>
            <li onClick={() => setView("logs")}>Detection Logs</li>
            <li onClick={handleLogout} className="logout-link">
              Logout
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {view === "dashboard" && (
          <>
            <header className="dashboard-header">
              <h1>Vehicle Detection Dashboard</h1>
              <p>Welcome, {user.name}</p>
            </header>

            {/* Stats Section */}
            <section className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.id} className="stat-card">
                  <h2>{stat.value}</h2>
                  <p>{stat.label}</p>
                </div>
              ))}
            </section>

            {/* Recent Detections */}
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