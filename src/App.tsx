import CV from "./components/CV";
import Editor from "./components/Editor";
import "./styles/App.scss";

function App() {
  return (
    <div className="main">
      <Editor />
      <CV />
    </div>
  );
}

export default App;
