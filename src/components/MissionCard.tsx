type MissionCardProps = {
  name: string;
  year: string;
  country: string;
  destination: string;
}

import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlagIcon from '@mui/icons-material/Flag';

function MissionCard({ name, year, country, destination }: MissionCardProps) {
  return (
    <div className="mission-card">
      <strong>{name}</strong>
      <div className="mission-card-info">
        <div className="icons-info">
          <CalendarMonthIcon />
          <p>{year}</p>
        </div>
        <div className="icons-info">
          <PlaceIcon />
          <p>{country}</p>
        </div>
        <div className="icons-info">
          <FlagIcon />
          <p>{destination}</p>
        </div>
      </div>
    </div>
  )
}

export default MissionCard;