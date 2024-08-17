import { EducationObject } from "./CV";
import "../styles/EducationCV.scss";

function EducationCV(props: EducationObject) {
  return (
    <div className="educ-component">
      <div className="educ-left">
        <div className="educ-dates">
          {props.startDate} - {props.endDate}
        </div>
        <div className="educ-location">{props.location}</div>
      </div>
      <div className="educ-right">
        <div className="educ-school">{props.school}</div>
        <div className="educ-degree">{props.degree}</div>
      </div>
    </div>
  );
}

export default EducationCV;
