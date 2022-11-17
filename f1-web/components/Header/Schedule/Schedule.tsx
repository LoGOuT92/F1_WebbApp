import * as React from "react";
// import "./Schedule.scss";
import NavContent from "../NavPaterns/NavContent";
import { useState, useEffect } from "react";
import { useTourQuery } from "../../../types-and-hooks";

interface IScheduleProps {}

interface ISchedule {
  data: {
    id: number;
    title: string;
    imgURL: string;
    content: string;
    date: string;
  }[];
}
const Schedule: React.FunctionComponent<IScheduleProps> = (props) => {
  const [tour, setData] = useState<ISchedule["data"]>([] as ISchedule["data"]);
  const { data, loading } = useTourQuery();
  useEffect(() => {
    if (!loading && data) {
      setData(data!.tours);
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="schedule-container">
      Schedule
      <svg>
        <path
          fill="currentColor"
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
      <div className="nav-content">
        <NavContent
          name={["Full Schedule", "Race Programs", "2023 Schedule"]}
        />
        <div className="schedule-content-container">
          {tour.map((item) => (
            <div className="schedule-content-card" key={item.id}>
              <div>{item.title}</div>
              <div className="schedule-logo">
                <img src={item.imgURL} alt="scheduleLogo"></img>
              </div>
              <div className="schedule-text">{item.content}</div>
              <div className="schedule-date">
                <p>{item.date}</p>
                <svg>
                  <path
                    fill="currentColor"
                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
