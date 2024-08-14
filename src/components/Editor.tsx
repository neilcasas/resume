import General from "./General";
import Experience from "./Experience";
import Education from "./Education";
import "../styles/Editor.scss";

function Editor() {
  return (
    <div className="editor-container">
      <General />
      <div className="exp-container">
        <h1>Experience</h1>
        <Experience />
      </div>
      <div className="educ-container">
        <h1>Education</h1>
        <Education />
      </div>
    </div>
  );
}

export default Editor;
