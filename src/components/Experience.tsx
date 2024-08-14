import InputComponent from "./InputComponent";

function Experience() {
  return (
    <div className="card">
      <InputComponent
        title="Company Name"
        id="company"
        type="text"
        placeholder="e.g. Umbrella Inc."
      />
      <InputComponent
        title="Position Title"
        id="position"
        type="text"
        placeholder="e.g. Software Engineer"
      />
      <div className="exp-date">
        <InputComponent
          title="Start Date"
          id="exp-start"
          type="date"
          placeholder=""
        />
        <InputComponent
          title="End Date"
          id="exp-end"
          type="date"
          placeholder=""
        />
      </div>
      <InputComponent
        title="Location"
        id="exp-location"
        type="text"
        placeholder="e.g. Manila, Philippines"
      />
      <textarea className="exp-description"></textarea>
    </div>
  );
}

export default Experience;
