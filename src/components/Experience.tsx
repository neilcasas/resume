import { ExperienceObject } from "./CV";
import InputComponent from "./InputComponent";

function Experience(props: ExperienceObject) {
  return (
    <div className="card">
      <InputComponent
        title="Company Name"
        id="company"
        type="text"
        placeholder="e.g. Umbrella Inc."
        value={props.company}
      />
      <InputComponent
        title="Position Title"
        id="position"
        type="text"
        placeholder="e.g. Software Engineer"
        value={props.position}
      />
      <div className="exp-date">
        <InputComponent
          title="Start Date"
          id="exp-start"
          type="text"
          placeholder=""
          value={props.startDate}
        />
        <InputComponent
          title="End Date"
          id="exp-end"
          type="text"
          placeholder=""
          value={props.endDate}
        />
      </div>
      <InputComponent
        title="Location"
        id="exp-location"
        type="text"
        placeholder="e.g. Manila, Philippines"
        value={props.location}
      />
      <textarea
        className="exp-description"
        value={props.description}
      ></textarea>
    </div>
  );
}

export default Experience;
