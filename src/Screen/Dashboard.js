import React from "react";
import styles from "./Dashboard.module.css";
import Contests from "./Contests";
import NavBar from "./NavBar";
import Recent from "./Recent";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <NavBar />
      <Recent />
      <Contests />
    </div>
  );
}

export default Dashboard;
