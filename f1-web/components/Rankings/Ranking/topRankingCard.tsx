import * as React from "react";

interface ITopRankingProps {
  imgURL: string;
  position: string;
  name?: string;
  SurName?: string;
  height: string;
  width: string;
  mode?: Boolean;
  logoURL?: string;
  color?: string;
}

const TopRanking: React.FunctionComponent<ITopRankingProps> = ({
  imgURL,
  position,
  name,
  SurName,
  height,
  width,
  mode,
  logoURL,
  color,
}) => {
  return (
    <div className="top3" style={{ width: `${width}%` }}>
      {mode ? (
        <div style={{ height: `${height}px`, position: "relative" }}>
          <h1 style={{ marginLeft: "10px" }}>{position}</h1>
          <img className="driver-picture-ranking" src={imgURL}></img>
          <div className="border-top" style={{ backgroundColor: color }}></div>
        </div>
      ) : (
        <div
          style={{
            height: `${height}px`,
            position: "relative",
          }}
        >
          <h1 style={{ marginLeft: "10px", zIndex: "999" }}>{position}</h1>
          <img
            style={{
              borderTopRightRadius: "15px",
              borderTopLeftRadius: "15px",
            }}
            className="driver-picture-ranking"
            src={logoURL}
          ></img>
        </div>
      )}

      <div
        className="top-info"
        style={mode ? {} : { padding: 0, backgroundColor: "white" }}
      >
        {mode ? (
          <>
            <span
              style={{
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: "2vh",
              }}
            >
              {name}
            </span>
            <span
              style={{
                fontWeight: 900,
                fontSize: "20px",
                lineHeight: "2vh",
              }}
            >
              {SurName}
            </span>
          </>
        ) : (
          <img src={imgURL}></img>
        )}
      </div>
    </div>
  );
};

export default TopRanking;
