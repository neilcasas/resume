import { useState } from "react";
import "./styles/index.css";
import { Editor } from "./components/Editor.tsx";
import { CV } from "./components/CV.tsx";

function App() {
  return (
    <main>
      <div className="cv-editor">
        <Editor />
      </div>
      <div className="cv-container">
        <CV />
      </div>
    </main>
  );
}

export default App;
