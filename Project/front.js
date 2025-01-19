import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Learnify</div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="./find tutor.html">Find a Tutor</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="./login and signup.html" className="login">
            Login/Signin
          </a>
        </li>
      </ul>
    </nav>
  );
};

const HeroSection = () => {
  return (
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
            <a
              href="./find a tutor.html"
              style={{ color: "white", textDecoration: "none" }}
            >
              Find a Tutor
            </a>
          </button>
          <button className="cta-btn secondary">
            <a
              href="./become a tutor.html"
              style={{ color: "white", textDecoration: "none" }}
            >
              Become a Tutor
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2>Why Learnify?</h2>
      <div className="features-list">
        <div className="feature">🌟 Expert Tutors</div>
        <div className="feature">📅 Flexible Scheduling</div>
        <div className="feature">💰 Affordable Rates</div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="carousel">
        <div className="testimonial">
          "Learnify has connected me with amazing tutors who have helped me ace
          my exams!"
        </div>
        <div className="testimonial">
          "Flexible scheduling and expert tutors made learning enjoyable and
          productive."
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Social Links</a>
        <a href="#">About</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default App;
