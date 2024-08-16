import { CV, CVProps } from "./components/CV";
import Editor from "./components/Editor";
import "./styles/App.scss";

function App() {
  const cvProps: CVProps = {
    name: "Michael Jordan",
    email: "michaeljordan@gmail.com",
    number: "+63 927 697 1646",
    location: "Los Angeles, California",
    education: [],
    experience: [],
  };

  return (
    <div className="main">
      <Editor />
      <CV {...cvProps} />
    </div>
  );
}

export default App;
