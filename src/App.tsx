import { CV, CVProps } from "./components/CV";
import Editor from "./components/Editor";
import "./styles/App.scss";

function App() {
  const cvProps: CVProps = {
    name: "Michael Jordan",
    email: "michaeljordan@gmail.com",
    number: "+63 927 697 1646",
    location: "Los Angeles, California",
    education: [
      {
        school: "University of North Carolina",
        degree: "Bachelor of Science in Geography",
        startDate: "2001",
        endDate: "2005",
        location: "Chapel Hill, North Carolina",
      },
    ],
    experience: [
      {
        company: "Chicago Bulls",
        position: "Shooting Guard",
        startDate: "2005",
        endDate: "2010",
        location: "Chicago, Illinois",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sed nunc ultricies malesuada. Donec auctor, nisl nec ullamcorper vol",
      },
    ],
  };

  return (
    <div className="main">
      <Editor />
      <CV {...cvProps} />
    </div>
  );
}

export default App;
