import React from "react";
import "./Dashboard.css"

const Dashboard = () => {

  const routeLogin=()=>{
    navigate("/login");
  }
  return (
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <div className="dashboard-top">
            <div className="dashboard-logo-title">
              <div className="dashboard-logo"></div>
              <div className="dashboard-title">FaceTrack</div>
            </div>

            <div className="dashboard-dropdown">drop</div>
          </div>
          <div className="dashboard-line"></div>
          <div className="dashboard-center">
            <div className="dashboard-menu">
              <div className="dashboard-icon">icon</div>
              <div className="dashboard-menu-data">Home</div>
            </div>
            <div className="dashboard-menu">
              <div className="dashboard-icon">icon</div>
              <div className="dashboard-menu-data">setting</div>
            </div>
            <div className="dashboard-menu">
              <div className="dashboard-icon">icon</div>
              <div className="dashboard-menu-data">Attendance Log</div>
            </div>
            <div className="dashboard-menu">
              <div className="dashboard-icon">icon</div>
              <div className="dashboard-menu-data">View Courses</div>
            </div>
          </div>
        </div>
        <div className="dashboard-bottom">
          <div className="dashboard-profile"></div>
          <button className="dashboard-logout"><a href="./Login">LogIn</a></button>
        </div>
      </div>
  );
};

export default Dashboard;
