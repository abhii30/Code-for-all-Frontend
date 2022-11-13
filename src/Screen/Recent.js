import React from "react";
import Advertisement from "./Advertisement";
import styles from "./Recent.module.css";
function Recent() {
  return (
    <div className={styles.mainDiv}>
      <div class="row">
        <div className="col-6">
          <div className={styles.recentContents}>
            <img
              src="https://i.pinimg.com/originals/4d/15/5c/4d155c6f7e5b1c6942059703c403ecaf.jpg"
              alt="contest"
            />
          </div>
        </div>
        <div className="col-6">
          <Advertisement />
        </div>
      </div>
    </div>
  );
}

export default Recent;
