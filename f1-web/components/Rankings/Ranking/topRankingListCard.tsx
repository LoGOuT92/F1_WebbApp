import * as React from "react";
import NextLink from "next/link";

interface IListCardProps {
  key: number;
  name?: string;
  SurName?: string;
  points: number;
  team: string;
  color: string;
  mode: Boolean;
  imgURL?: string;
  position: number;
  drivTab?: {
    __typename?: "Driver" | undefined;
    name: string;
    surName: string;
    color: string;
    id: number;
    points: number;
    team: string;
  }[];
}

const ListCard: React.FunctionComponent<IListCardProps> = ({
  name,
  SurName,
  points,
  team,
  color,
  mode,
  imgURL,
  position,
  drivTab,
}) => {
  return (
    <li className="ranking-list-item">
      <NextLink
        className="list-item-div"
        href={`${mode ? "" : '"/team/[team]"'}`}
        as={`${mode ? "" : `/team/${team.trim()}`}`}
      >
        <span
          style={{
            top: "1px",
            textAlign: "right",
            width: "20px",
            fontWeight: "900",
          }}
        >
          {position + 1}
        </span>
        <span
          style={{
            backgroundColor: color,
            width: "4px",
            height: "15px",
            margin: "0 10px",
          }}
        ></span>
        <span style={{ fontSize: "15px", lineHeight: "17px" }}>
          {mode ? (
            <span
              style={{ textTransform: "capitalize", fontWeight: "600" }}
              className="name-span"
            >
              {name}
            </span>
          ) : null}
          <span
            className="ranking-label-name"
            style={{
              fontSize: "17px",
              lineHeight: "17px",
              marginLeft: "5px",
              fontWeight: "900",
            }}
          >
            {mode ? SurName : team}
          </span>
        </span>
        <span
          style={{
            marginLeft: "10px",
            fontSize: "13px",
            letterSpacing: ".5px",
            fontWeight: "400",
            color: "black",
          }}
        >
          {!mode ? (
            <span>
              <span>{drivTab?.[0]?.surName}</span> /{" "}
              <span>{drivTab?.[1]?.surName}</span>
            </span>
          ) : (
            team
          )}
        </span>
        <span
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          {mode ? null : (
            <span style={{ maxWidth: "130px" }} className="carImageLabel">
              <img className="car-image" src={imgURL}></img>
            </span>
          )}
          <span
            style={{
              borderRadius: "10px",
              lineHeight: 1,
              padding: "2px 10px",
              width: "auto",
              backgroundColor: "#ededed",
              fontWeight: "600",
              color: "black",
              height: "max-content",
            }}
          >
            {`${points} PTS`}
          </span>
          <span>
            <svg
              style={{
                width: "20px",
                height: "20px",
              }}
            >
              <path
                fill="currentColor"
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </span>
        </span>
      </NextLink>
    </li>
  );
};

export default ListCard;
