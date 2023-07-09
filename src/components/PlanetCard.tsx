type PlanetCardProps = {
  planetName: string;
  planetImage: string;
}

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div className="planet-card">
      <img src={planetImage} alt={`Planeta ${planetName}`} />
      <p>{planetName}</p>
    </div>
  );
}

export default PlanetCard;