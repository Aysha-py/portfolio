import React from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/aishat-muhammed/">
                <i className="fa fa-linkedin"></i>
              </a>

              <a href="https://twitter.com/fav_watchgirl">
                <i className="fa fa-twitter"></i>
              </a>

              <a href="https://github.com/Aysha-py">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.instagram.com/vvv.aish/#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                Hi! I am <span className="highlighted-text">Aisha</span>
              </span>
            </div>
            <div className="profile-details-role">
              <h1>
                <Typical
                  steps={[
                    "Software Dev",
                    2000,
                    "Technical Writer",
                    2000,
                    "Open Source Contributor",
                    2000,
                    "Volunteer",
                    2000,
                  ]}
                  loop={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                <h3>
                  Enjoy Building Responsive Web application and writing
                  technical Articles
                </h3>
              </span>
            </div>
            <div className="profile-options">
              <button className="button primary-button">Hire Me</button>
              <a href="ehizcv.pdf" download="Aisha ehizcv.pdf">
                <button className="button highlighted-button">Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
