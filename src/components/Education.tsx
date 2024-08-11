export const Education = () => {
  return (
    <section className="editor-input" id="education-input">
      <h1>Education</h1>
      <section className="input-group">
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
        <div className="location-input">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />
        </div>
      </section>
    </section>
  );
};
