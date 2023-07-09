import Title from "./Title";
import PlanetCard from "./PlanetCard";
import planets from "../data/planets";

function SolarSystem() {
  return (
    <div className="planet-container">
      <Title headline="Planetas" />
      <div className="planet-content">
        {
          planets.map(({ name, image }) => (
              <PlanetCard planetName={name} planetImage={image}/>
          ))
        }
      </div>
    </div>
  );
}

export default SolarSystem;