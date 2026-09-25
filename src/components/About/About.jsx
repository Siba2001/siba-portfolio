import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Section Heading */}
        <h2 className="about__heading">About Me</h2>
        <div className="about__heading-line" aria-hidden="true"></div>

        {/* Introduction */}
        <p className="about__intro">
          I am a recent B.Tech Computer Science and Engineering graduate with a
          strong focus on Java Backend Development. I enjoy building web
          applications and backend systems using Java, Spring Boot, REST APIs,
          SQL, and database integration. I am also exploring{' '}
          <strong>test automation</strong> to deliver clean, reliable, and
          efficient solutions. Currently working as an{' '}
          <span className="about__highlight">SDET at TechVizor</span>.
        </p>

        {/* Info Cards */}
        <div className="about__cards">
          <div className="about__card">
            <span className="about__card-icon" aria-hidden="true">💻</span>
            <h3 className="about__card-title">Focus</h3>
            <p className="about__card-text">Java Backend Development</p>
          </div>

          <div className="about__card">
            <span className="about__card-icon" aria-hidden="true">🤖</span>
            <h3 className="about__card-title">Automation</h3>
            <p className="about__card-text">Test Automation & Quality Engineering</p>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="about__education">
          <h3 className="about__education-title">
            <span className="about__education-icon" aria-hidden="true">🎓</span>
            Education
          </h3>

          <div className="about__timeline">
            {/* B.Tech */}
            <div className="about__timeline-item">
              <div className="about__timeline-marker">
                <div className="about__timeline-dot"></div>
                <div className="about__timeline-line" aria-hidden="true"></div>
              </div>
              <div className="about__timeline-content">
                <div className="about__timeline-badge">2023 — 2026</div>
                <h4 className="about__timeline-degree">
                  Bachelor of Technology in CSE
                </h4>
                <p className="about__timeline-board">BPUT, Odisha</p>
                <p className="about__timeline-college">
                  Roland Institute of Technology, Berhampur
                </p>
                <div className="about__timeline-score">
                  <span className="about__timeline-score-label">CGPA</span>
                  <span className="about__timeline-score-value">8.27 / 10</span>
                </div>
              </div>
            </div>

            {/* Diploma */}
            <div className="about__timeline-item">
              <div className="about__timeline-marker">
                <div className="about__timeline-dot"></div>
              </div>
              <div className="about__timeline-content">
                <div className="about__timeline-badge">2021 — 2023</div>
                <h4 className="about__timeline-degree">
                  Diploma in CSE
                </h4>
                <p className="about__timeline-board">SCTEVT, Odisha</p>
                <p className="about__timeline-college">
                  S.M.I.T, Ankushpur
                </p>
                <div className="about__timeline-score">
                  <span className="about__timeline-score-label">Percentage</span>
                  <span className="about__timeline-score-value">75.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
