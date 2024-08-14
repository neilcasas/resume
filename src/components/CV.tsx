import "../styles/CV.scss";
function CV() {
  return (
    <div className="cv-container">
      <div className="cv-main">
        <div className="cv-content">
          <div className="cv-details">
            <h1>John Doe</h1>
            <div className="cv-contact">
              <div>johndoe@email.com</div>
              <div>+63 918 647 1576</div>
              <div>London, UK</div>
            </div>
          </div>
          <div className="cv-education">
            <div>University</div>
          </div>
          <div className="cv-experience">
            <div>Software Engineer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
