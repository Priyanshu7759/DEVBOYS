import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <video autoPlay muted loop>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Unlock Your Potential</h1>
          <p>Learn from the Best Tutors Online</p>
          <div className="cta-buttons">
            <button className="cta-btn">
              <Link
                href="/FindATutor"
                style={{ color: "white", textDecoration: "none" }}
              >
                Find a Tutor
              </Link>
            </button>
            <button className="cta-btn secondary">
              <Link
                to="/BecomeTheTutor"
                style={{ color: "white", textDecoration: "none" }}
              >
                Become a Tutor
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
