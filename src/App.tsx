import { useState } from "react";
import { CV, CVProps } from "./components/CV";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import "./styles/App.scss";

function App() {
  const initialCVProps: CVProps = {
    general: {
      name: "Michael Jordan",
      email: "michaeljordan@gmail.com",
      number: "+63 927 697 1646",
      location: "Los Angeles, California",
    },
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

  const [cvProps, setCVProps] = useState(initialCVProps);

  // Create separate change functions for different sections of the CV
  const updateGeneral = (general: CVProps["general"]) => {
    setCVProps((prevProps) => ({ ...prevProps, general }));
  };

  const updateEducation = (education: CVProps["education"]) => {
    setCVProps((prevProps) => ({ ...prevProps, education }));
  };

  const updateExperience = (experience: CVProps["experience"]) => {
    setCVProps((prevProps) => ({ ...prevProps, experience }));
  };

  // Pass update functions to Editor component
  return (
    <>
      <Navbar />
      <div className="main">
        <Editor
          {...cvProps}
          updateGeneral={updateGeneral}
          updateEducation={updateEducation}
          updateExperience={updateExperience}
        />
        <CV {...cvProps} />
      </div>
    </>
  );
}

export default App;
