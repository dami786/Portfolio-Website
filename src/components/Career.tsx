import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Reddev.us</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started my professional journey at Reddev.us as a Full Stack
              Developer, building responsive frontend interfaces, backend APIs,
              and database-driven web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>Reddev.us</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Promoted to Senior Full Stack Developer at the same company,
              leading development tasks, managing project architecture, and
              delivering high-quality web solutions for clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Owner</h4>
                <h5>DU Global Agency</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Now I run my own company, DU Global Agency, where I work as an
              owner and full stack expert to provide complete digital and web
              development services to businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
