import "../styles/CV.scss";

interface EducationObject {
  school: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  location: string;
}

interface ExperienceObject {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  location: string;
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
          <div className="cv-education">
            <div>University</div>
          </div>
          <div className="cv-experience">
            <div>Software Engineer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CV };
export type { CVProps };
