import * as React from "react";
import { useState } from "react";
import TopRankingCard from "./topRankingCard";
import TopRankingListCard from "./topRankingListCard";

interface IRankingProps {
  drivers:
    | {
        __typename?: "Driver" | undefined;
        name: string;
        surName: string;
        color: string;
        id: number;
        points: number;
        team: string;
      }[]
    | undefined;
  teams:
    | {
        __typename?: "Team" | undefined;
        color: string;
        id: number;
        points: number;
        team: string;
        imgURL: string;
        logoURL: string;
      }[]
    | undefined;
}

const Ranking: React.FunctionComponent<IRankingProps> = ({
  drivers,
  teams,
}) => {
  const [mode, setMode] = useState<Boolean>(true);

  return (
    <div className="ranking-container">
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => setMode(true)}
          style={mode ? { borderBottom: "3px solid red" } : {}}
        >
          <h3 style={{ margin: "5px", cursor: "pointer" }}>Drivers</h3>
        </div>
        <div
          onClick={() => setMode(false)}
          style={mode ? {} : { borderBottom: "3px solid red" }}
        >
          <h3 style={{ margin: "5px", cursor: "pointer" }}>Constuctors</h3>
        </div>
      </div>
      <div className="ranking-background">
        <h1 style={{ marginTop: "30px", marginBottom: "9ch", color: "white" }}>
          {mode ? "2022 Driver Standings" : "2022 Constructor Standings"}
        </h1>
      </div>
      <div className="ranking-content-container">
        <div className="ranking-top3">
          {mode ? (
            <TopRankingCard
              position="2"
              name={drivers![1].name}
              SurName={drivers![1].surName}
              imgURL="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/CHALEC01.png.transform/4col/image.png"
              height="120"
              width="25"
              color={drivers![1].color}
              mode={mode}
            />
          ) : (
            <TopRankingCard
              position="2"
              imgURL={teams![1].imgURL}
              logoURL={teams![1].logoURL}
              height="120"
              width="22"
              mode={mode}
            />
          )}
          {mode ? (
            <TopRankingCard
              position="1"
              name={drivers![0].name}
              SurName={drivers![0].surName}
              color={drivers![0].color}
              imgURL="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png"
              height="150"
              width="30"
              mode={mode}
            />
          ) : (
            <TopRankingCard
              position="1"
              imgURL={teams![0].imgURL}
              logoURL={teams![0].logoURL}
              height="150"
              width="32"
              mode={mode}
            />
          )}
          {mode ? (
            <TopRankingCard
              position="3"
              name={drivers![2].name}
              SurName={drivers![2].surName}
              color={drivers![2].color}
              imgURL="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/SERPER01.png.transform/4col/image.png"
              height="120"
              width="25"
              mode={mode}
            />
          ) : (
            <TopRankingCard
              position="2"
              imgURL={teams![2].imgURL}
              logoURL={teams![2].logoURL}
              height="120"
              width="22"
              mode={mode}
            />
          )}
        </div>
        <div style={{ width: "100%" }}>
          <ul className="ranking-list">
            {mode && drivers
              ? drivers
                  ?.slice(0, 10)
                  .map((driver, index) => (
                    <TopRankingListCard
                      key={driver.id}
                      name={driver.name}
                      SurName={driver.surName}
                      team={driver.team}
                      color={driver.color}
                      points={driver.points}
                      position={index}
                      mode={mode}
                    />
                  ))
              : teams?.map((team, index) => (
                  <TopRankingListCard
                    key={team.id}
                    team={team.team}
                    color={team.color}
                    points={team.points}
                    imgURL={team.imgURL}
                    position={index}
                    drivTab={drivers!.filter(
                      (x) => x.team.slice(0, 4) === team.team.slice(0, 4)
                    )}
                    mode={mode}
                  />
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
