export const Education = () => {
  return (
    <div className="editor-input">
      <h1>Education</h1>
      <div className="input-group">
        <div className="degree-input">
          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree" name="degree" />
        </div>
        <div className="institution-input">
          <label htmlFor="institution">Institution</label>
          <input type="text" id="institution" name="institution" />
        </div>
        <div className="start-input">
          <label htmlFor="start">Start Date</label>
          <input type="date" id="start" name="start" />
        </div>
        <div className="end-input">
          <label htmlFor="end">End Date</label>
          <input type="date" id="end" name="end" />
        </div>
      </div>
    </div>
  );
};
