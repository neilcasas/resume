export const Experience = () => {
  return (
    <section className="editor-input" id="experience-input">
      <h1>Experience</h1>
      <section className="input-group">
        <div className="company-input">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="position-input">
          <label htmlFor="position">Position Title</label>
          <input type="text" id="position" name="position" />
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
        <div className="description-input">
          <label htmlFor="description">Description</label>
          <textarea></textarea>
        </div>
      </section>
    </section>
  );
};
