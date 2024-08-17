import General from "./General";
import Experience from "./Experience";
import Education from "./Education";
import { CVProps } from "./CV";
import "../styles/Editor.scss";

// Interface containing the update function for each part of the CV
interface EditorProps extends CVProps {
  updateGeneral: (general: CVProps["general"]) => void;
  updateEducation: (education: CVProps["education"]) => void;
  updateExperience: (experience: CVProps["experience"]) => void;
}

function Editor(props: EditorProps) {
  return (
    <div className="editor-container">
      <General {...props.general} />
      <div className="exp-container">
        <h1>Experience</h1>
        {props.experience.map((exp, index) => (
          <Experience key={index} {...exp} />
        ))}
      </div>
      <div className="educ-container">
        <h1>Education</h1>
        {props.education.map((educ, index) => (
          <Education key={index} {...educ} />
        ))}
      </div>
    </div>
  );
}

export default Editor;
