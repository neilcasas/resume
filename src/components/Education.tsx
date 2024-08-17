import { EducationObject } from "./CV";
import InputComponent from "./InputComponent";

function Education(props: EducationObject) {
  return (
    <div className="card">
      <InputComponent
        title="School"
        id="school"
        type="text"
        placeholder="e.g. Godolkin University"
        value={props.school}
      />
      <InputComponent
        title="Degree"
        id="degree"
        type="text"
        placeholder="e.g. BS Finance"
        value={props.degree}
      />
      <div className="educ-date">
        <InputComponent
          title="Start Date"
          id="educ-start"
          type="date"
          placeholder=""
          value={props.startDate}
        />
        <InputComponent
          title="End Date"
          id="educ-end"
          type="date"
          placeholder=""
          value={props.endDate}
        />
      </div>
      <InputComponent
        title="Location"
        id="educ-location"
        type="text"
        placeholder="e.g. Manila, Philippines"
        value={props.location}
      />
    </div>
  );
}

export default Education;
