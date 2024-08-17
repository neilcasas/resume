import "../styles/CV.scss";
import EducationCV from "./EducationCV";
import ExperienceCV from "./ExperienceCV";

interface EducationObject {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

interface ExperienceObject {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}
interface GeneralObject {
  name: string;
  email: string;
  number: string;
  location: string;
}

interface CVProps {
  general: GeneralObject;
  education: EducationObject[];
  experience: ExperienceObject[];
}

function CV(props: CVProps) {
  return (
    <div className="cv-container">
      <div className="cv-main">
        <div className="cv-content">
          <div className="cv-details">
            <h1>{props.general.name}</h1>
            <div className="cv-contact">
              <div>{props.general.email}</div>
              <div>{props.general.number}</div>
              <div>{props.general.location}</div>
            </div>
          </div>
          <div className="cv-experience">
            <div className="cv-experience-title">Experience</div>
            {props.experience.map((exp) => (
              <ExperienceCV {...exp} />
            ))}
          </div>
          <div className="cv-education">
            <div className="cv-education-title">Education</div>
            {props.education.map((educ) => (
              <EducationCV {...educ} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { CV };
export type { CVProps, EducationObject, ExperienceObject, GeneralObject };
