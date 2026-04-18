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
                <h4>Video Editor</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Editing cinematic videos and YouTube content through freelance
              projects with a strong focus on storytelling and visual polish.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>B.Tech CSE</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing Computer Science and Engineering while learning
              programming, data structures, and practical web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Independent Projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Building responsive web applications and interactive interfaces
              with React, motion, and a clean modern visual approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
