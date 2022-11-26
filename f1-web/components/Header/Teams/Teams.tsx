import * as React from "react";
import NavContent from "../NavPaterns/NavContent";
// import "./Teams.scss";
import { useState, useEffect } from "react";
import { Team, useTeamsQuery } from "../../../types-and-hooks";

interface ITeamsProps {}
interface team {
  id: number;
  team: string;
  color: string;
  imgURL: string;
}
interface Idata {
  data: team[];
}

const Teams: React.FunctionComponent<ITeamsProps> = (props) => {
  const [teams, setData] = useState<Idata["data"]>([]);
  const { data, loading } = useTeamsQuery();

  useEffect(() => {
    if (!loading && data) {
      setData(data!.team);
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="teams-container">
      Teams
      <svg>
        <path
          fill="currentColor"
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
      <div className="nav-content">
        <NavContent name={["All Teams"]} />
        <div className="teams-list-container">
          <ul>
            {teams.map((item: team) => (
              <li key={item.id}>
                <div className="test" style={{ color: item.color }}>
                  <span
                    className="team"
                    style={{ color: `white`, fontWeight: 600 }}
                  >
                    {item.team}
                  </span>
                  <span className="car-img">
                    <picture>
                      <img src={item.imgURL} alt="f1-bolid"></img>
                    </picture>
                  </span>
                  <i>
                    <svg style={{ color: `white` }}>
                      <path
                        fill="currentColor"
                        d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                      />
                    </svg>
                  </i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teams;
