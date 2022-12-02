import * as React from "react";
import NavContent from "../NavPaterns/NavContent";
// import "./Drivers.scss";
import { useState, useEffect } from "react";
import { useDriversQuery } from "../../../types-and-hooks";

interface IDriversProps {}

interface Idata {
  data: {
    id: number;
    name: string;
    surName: string;
    team: string;
    color: string;
  }[];
}
const Drivers: React.FunctionComponent<IDriversProps> = (props) => {
  const [driver, setData] = useState<Idata["data"]>([] as Idata["data"]);
  const { data, loading } = useDriversQuery();
  useEffect(() => {
    if (!loading && data) {
      setData(data.drivers);
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="drivers-container">
      Drivers
      <svg>
        <path
          fill="currentColor"
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
      <div className="nav-content">
        <NavContent name={["All Drivers", "Hall of Fame"]} />
        <div className="drivers-list-container">
          <ul>
            {driver.map((item) => (
              <li key={item.id}>
                <div className="driver-card" style={{ color: item.color }}>
                  <span>{item.name}</span>
                  <span style={{ textTransform: `uppercase`, fontWeight: 600 }}>
                    {item.surName}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
