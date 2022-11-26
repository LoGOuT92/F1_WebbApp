import * as React from "react";

import {
  useDriversQuery,
  useRankingDriversQuery,
  useRankingTeamsQuery,
} from "../../types-and-hooks";
import Ranking from "./Ranking/Ranking";

interface IRankingsProps {}

const Rankings: React.FunctionComponent<IRankingsProps> = (props) => {
  const { data, loading } = useRankingDriversQuery();
  const teams = useRankingTeamsQuery();

  if (loading || teams.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Ranking drivers={data?.rankingDrivers} teams={teams.data?.rankingTeams} />
  );
};

export default Rankings;
