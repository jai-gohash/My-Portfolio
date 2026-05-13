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
                <h4>Cloud Infrastructure Intern</h4>
                <h5>Celebel Technologies</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Migrated on-premise servers to cloud infrastructure, reducing operational costs by 15%. Implemented monitoring and alerting systems to improve incident response times.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Gohashinclude Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered scalable HealthTech apps (Taplab, Righter) with multi-step onboarding, AI chat UI, and built a comprehensive Appointment Booking platform (Bookalu) along with an E-commerce app (Joilee).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer (Part-time)</h4>
                <h5>Grepin</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed workout plans and scheduling modules with responsive Flutter layouts. Customized card-based UI components and improved overall UI consistency and performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Mobile App Developer</h4>
                <h5>Kotibox Global Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing real-time audio/video calling apps (Curotiva) using Agora SDK and a multi-user voice chat platform (Vani) with dynamic participant handling, rich animations, and low-latency sockets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
