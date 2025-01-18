import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Learnify</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#" className="login">Login/Signup</a></li>
      </ul>
    </nav>
  );
};

const TutorForm = () => {
  return (
    <div className="tutor-container">
      <h1>Become a Tutor</h1>
      <form>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email address" required />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" required />

        <label htmlFor="subjects">Subjects You Can Teach</label>
        <input type="text" id="subjects" placeholder="e.g., Math, Science, English" required />

        <label htmlFor="experience">Teaching Experience</label>
        <textarea id="experience" placeholder="Describe your teaching experience" rows="4" required></textarea>

        <label htmlFor="availability">Availability</label>
        <select id="availability" required>
          <option value="" disabled selected>Select your availability</option>
          <option value="part-time">Part-Time</option>
          <option value="full-time">Full-Time</option>
          <option value="weekends">Weekends Only</option>
        </select>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <TutorForm />
    </div>
  );
};

export default App;
