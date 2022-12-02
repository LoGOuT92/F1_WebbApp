import * as React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import {
  useSingleDriverQuery,
  useSingleTeamQuery,
} from "../../types-and-hooks";

interface ITeamProps {}

const Team: React.FunctionComponent<ITeamProps> = (props) => {
  const router = useRouter();
  const slug =
    typeof router.query.team === "string"
      ? router.query.team.replace("%", " ")
      : "";
  const { data, loading, error } = useSingleTeamQuery({
    variables: { team: slug },
  });
  const driver = useSingleDriverQuery({ variables: { team: slug } });

  if (loading || driver.loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data?.singleTeam) {
    return (
      <Layout>
        <h1>could not fund team</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="team-container">
        <h1>{data?.singleTeam?.team}</h1>
        <div className="row">
          <div className="information-team">
            <div style={{ width: "50%" }}>
              <img src={data?.singleTeam?.logoURL}></img>
            </div>
            <label className="team-information">
              <span style={{ fontWeight: 900 }}>Full Team Name</span>
              <span>{data?.singleTeam?.team}</span>
            </label>
            <label className="team-information">
              <span style={{ fontWeight: 900 }}>Base</span>
              <span>Milton Keynes, United Kingdom</span>
            </label>
            <label className="team-information">
              <span style={{ fontWeight: 900 }}>Team Chief</span>
              <span>Christian Horner</span>
            </label>
            <label className="team-information">
              <span style={{ fontWeight: 900 }}>Technical Chief</span>
              <span>Pierre Waché</span>
            </label>
            <label className="team-information">
              <span style={{ fontWeight: 900 }}>Chassis</span>
              <span> RB18</span>
            </label>
            <label className="team-information">
              <span style={{ fontWeight: 900 }}>Power Unit</span>
              <span> Red Bull Powertrainsl</span>
            </label>
            <label className="team-information">
              <span style={{ fontWeight: 900 }}>First Team Entry</span>
              <span> 1997l</span>
            </label>
            <label className="team-information">
              <span style={{ fontWeight: 900 }}>World Championships</span>
              <span>5</span>
            </label>
            <label className="team-information">
              <span style={{ fontWeight: 900 }}>Highest Race Finish</span>
              <span>1 (x92)</span>
            </label>
          </div>
          <div className="drivers-picture-container">
            {driver.data?.singleDriver.map((driver) => (
              <div key={driver.id} className="picture">
                <div className="KKK">
                  <img src={driver.pictureURL}></img>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <h1>{driver.id}</h1>
                  <label>
                    <h4>
                      {driver.name} {driver.surName}
                    </h4>
                  </label>
                  <label>
                    <h5>{data.singleTeam?.team}</h5>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
