import React from "react";
import { Link } from "react-router-dom";
import styles from "./PastContest.module.css";

const PastContests = (props) => {
  const renderList = props.contestList.map((contest) => (
    <li key={contest.id}>
      {contest.contestname}
      <Link to={`/question/${contest.id}`} state={{ contest }}>
        Solutions
      </Link>
    </li>
  ));

  return (
    <React.Fragment>
      <div className={styles.pastContestMain}>
        <h2>Past Contests</h2>
        <ul>{renderList}</ul>
      </div>
    </React.Fragment>
  );
};

export default PastContests;
