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

interface CVProps {
  name: string;
  email: string;
  number: string;
  location: string;
  education: EducationObject[];
  experience: ExperienceObject[];
}

function CV(props: CVProps) {
  return (
    <div className="cv-container">
      <div className="cv-main">
        <div className="cv-content">
          <div className="cv-details">
            <h1>{props.name}</h1>
            <div className="cv-contact">
              <div>{props.email}</div>
              <div>{props.number}</div>
              <div>{props.location}</div>
            </div>
          </div>
          <div className="cv-experience">
            {props.experience.map((exp) => (
              <ExperienceCV {...exp} />
            ))}
          </div>
          <div className="cv-education">
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
export type { CVProps, EducationObject, ExperienceObject };
