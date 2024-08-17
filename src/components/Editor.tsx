import General from "./General";
import Experience from "./Experience";
import Education from "./Education";
import { CVProps } from "./CV";
import "../styles/Editor.scss";

function Editor(props: CVProps) {
  return (
    <div className="editor-container">
      <General {...props.general} />
      <div className="exp-container">
        <h1>Experience</h1>
        {props.experience.map((exp) => (
          <Experience {...exp} />
        ))}
      </div>
      <div className="educ-container">
        <h1>Education</h1>
        {props.education.map((educ) => (
          <Education {...educ} />
        ))}
      </div>
    </div>
  );
}

export default Editor;
