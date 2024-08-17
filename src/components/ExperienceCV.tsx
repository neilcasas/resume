import { ExperienceObject } from "./CV";
import "../styles/ExperienceCV.scss";
function ExperienceCV(props: ExperienceObject) {
  return (
    <div className="exp-component">
      <div className="exp-left">
        <div className="exp-dates">
          {props.startDate} - {props.endDate}
        </div>
        <div className="exp-location">{props.location}</div>
      </div>
      <div className="exp-right">
        <div className="exp-company">{props.company}</div>
        <div className="exp-position">{props.position}</div>
        <div className="exp-desc">{props.description}</div>
      </div>
    </div>
  );
}

export default ExperienceCV;
