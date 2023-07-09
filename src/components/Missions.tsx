import Title from "./Title";
import MissionCard from "./MissionCard";

import missions from "../data/missions";

function Missions() {
  return (
    <div className="mission-container">
      <Title headline="Missões" />
      <div className="mission-content">
        {
          missions.map(({ name, country, destination, year }) => (

            <MissionCard name={name} country={country} destination={destination} year={year} />
          ))
        }
      </div>
    </div>
  )
}

export default Missions;