import InputComponent from "./InputComponent";

function Education() {
  return (
    <div className="card">
      <InputComponent
        title="School"
        id="school"
        type="text"
        placeholder="e.g. Godolkin University"
      />
      <InputComponent
        title="Degree"
        id="degree"
        type="text"
        placeholder="e.g. BS Finance"
      />
      <div className="educ-date">
        <InputComponent
          title="Start Date"
          id="educ-start"
          type="date"
          placeholder=""
        />
        <InputComponent
          title="End Date"
          id="educ-end"
          type="date"
          placeholder=""
        />
      </div>
      <InputComponent
        title="Location"
        id="educ-location"
        type="text"
        placeholder="e.g. Manila, Philippines"
      />
    </div>
  );
}

export default Education;
