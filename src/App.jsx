import { useState } from "react";
import "./styles/index.css";
import { Editor } from "./components/Editor";

function App() {
  return (
    <>
      <main>
        <div className="control">
          <Editor />
        </div>
        <div className="cv-container"></div>
      </main>
    </>
  );
}

export default App;
