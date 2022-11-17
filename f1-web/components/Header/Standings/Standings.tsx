import * as React from "react";
import NavContent from "../NavPaterns/NavContent";
// import "./Standings.scss";

interface IStandingsProps {}

const Standings: React.FunctionComponent<IStandingsProps> = (props) => {
  return (
    <div className="standings-container">
      Standings
      <svg>
        <path
          fill="currentColor"
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
      <div className="nav-content">
        <NavContent
          name={[
            "2022 Season",
            "Driver Standings",
            "Constructor Standings",
            "Archive 1950-2022",
            "F1 Awards",
          ]}
        />
      </div>
    </div>
  );
};

export default Standings;
