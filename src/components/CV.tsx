export const CV = () => {
  return (
    <div className="cv">
      <div className="cv-content">
        <header>
          <h1>Full Name</h1>
          <p>Email</p>
          <p>Phone</p>
          <p>Address</p>
        </header>
        <section className="education">
          <h2>Education</h2>
          <div className="degree">
            <h3>Degree</h3>
            <p>Institution</p>
            <p>Start Date - End Date</p>
            <p>Location</p>
          </div>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <div className="role">
            <h3>Role</h3>
            <p>Company</p>
            <p>Start Date - End Date</p>
            <p>Location</p>
          </div>
        </section>
      </div>
    </div>
  );
};
