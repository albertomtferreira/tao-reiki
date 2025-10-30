import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">My Journey</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-user-circle"></i>
            </div>
          </div>

          <div className="about-text">
            <h3>Certified Reiki Practitioner</h3>
            <p>
              Welcome! I'm a fully certified Reiki Practitioner passionate about helping others
              discover the transformative power of energy healing. My journey with Reiki began
              several years ago when I experienced its profound effects firsthand.
            </p>
            <p>
              After witnessing the remarkable changes in my own life - from reduced stress and
              anxiety to improved overall well-being - I knew I wanted to share this gift with
              others. I completed my Reiki training and certification, studying under experienced
              masters and dedicating myself to this ancient healing art.
            </p>
            <p>
              Today, I'm honored to guide others on their healing journeys, helping them find
              balance, peace, and renewed vitality through the gentle yet powerful practice of
              Reiki. Each session is tailored to meet your unique needs, creating a safe and
              nurturing space for healing and transformation.
            </p>

            <div className="credentials">
              <div className="credential-item">
                <i className="fas fa-certificate"></i>
                <span>Certified Reiki Practitioner</span>
              </div>
              <div className="credential-item">
                <i className="fas fa-heart"></i>
                <span>Dedicated to Your Wellness</span>
              </div>
              <div className="credential-item">
                <i className="fas fa-hands"></i>
                <span>Experienced in Energy Healing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
